---
tags:
  - "#quantum-theory"
aliases:
  - Statistical Operator
---
A density matrix describes quantum states. It is more generic than a [[quantum state vector]], allowing us to represent [[mixed states]]. This is useful when we have classically uncertain quantum states, or are working in a [[📘 Reduced system]].

# Properties
The statistical operator $\hat \rho$ is
1. Linear: $(\alpha \hat \rho+ \beta) \ket{\psi} = \alpha \hat \rho \ket{\psi} + \beta \ket{\psi}$
2. Positive: $\braket{\psi | \hat \rho | \psi } \geq 0 \forall \ket{\psi}$.
3. Has trace 1: $\mathrm{Tr}[\hat \rho] = 1$ 

# Examples
1. We have a system which is in state $\ket{\psi_\alpha}$ with probability $p_\alpha$, $\sum_{\alpha} p_\alpha = 1$, and make a measurement $\hat O = \sum_n O_n \ket{O_n}\bra{O_n}$. Then $\mathbb{P}[O_n] = \sum_\alpha p_\alpha | \braket{p_\alpha | O_n } |^2$. This can be rewritten as $\mathbb{P}[O_n] = \braket{O_n | \hat \rho | O_n}$, where $\hat \rho$ is our density matrix.

The difference between [[📘 Density matrix]] and Density Operator is tricky to define. [[Help me ❓]]