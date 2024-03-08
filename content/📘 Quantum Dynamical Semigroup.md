---
tags:
  - "#quantum-theory"
  - "#group-theory"
aliases:
  - CPTP semigroup
---
A Quantum Dynamical Semigroup is a set of [[📘 Dynamical Map]]s $\{ T_t \}_{t \geq 0}$ , operating on [[📘 Statistical Operator]]s $\rho$, satisfying:
1. $\rho_t = T_t \rho_0$
2. $T_{t+s} = T_tT_s \forall t,s \geq 0$. This is known as the [[semigroup property]].
3. $T_0 = \mathbb{I}$, i.e. $T_0$ is the [[identity map]].
4. $T_{t+h}[\rho] \xrightarrow{h \rightarrow 0} T_t[\rho] \forall t \geq 0, \forall \rho \in B(H)$, where $B(H)$ is the set of [[Bounded Linear Operator]]s acting on the [[📘 Hilbert Space]] $H$.