---
date: 2023-12-20
tags:
  - quantum-theory
---
A Quantum gate represents an operation that can be applied on qubits. Given the [[📘 Block Sphere]] visualization of a [[qubit]]'s state, we can think of a quantum gate as the application of a rotation on the state of multiple qubits.

# Common quantum gates

The notation for quantum gates has been mostly standardised. Examples include

| Symbol | Gate | $\ket{0} \rightarrow ...$ | $\ket{1} \rightarrow ...$ |
| ---: | :--- | ---- | ---- |
| X | [[📘 Pauli Matrix]] $\sigma_x$ | $\ket{1}$ | $\ket{0}$ |
| Y | [[📘 Pauli Matrix]] $\sigma_y$ | $-i\ket{1}$ | $i\ket{0}$ |
| Z | [[📘 Pauli Matrix]] $\sigma_z$ | $\ket{0}$ | $\ket{1}$ |
| H | [[📘 Quantum Gate#Hadamard Gate]] | $\frac{\ket{0} + \ket{1}}{\sqrt{2}}$ | $\frac{\ket{0} - \ket{1}}{\sqrt{2}}$ |
| S | [[Phase gate]] | $\ket{0}$ | $i\ket{1}$ |

> [!tip] Overview of quantum gates
> ![[quantum_logic_gates.png]]
> Source: [wikipedia](https://en.wikipedia.org/wiki/Quantum_logic_gate)
> 
> ![[Pasted image 20231231203305.png]]
> Source: IBM Research

# Single qubit gates
## Hadamard Gate

The Hadamard gate acts on a single [[qubit]], applying the transformations

$$\ket{0} \rightarrow \frac{\ket{0} + \ket{1}}{\sqrt{2}}$$
$$\ket{1} \rightarrow \frac{\ket{0} - \ket{1}}{\sqrt{2}}$$

>[!tip]
> The Hadamard gate can be seen as a rotation by $\pi$ on the [[📘 Block Sphere]] along the $\frac{ \hat{x} + \hat{z} }{\sqrt{2}} direction$. 