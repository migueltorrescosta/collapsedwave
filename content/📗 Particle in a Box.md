---
tags:
  - "#quantum-theory"
---
Suppose we have a particle moving freely in a box. We can model this as a [[quantum state vector]] $\psi(x), x \in [0,L]^n$, with the [[wave function]] being $0$ on the [[boundary]] $\partial [0,L]^n$ of the domain. Since we are working with a [[free particle]], the [[Hamiltonian]] $H$ is given by $H=\frac{P^2}{2m}$, where $m$ is the particle's [[mass]] and $P$ is the [[📘 Momentum Operator]]. In the [[position basis]], we get that the [[📕 Postulate 4 - Schrodinger Equation]] becomes:

$$
\begin{array}{rcll}
i \hbar \frac{\partial}{\partial t}\psi_t(x) & = &  -\frac{\hbar^2}{2M}\frac{\partial^2}{\partial x^2}\psi_t(x) & \text{moving all constants to the left side} \\
\frac{\partial}{\partial t}\psi_t(x) & = &  \frac{i\hbar}{2M}\frac{\partial^2}{\partial x^2}\psi_t(x) & \text{Using the ansatz } \psi_t(x) = A(e^{\alpha x} - e^{-\alpha x})e^{\beta t}: \alpha,\beta \in \mathbb{R}^n\\
\beta \psi_t(x) & = &  \frac{i\hbar}{2M}\alpha^2\psi_t(x) & \\
2M \beta & = &  i\hbar \alpha^2 & \\
\end{array}
$$

The $ansatz$ already took into consideration the boundary condition at $0$ for any dimension. The boundary condition at $L$ for dimension $i$ gives us that
$$
\begin{array}{rll}
0&=\left . \psi_t(x) \right |_{x_i=L}\\
&=\left . A(e^{\alpha x} - e^{- \alpha x})e^{\beta t} \right |_{x_i=L} & \text{since this equality holds for all $t$}\\
& = \left . e^{\alpha_i x_i} - e^{- \alpha_i x_i} \right |_{x_i=L} \\
& = e^{\alpha_i L} - e^{- \alpha_i L}\\
& \Updownarrow\\
\alpha_iL & = i \pi n_i \exists n_i \in \mathbb{N}\\
\alpha_i & = \frac{i n_i \pi}{L}
\end{array} 
$$
This gives us the general solution $\psi_t(x) = A \prod_{i=1}^n \sin(\frac{n_i \pi x_i}{L})e^{\beta t}$. Since this is an eigen solution, the time evolution only impacts the [[Global Phase]], and as such we can discard the $e^{\beta t}$ component for our initial state $\psi_0(x)$. Due to normalization requirements,
$$
\begin{array}{rll}
1 &= \|\psi_0(x) \| \\
&= \int_{[0,L]^n}A \prod_{i=1}^n \sin(\frac{n_i\pi x_i}{L})dx \\
&= A \prod_{i=1}^n \int_0^L\sin(\frac{n_i \pi x_i}{L})dx_i \\
&= A \prod_{i=1}^n (2 \frac{L}{n_i \pi}\cos(\frac{n_i \pi L}{L})) \\
&= A \prod_{i=1}^n \frac{2L}{n_i \pi} \\
&= A (\frac{2L}{\pi})^n \frac{1}{\prod_{i=1}^n n_i} \\
& \Downarrow \\
A & = (\frac{\pi}{2L})^n \prod_{i=1}^n n_i
\end{array}
$$
The value observed in this constant $A$ differs from the expected value according to [[📖 Principles of Quantum Mechanics]], Chapter 10, page 259. [[Help me ❓]]
