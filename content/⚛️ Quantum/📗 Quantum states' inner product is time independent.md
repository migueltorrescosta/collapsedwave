---
tags:
  - "#theorem"
  - "#quantum-theory"
---
$\braket{\phi(t) \mid \psi(t)}$ is independent of $t$ for 2 solutions $\psi, \phi$  of the same equation ( [[📕 Postulate 4 - Schrodinger Equation]] ), where
1. $\psi, \phi$ are time parameterized [[📘 Quantum state]] solutions to [[📕 Postulate 4 - Schrodinger Equation]]
2. $\braket{ \cdot, \cdot } : H \times H \rightarrow \mathbb{C}$ is an [[📘 Inner Product]] on the [[📘 Quantum Hilbert Space]] 
3. $t \in \mathbb{R}^+$ denotes time.

$$
\begin{array}{rll}
\frac{d}{dt}\braket{\phi, \psi} &= \braket{\frac{d}{dt}\phi, \psi} + \braket{\phi, \frac{d}{dt}\psi} & \text{Using the product rule for derivatives} \\
&= \braket{\frac{1}{i\hbar}\hat{H}\phi, \psi} + \braket{\phi, \frac{1}{i\hbar}\hat{H}\psi} & \text{By Schrodinger's Equation}\\
&= -\frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} + \frac{1}{i\hbar}\braket{\phi, \hat{H}\psi} & \text{Using the linearity of the Inner Product}\\
&= -\frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} + \frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} & \text{Since $\hat H$ is self adjoint}\\
&= 0
\end{array}
$$

Hence $\frac{d}{dt}\braket{\phi, \psi}=0$, so the [[📘 Inner Product]] $\braket{\phi, \psi}$ is time-independent
