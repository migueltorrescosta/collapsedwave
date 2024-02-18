---
date: 2023-10-12
tags:
  - "#quantum-theory"
  - "#numerical-analysis"
---
Trotterization is the approximating the time evolution of a [[quantum state vector]] $\ket{\Psi(t)} = e^{iHh} \ket{\Psi(0)}$, by applying the [[📘 Quantum Gate]] $e^{\frac{iHh}{N}}$, $N$ times.

>[!info]-
> $\ket{\Psi(t)}$ is a [[quantum state vector]] evolving according to the [[📘 Hamiltonian Operator]] $H$.

>[!quote]
> [quiskit.org](https://qiskit.org/ecosystem/algorithms/tutorials/13_trotterQRTE.html) is a [[Python]] API to experiment with quantum algorithms. It can be used with actual hardware, or using a quantum computer emulator.