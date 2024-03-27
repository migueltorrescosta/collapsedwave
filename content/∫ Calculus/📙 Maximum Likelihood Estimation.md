---
tags:
  - "#calculus"
---
# Setup
We have a [[random variable]] $X$ which can be parameterised using $\theta$, where $X$ and $\theta$ might be [[scalar]]s, [[vector]]s, etc. We have a [[probability distribution function]] $f(x, \theta)$ which describes the probability of making the observation $x \in X$ for a specific parameter $\theta$, i.e. $\mathbb{P}[X \in A] = \int_A f(x; \theta) dx$.  

Our goal is to find the parameters $\theta$ that maximise our observations $\{ x_i \}_i$. 

# Procedure
1. We define the likelihood of our observations $L = L_\theta(\{ x_i \}_i) = \prod_i f(x_i, \theta)$.
2. We calculate, usually analytically, $\underset{\theta}{argmax} \left \{ L_\theta(\{ x_i \}_i) \right \} = \underset{\theta}{argmax} \left \{ \prod_i f(x_i, \theta) \right \}$.
	1. Since $argmax$ is constant under [[📘 Monotonic]] transformations, it is often useful to instead calculate $\underset{\theta}{argmax} \left \{ \prod_i f(x_i, \theta) \right \} = \underset{\theta}{argmax} \left \{ \log \left ( \prod_i f(x_i, \theta) \right ) \right \} = \underset{\theta}{argmax} \left \{ \sum_i \log \left ( f(x_i, \theta) \right ) \right \}$ 


Even though the procedure above finds us the $\theta$ that maximises the likelihood, it does not provide us with information about the uncertainty around $\theta$. This could be measured with the [[variance]] of our estimated $\bar \theta$, or something else. I am not familiar with standardised methods of obtaining such a result. [[Help me ❓]]