---
tags: #quantum-theory 
---
$\frac{d}{dt} \braket{A}_\psi = \braket{\frac{1}{i\hbar} [ A, H ]}_\psi$ describes the time evolution of measurement uncertainty in the [[Heisenberg picture]]. This result ties to the [[📗 Liouville–von Neumann equation]] from the [[Schrodinger picture]], which applies to a [[📘 Statistical Operator]] $\hat \rho$, where
- $H$ is the [[📘 Hamiltonian Operator]]
- $[ \cdot , \cdot ]$ is the [[📘 Commutator]]
- $\braket{A}_\psi$ is the [[📘 Expectation]] of a measurement under operator $A$ given we're in the [[📘 Quantum state vector]] $\psi$ 

# Proof
$$\frac{d}{dt}\braket{A}_\psi = \frac{d}{dt} \braket{\psi, A \psi} = \braket{\frac{d}{dt}\psi , A \psi} + \braket{\psi, A \frac{d}{dt}\psi}$$
Plugging [[📕 Postulate 4 - Schrodinger Equation]] $\frac{d}{dt}\psi = \frac{1}{i\hbar}H\psi$ into the calculation above we get  
$$\braket{\frac{1}{i\hbar}H\psi , A \psi} + \braket{\psi, A \frac{1}{i\hbar}H\psi} = \frac{1}{i\hbar} \left ( - \braket{H\psi, A\psi} + \braket{\psi, AH\psi} \right )$$

 Since $\hat{H}$ is a [[📘 Self-Adjoint Operator]], we can rearrange the above to equal
 $$\frac{1}{i\hbar} \left ( - \braket{\psi, HA\psi} + \braket{\psi, AH\psi} \right ) = \frac{1}{i\hbar}\braket{\psi, ( - HA + AH) \psi} = \frac{1}{i\hbar}\braket{AH-HA}_\psi = \braket{\frac{1}{i\hbar} [ A, H ]}_\psi$$
