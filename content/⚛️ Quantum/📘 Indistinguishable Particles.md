---
tags:
  - "#quantum-theory"
---
When making a [[📘 Measurement]], we obtain one of the associated [[eigenvalue]]s. In the case of indistinguishable particles, this must mean that $\ket{ab}$ and $\ket{ba}$ cannot be distinguished. In terms of the [[wave function]], this means that $\psi(a,b) = \beta \ket{ab} + \gamma \ket{ba}$. Since the particles are indistinguishable, $\psi(a,b)$ and $\psi(b,a)$ represent the same physical environment, meaning that
$$
\begin{array}{rll}
\beta \ket{ab} + \gamma \ket{ba} &= \psi(a,b) & \text{by indistinguishability} \\
&= \alpha \psi(b,a) & \text{where $| \alpha |=1$} \\
&= \alpha(\beta \ket{ba} + \gamma \ket{ab}) \\
&= \alpha\beta \ket{ba} + \alpha \gamma \ket{ab} \\
\end{array}
$$
From matching coefficients we get $\beta = \alpha \gamma$ and $\gamma = \alpha \beta$, which implies that $\alpha = \pm 1$. This property defines [[Boson]]s and [[Fermion]]s:

$$
\left \{
\begin{matrix}
\alpha &=& 1 & \text{Bosons} \\
\alpha &=& -1 & \text{Fermions} \\
\end{matrix}
\right .
$$
