---
tags:
  - "#quantum-theory"
---
We explicitly calculate $[X,P]\psi$ for a generic $\psi$:

|  | Action |
| ---- | ---- |
| $[X, P]\psi$ | Apply the  definition of the [[📘 Commutator]] |
| $(XP-PX)\psi$ | Since [[matrix multiplication distributes over matrix addition]] |
| $XP\psi - PX\psi$ | By definition of the [[📘 Position Operator]] and [[📘 Momentum Operator]] |
| $X(-i\hbar\frac{\partial \psi}{\partial x}) - P(x\psi)$ | By the same definitions |
| $-xi\hbar \frac{\partial \psi}{\partial x} - ( -i\hbar \frac{\partial}{\partial x}(x\psi))$ | Using the [[product rule for derivatives]] |
| $-i\hbar x \frac{\partial \psi}{\partial x} + i\hbar x \frac{\partial \psi}{\partial x} + i \hbar \psi \frac{\partial x}{\partial x}$ | Cancel repeated terms |
| $i \hbar \psi \frac{\partial x}{\partial x}$ | Simplify $\frac{\partial x}{\partial x} = 1$ |
| $i\hbar \psi$ |  |
|  |  |

Since $[X,P]\psi = i\hbar \psi$, then $[X,P] = i \hbar$.
