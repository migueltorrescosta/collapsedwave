---
tags: #quantum-theory 
---
In the [[Heisenberg picture]], the time evolution of measurement uncertainty follows the equation $\frac{d}{dt} \braket{A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$. This result ties to the [[📗 Liouville–von Neumann equation]] from the [[Schrodinger picture]], which applies to a [[📘 Density matrix]] $\hat \rho$.

>[!info]-
> 1. $H$ is the [[📘 Hamiltonian Operator]]
> 2. $\hat{H}$ is the [[📘 Self-Adjoint Operator]] associated to $H$ 
> 3. $[ \cdot , \cdot ]$ is the [[📘 Commutator]]
> 4. $\braket{A}_\psi$ is the [[📘 Expectation]] of a measurement under operator $A$ given we're in the [[quantum state vector]] $\psi$ 

>[!success]
> $$\frac{d}{dt}\braket{A}_\psi = \frac{d}{dt} \braket{\psi, A \psi} = \braket{\frac{d}{dt}\psi , A \psi} + \braket{\psi, A \frac{d}{dt}\psi}$$
>
> Plugging [[📕 Postulate 4 - Schrodinger Equation]] $\frac{d}{dt}\psi = \frac{1}{i\hbar}\hat{H}\psi$ into the calculation above we get  
>
> $$\braket{\frac{1}{i\hbar}\hat{H}\psi , A \psi} + \braket{\psi, A \frac{1}{i\hbar}\hat{H}\psi} = \frac{1}{i\hbar} \left ( - \braket{\hat{H}\psi, A\psi} + \braket{\psi, A\bar{H}\psi} \right )$$
> 
> Since $\hat{H}$ is a [[📘 Self-Adjoint Operator]], we can rearrange the above to equal
>
> $$\frac{1}{i\hbar} \left ( - \braket{\psi, \hat{H}A\psi} + \braket{\psi, A\bar{H}\psi} \right ) = \frac{1}{i\hbar}\braket{\psi, ( - \hat{H}A + A\hat{H}) \psi} = \frac{1}{i\hbar}\braket{A\hat{H}-\hat{H}A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$$
