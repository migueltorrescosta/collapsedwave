---
tags:
  - "#quantum-theory"
---
# Goal
We have a particle in an environment with constant potential $V(x) = k$.

# Solution
The associated [[Hamiltonian]] is given by $H = \frac{P^2}{2m} + V(x) = \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+k$. The associated [[📘 Time-independent Schrodinger equation]] is given by

$$
\begin{array}{rll}
E\ket{\psi} &= H \ket{\psi} & \text{Expanding the Hamiltonian} \\
&=\left ( \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+k \right ) \ket{\psi} \\
&= \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\ket{\psi} + k \ket{\psi}\\
& \Updownarrow \\
(E-k) \ket{\psi} &= \frac{-\hbar^2}{2m}\frac{\partial^2}{\partial x^2}\ket{\psi} \\
\end{array} 
$$
This is a standard [[📙 Differential Equation]], whose solution can be written in the [[position basis]] as:
$$
\psi(x) =
\left \{
\begin{array}{ll}
A\exp \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x\right ) + B\exp \left ( -\frac{\sqrt{2m(E-k)}}{\hbar} x \right ), & \frac{-\hbar^2}{2m(E-k) } \geq 0 \\
Ax + B, & E=k \\
A\cos \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) + B\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ), & \frac{-\hbar^2}{2m(E-k)} \geq 0 \\
\end{array}
\right .
$$

Simplifying the conditions by comparing the values of $E$ and $k$ directly, we get
$$
\psi(x) =
\left \{
\begin{array}{ll}
A\exp \left ( \frac{\sqrt{2m(k-E)}}{\hbar} x\right ) + B\exp \left ( -\frac{\sqrt{2m(k-E)}}{\hbar} x \right ), & E \leq k \\
Ax + B, & E=k \\
A\cos \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) + B\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ), & E \geq k \\
\end{array}
\right .
$$
