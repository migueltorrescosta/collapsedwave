---
date: 2023-10-14
tags:
  - theorem
  - quantum-theory
---
$\braket{\phi(t), \psi(t)}$ is independent of $t$

>[!info]-
> 1. $\psi, \phi$ are time parameterized [[quantum state vector]] solutions to [[📕 Schrodinger equation]]
> 2. $\braket{ \cdot, \cdot } : H \times H \rightarrow \mathbb{C}$ is an [[📘 Inner Product]] on the [[📘 Quantum Hilbert Space]] 
> 3. $t \in \mathbb{R}^+$ denotes time.

>[!success]
> $\frac{d}{dt}\braket{\phi, \psi} = \braket{\frac{d}{dt}\phi, \psi} + \braket{\phi, \frac{d}{dt}\psi}$ 
>
> Since $\psi, \phi$ are solutions to the [[📕 Schrodinger equation]] $\frac{d\psi}{dt} = \frac{1}{i\hbar}\hat{H}\psi$ the above equals
> 
> $$ \braket{\frac{1}{i\hbar}\hat{H}\phi, \psi} + \braket{\phi, \frac{1}{i\hbar}\hat{H}\psi} = -\frac{1}{i\hbar}\braket{\hat{H}\phi, \psi} + \frac{1}{i\hbar}\braket{\phi, \hat{H}\psi} $$
> Since $\hat{H}$ is a [[📘 Self Adjoint Operator]], the two [[📘 Inner Product]]s we see are equal, so the terms cancel out and equal zero, so the original [[📘 Inner Product]] $\braket{\phi, \psi}$ does not vary with $t$.
