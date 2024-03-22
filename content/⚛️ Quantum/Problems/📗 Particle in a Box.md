---
tags:
  - "#quantum-theory"
---
## Setup
Suppose we have a particle moving freely in a box. We can model this as a [[📘 Quantum state]] $\psi(x), x \in [0,L]^n$, with the [[wave function]] being $0$ on the [[boundary]] $\partial [0,L]^n$ of the domain. Since we are working with a [[free particle]], the [[Hamiltonian]] $H$ is given by $H=\frac{P^2}{2m}$, where $m$ is the particle's [[mass]] and $P$ is the [[📘 Momentum Operator]].

## Solution

Using the [[📘 Time-independent Schrodinger equation]], we get
$$
\begin{array}{rll}
E\ket{\psi} & = H \ket{\psi} & \text{By definition of our Hamiltonian $H$}\\
&= \frac{P^2}{2m} \ket{\psi} & \text{By definition of the Momentum Operator}\\
& = - \frac{\hbar^2}{2m} \nabla^2\ket{\psi}\\
\end{array}
$$
This relatively standard [[📙 Differential Equation]] has the general solution $\ket{\psi} = Ae^\frac{2mx_i}{\hbar E} + Be^{-\frac{2mx_i}{\hbar E}}$, where $x_i$ is any of the dimensions involved. Putting in the boundary conditions along the $\overrightarrow{e_i}$ axis, and re-expressing the solution as $\ket{\psi} = A\sin ( \frac{2m}{\hbar E}x ) + B\cos ( -\frac{2m}{\hbar E}x_i)$, we get 
$$
\left \{
\begin{matrix}
0 = A\sin ( 0 ) + B\cos ( 0) \\
0 = A\sin ( \frac{2mL}{\hbar E} ) + B\cos ( -\frac{2mL}{\hbar E})
\end{matrix}
\right .
\Rightarrow
\left \{
\begin{matrix}
0 = B \\
0 = \sin ( \frac{2mL}{\hbar E} )
\end{matrix}
\right .
\Rightarrow
\left \{
\begin{matrix}
0 = B \\
\pi n_i = \frac{2mL}{\hbar E}
\end{matrix}
\right .
\Rightarrow
\left \{
\begin{matrix}
B = 0 \\
E = \frac{2mL}{\hbar \pi n_i}
\end{matrix}, n_i \in \mathbb{N}
\right .
$$

Joining the results for all dimensions, we get the solution $\ket{\psi} = A \prod_{i=1}^n \sin ( \frac{\pi n_i x}{L} )$. Normalising the result we get
$$
\begin{array}{rll}
1 &= \|\psi(x) \| \\
&= \int_{[0,L]^n}A \prod_{i=1}^n \sin(\frac{n_i\pi x_i}{L})dx \\
&= A \prod_{i=1}^n \int_0^L\sin(\frac{n_i \pi x_i}{L})dx_i \\
&= A \prod_{i=1}^n (2 \frac{L}{n_i \pi}\cos(\frac{n_i \pi L}{L})) \\
&= A \prod_{i=1}^n \frac{2L}{n_i \pi} \\
&= A (\frac{2L}{\pi})^n \frac{1}{\prod_{i=1}^n n_i} \\
& \Downarrow \\
A & = (\frac{\pi}{2L})^n \prod_{i=1}^n n_i
\end{array}
$$
The value observed in this constant $A$ differs from the expected value by a factor of $\prod_{i=1}^nn_i$ according to [[📖 Principles of Quantum Mechanics]], Chapter 10, page 259. [[Help me ❓]]