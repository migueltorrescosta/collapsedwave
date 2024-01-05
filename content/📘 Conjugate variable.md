---
date: 2023-12-29
tags:
  - "#quantum-theory"
  - "#definition"
---
Conjugate variables are pairs of [[Operator]]s that satisfy the relation $[A,B] = i\hbar$ . As examples we have:

1. [[📘 Quantum Hilbert Space#Position Operator]] and [[📘 Quantum Hilbert Space#Momentum Operator]]


>[!success] Proof that the [[📘 Quantum Hilbert Space#Position Operator]] and [[📘 Quantum Hilbert Space#Momentum Operator]] are conjugate variables
>
> | | Action |
> | --- | --- |
> | $[X, P]\psi$ | Apply the  definition of the [[📘 Commutator]] |
> | $(XP-PX)\psi$ | Apply the distributive law |
> | $XP\psi - PX\psi$ | Apply the definitions of the [[📘 Quantum Hilbert Space#Position Operator]] and [[📘 Quantum Hilbert Space#Momentum Operator]]s |
> | $X(-i\hbar\frac{\partial \psi}{\partial x}) - P(x\psi)$ | Apply the same definitions again |
> | $-xi\hbar \frac{\partial \psi}{\partial x} - ( -i\hbar \frac{\partial}{\partial x}(x\psi))$ | Rearrange the expression |
> | $-i\hbar x \frac{\partial \psi}{\partial x} + i\hbar x \frac{\partial \psi}{\partial x} + i \hbar \psi \frac{\partial x}{\partial x}$ | Cancel repeated terms and simplify $\frac{\partial x}{\partial x} = 1$ |
> | $i\hbar \psi$ | |
>
Since $[X,P]\psi = i\hbar \psi \forall \psi$, then $[X,P] = i \hbar$.
