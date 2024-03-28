---
tags:
  - "#statistics"
  - "#coding"
---
The [[Metropolis–Hastings algorithm]] can be implemented in Python as an Abstract Base Class using the code below. The code was designed to:
- Take states of a Generic Type ( `Generic[T]`)
- Allow custom approval and generation functions to be used

```python
from typing import TypeVar, Generic  
from tqdm import trange  
import numpy as np  
from abc import ABC, abstractmethod  
from matplotlib import pyplot as plt  
T = TypeVar("T")  

class AbstractMetropolisHastings(ABC, Generic[T]):  
    def __init__(self, initial_configuration: T):
	     # This array describes the time evolution of our configuration
        self.configuration_history = [initial_configuration]
  
    @property  
    def current_configuration(self) -> T:  
        return self.configuration_history[-1]  
      
    @abstractmethod  
    def generator_function(self) -> T:  
        pass  
  
    @abstractmethod  
    def approval_function(self, new_configuration: T) -> bool:  
        pass  
  
    def run_single_iteration(self, limit_tries=10**5) -> T:  
        tries = 0  
        while True:  
            new_state = self.generator_function()  
            if self.approval_function(new_state):  
                self.configuration_history.append(new_state)  
                return new_state  
            tries+=1  
            if tries >= limit_tries:  
                # Useful for debugging  
                tries = 0  
                limit_tries *=2  
                print(f"{new_state:e}", end=", ")  
  
    def run_iterations(self, n: int) -> None:  
        pbar = trange(100, desc='Bar desc', leave=True)  
        for _ in pbar:  
            self.run_single_iteration()  
            pbar.set_description(f"{self.current_configuration:e} || ", refresh=True)  
  
    def plot(self) -> None:  
        plt.plot(self.configuration_history)
```


# Example Usage

## VMC
The first step is defining what VMC looks like using [[Metropolis–Hastings algorithm]]:

```python
class VMC(AbstractMetropolisHastings[float]):  
      
    def generator_function(self):  
        return self.current_configuration + np.random.normal(0, 1)  
  
    def approval_function(self, new_configuration):  
        a = 1  
        equilibrium_destribution = lambda x: np.exp(np.prod([-1,a,x,x]))  
        old_probability = equilibrium_destribution(self.current_configuration)  
        new_probability = equilibrium_destribution(new_configuration)  
        return old_probability <= new_probability * np.random.random()
```

The code above defines
- The state space to be of type `float`. More complex examples might have states in $\mathbb{R}^3$ by passing in the type `Tuple[float, float, float]`, etc
- The generator function to add normally distributed noise to the current state
- The approval function to return true iff $e^{-\alpha x_{new}^2} \leq U e^{-\alpha x_{old}^2}$, where $U$ is uniformly distributed on $[0,1]$.

With the methodology defined, we can run an example
```python
vmc = VMC(initial_configuration=10**2)
vmc.run_iterations(10**2)
vmc.plot()
```
This starts the simulation at state $x=100$, runs $100$ iterations, and then plots the result. As an example, we get the result
![[example_vmc_run.png]]