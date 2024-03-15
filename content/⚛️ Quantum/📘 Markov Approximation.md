---
tags:
  - "#quantum-theory"
  - "#approximation"
---
The Markov Approximation assumes that the [[📘 Correlation time]] is very short, namely $\int_0^t \mathrm{Tr}[V(t)V(\tau)\rho_B]d\tau = \int_0^t\mathrm{Tr}[V(t-\tau)V(0)\rho_B]d\tau \approx \int_0^\infty \mathrm{Tr}[V(t-\tau)V(0) \rho_B]d\tau$, where

- $\mathrm{Tr}[ \cdot ]$ is the [[Trace]]
- 

The above results in the [[📘 2-time correlation function]] having most of it's weight when the time is approximately equal to the [[📘 Correlation time]], i.e. $t \approx \tau$.