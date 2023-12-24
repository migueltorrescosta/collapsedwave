---
date: 2023-10-14
tags:
  - theorem
  - quantum-theory
---
$\braket{\phi(t) \mid \psi(t)}$ is independent of $t$ for 2 solutions $\psi, \phi$  of [[📕 Schrodinger equation]]

>[!info]-
> 1. $\psi, \phi$ are time parameterized [[quantum state vector]] solutions to [[📕 Schrodinger equation]]
> 2. $\braket{ \cdot, \cdot } : H \times H \rightarrow \mathbb{C}$ is an [[📘 Inner Product]] on the [[📘 Quantum Hilbert Space]] 
> 3. $t \in \mathbb{R}^+$ denotes time.

>[!success]
> |  | Action |
> | ---: | :--- |
> | $\frac{d}{dt}\braket{\phi, \psi}$ | Taking the derivative of the product |
> | $\braket{\frac{d}{dt}\phi, \psi} + \braket{\phi, \frac{d}{dt}\psi}$ | Applying [[📕 Schrodinger equation]] |
> | $\braket{\frac{1}{i\hbar}\hat{H}\phi, \psi} + \braket{\phi, \frac{1}{i\hbar}\hat{H}\psi}$ | Using the linearity of the [[📘 Inner Product]] |
> | $-\frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} + \frac{1}{i\hbar}\braket{\phi, \hat{H}\psi}$ | Since $\hat H$ is self adjoint |
> | $-\frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} + \frac{1}{i\hbar}\braket{\hat{H}\phi, \psi}$ | |
> | $0$ |  |
> 
> Hence $\frac{d}{dt}\braket{\phi, \psi}=0$, so the braket $\braket{\phi, \psi}$ is constant over time $t$


