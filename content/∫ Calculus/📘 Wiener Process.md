---
tags:
  - "#ito-calculus"
  - "#stochastic-processes"
  - "#probability"
aliases:
  - Brownian Motion
---
A Wiener process $W_t$ is a random process defined by:
- $W_0 = 0$ [[almost surely]]
- $\forall s \leq t$ we have that $W_{t+u}-W_t$ is independent of $W_s$.
- $W_{t+u}-W_t \sim \mathcal{N}(0,u)$, i.e. it is [[normally distributed]] with [[mean]] $0$ and [[variance]] $u$.
- $W$ has [[almost surely]] [[continuous]] [[path]]s.