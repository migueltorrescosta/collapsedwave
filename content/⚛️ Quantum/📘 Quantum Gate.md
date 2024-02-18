---
date: 2023-12-20
tags:
  - "#quantum-theory"
  - "#quantum-computing"
---
A Quantum gate represents a logic operation that can be applied on [[qubit]]s. It is always a Unitary transformation on a [[📘 Quantum Hilbert Space]], and as such is always reversible.

# Quantum Gate Summary

The notation for quantum gates has been mostly standardised. Examples include

| Symbol | Gate | $\ket{0} \rightarrow ...$ | $\ket{1} \rightarrow ...$ |
| ---: | :--- | ---- | ---- |
| X | [[📘 Pauli Matrix]] $\sigma_x$ | $\ket{1}$ | $\ket{0}$ |
| Y | [[📘 Pauli Matrix]] $\sigma_y$ | $-i\ket{1}$ | $i\ket{0}$ |
| Z | [[📘 Pauli Matrix]] $\sigma_z$ | $\ket{0}$ | $\ket{1}$ |
| H | [[📘 Hadamard gate]] | $\frac{\ket{0} + \ket{1}}{\sqrt{2}}$ | $\frac{\ket{0} - \ket{1}}{\sqrt{2}}$ |
| S | [[Phase gate]] | $\ket{0}$ | $i\ket{1}$ |

> [!tip] Overview of quantum gates
> ![[quantum_logic_gates.png]]
> Source: [wikipedia](https://en.wikipedia.org/wiki/Quantum_logic_gate)
> 
> ![[common_quantum_gates_summary.png]]
> Source: IBM Research
