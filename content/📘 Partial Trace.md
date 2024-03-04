---
tags:
  - "#quantum-theory"
---
The Partial Trace allows us to map a [[📘 Density matrix]] $\rho_{SE}$ into a the [[📘 Density matrix]] $\rho_S$ of a [[📘 Reduced system]]. It has the key defining properties:

- $\mathrm{Tr}_{E} : H_S \bigotimes H_E \rightarrow H_S$, where
	- $H_S$ and $H_E$ are [[📘 Quantum Hilbert Space]]s
	- $\bigotimes$ is their [[tensor product]].
- $\braket{A} = \mathrm{Tr}[ ( A \bigotimes \mathbb{I}_E ) \rho_{SE}] = \mathrm{Tr} [ A \rho_S]$, where
	- $A$ is a [[📘 Quantum observable]].
	- $\mathbb{I}_E$ is the [[📘 Identity]] operator on $H_E$
	- $\mathrm{Tr}$ is the usual [[Trace]].
	- $\rho_{SE}$ is our [[📘 Density matrix]] on the full $H_S \bigotimes H_E$ system.
	- $\rho_S$ is the [[📘 Density matrix]] of the [[📘 Reduced system]], obtained via $\rho_S = \mathrm{Tr}_E [ \rho_{SE}]$ 

The definition of Trace follows from the condition $\mathrm{Tr}[ ( A \bigotimes \mathbb{I}_E ) \rho_{SE}] = \mathrm{Tr} [ A \rho_S]$, and I want to learn that derivation. [[Help me ❓]]

# Properties
We have that
- $\mathrm{Tr}[A \bigotimes B] = \mathrm{Tr}[A] \mathrm{Tr}[B]$ 
- $\mathrm{Tr}_B[A \bigotimes B] = A \mathrm{Tr}[B]$ 
- $\mathrm{Tr}_A[A \bigotimes B] = \mathrm{Tr}[A] B$ 
