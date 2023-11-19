---
date: 2023-10-14
---
$\frac{d}{dt} \braket{A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$
### ✍️ Notation
- $H$ is the [[📘 Hamiltonian Operator]]
- $\hat{H}$ is the [[📘 Self Adjoint Operator]] associated to $H$ 
- $[ \cdot , \cdot ]$ is the [[📘 Commutator]]
- $\braket{A}_\psi$ is the [[📘 Expectation value]] of a measurement under operator $A$ given we're in the [[quantum state vector]] $\psi$ 
### 🧠 Proof
$$\frac{d}{dt}\braket{A}_\psi = \frac{d}{dt} \braket{\psi, A \psi} = \braket{\frac{d}{dt}\psi , A \psi} + \braket{\psi, A \frac{d}{dt}\psi}$$

Due to the [[📕 Schrodinger equation]] , we know that $\frac{d\psi}{dt} = \frac{1}{i\hbar}\hat{H}\psi$. By plugging that into the calculation above we get  

$$\braket{\frac{1}{i\hbar}\hat{H}\psi , A \psi} + \braket{\psi, A \frac{1}{i\hbar}\hat{H}\psi} = \frac{1}{i\hbar} \left ( - \braket{\hat{H}\psi, A\psi} + \braket{\psi, A\bar{H}\psi} \right )$$

Since $\hat{H}$ is a [[📘 Self Adjoint Operator]], we can rearrange the above to equal

$$\frac{1}{i\hbar} \left ( - \braket{\psi, \hat{H}A\psi} + \braket{\psi, A\bar{H}\psi} \right ) = \frac{1}{i\hbar}\braket{\psi, ( - \hat{H}A + A\hat{H}) \psi} = \frac{1}{i\hbar}\braket{A\hat{H}-\hat{H}A}_\psi = \braket{\frac{1}{i\hbar} [ A, \hat{H} ]}_\psi$$