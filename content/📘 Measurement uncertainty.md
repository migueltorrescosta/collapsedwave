---
date: 2023-10-14
---
$( \Delta_\psi A )^2 := \braket{ ( A - \braket{A}_\psi I)^2} = \braket{A^2}_\psi - ( {A}_\psi )^2$

The value $\Delta_\psi A$ is known as the uncertainty of [[measurement]] $A$ in the state $\psi$.

>[!info]-
> 1. $A: H \rightarrow H$ is a [[📘 Linear Operator#Self Adjoint Operator]]
> 2. $\psi \in H$ is a [[quantum state vector]]
> 3. $\braket{A}_\psi$ is the [[📘 Expectation value]] of $A$ given the [[quantum state vector]] $\psi$
> 4. $I$ is the identity matrix

## Time evolution of the measurement uncertainty
$\frac{d}{dt} \braket{A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$

>[!info]-
> 1. $H$ is the [[📘 Hamiltonian Operator]]
> 2. $\hat{H}$ is the [[📘 Linear Operator#Self Adjoint Operator]] associated to $H$ 
> 3. $[ \cdot , \cdot ]$ is the [[📘 Commutator]]
> 4. $\braket{A}_\psi$ is the [[📘 Expectation value]] of a measurement under operator $A$ given we're in the [[quantum state vector]] $\psi$ 

>[!success]
> $$\frac{d}{dt}\braket{A}_\psi = \frac{d}{dt} \braket{\psi, A \psi} = \braket{\frac{d}{dt}\psi , A \psi} + \braket{\psi, A \frac{d}{dt}\psi}$$
>
> Plugging [[📕 Postulates of Quantum Mechanics#Postulate 4 Schrodinger's Equation]] $\frac{d}{dt}\psi = \frac{1}{i\hbar}\hat{H}\psi$ into the calculation above we get  
>
> $$\braket{\frac{1}{i\hbar}\hat{H}\psi , A \psi} + \braket{\psi, A \frac{1}{i\hbar}\hat{H}\psi} = \frac{1}{i\hbar} \left ( - \braket{\hat{H}\psi, A\psi} + \braket{\psi, A\bar{H}\psi} \right )$$
> 
> Since $\hat{H}$ is a [[📘 Linear Operator#Self Adjoint Operator]], we can rearrange the above to equal
>
> $$\frac{1}{i\hbar} \left ( - \braket{\psi, \hat{H}A\psi} + \braket{\psi, A\bar{H}\psi} \right ) = \frac{1}{i\hbar}\braket{\psi, ( - \hat{H}A + A\hat{H}) \psi} = \frac{1}{i\hbar}\braket{A\hat{H}-\hat{H}A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$$
