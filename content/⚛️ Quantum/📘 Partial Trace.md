---
tags:
  - "#quantum-theory"
aliases:
  - Reduced trace
---
The Partial Trace $\mathrm{Tr}_E$ allows us to map a [[📘 Density Operator]] $\rho_{SE}$ into the [[📘 Density Operator]] $\rho_S$ of a [[📘 Reduced system]]. $\rho_S$ is also known as the [[📘 Partial Trace|Reduced trace]] It has the key defining properties:

$$
\left \{
\begin{array}{l}
\mathrm{Tr}_{E} : H_S \bigotimes H_E \rightarrow H_S \\
\braket{A} = \mathrm{Tr}_S[ ( S \bigotimes \mathbb{I}_E ) \rho_{SE}] = \mathrm{Tr} [ A \rho_S]
\end{array}
\right .
$$

In the above:
- $H_S$ and $H_E$ are [[📘 Quantum Hilbert Space]]s
- $\bigotimes$ is their [[📘 Tensor product]].
- $A$ is a [[📘 Quantum observable]] in the [[📘 Quantum Hilbert Space]] $H_S$
- $\mathbb{I}_E$ is the [[📘 Identity]] operator on $H_E$.
- $\mathrm{Tr}$ is the [[Trace]].
- $\rho_{SE}$ is our [[📘 Density Operator]] on the full $H_S \bigotimes H_E$ system.
- $\rho_S$ is the [[📘 Density Operator]] of the [[📘 Reduced system]], obtained via $\rho_S = \mathrm{Tr}_E [ \rho_{SE}]$ 

The definition of Trace follows from the condition $\mathrm{Tr}_S[ ( A \bigotimes \mathbb{I}_E ) \rho_{SE}] = \mathrm{Tr} [ A \rho_S] \forall A \in H_S$. It is unclear how this property fully defines the trace. [[Help me ❓]]
# Properties

- $\mathrm{Tr}[A \bigotimes B] = \mathrm{Tr}[A] \mathrm{Tr}[B]$ 
- $\mathrm{Tr}_B[A \bigotimes B] = A \mathrm{Tr}[B]$ 
- $\mathrm{Tr}_A[A \bigotimes B] = \mathrm{Tr}[A] B$ 
