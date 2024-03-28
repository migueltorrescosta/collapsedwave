---
tags:
  - "#quantum-computing"
---
# Setup
Given a function $f: \mathbb{F}_2 \rightarrow \mathbb{F}_2$, can we know whether this function is constant with a single evaluation?

# Solution
We can solve the above in 3 steps
1. Set the initial state $\ket{\psi}$ into a superposition of $\ket{0}$ and $\ket{1}$ via $H\ket{0} = \frac{\ket{0}+\ket{1}}{\sqrt{2}}$, where $H$ is the [[📘 Hadamard gate]].

![[deutschs_algorithm.png]]