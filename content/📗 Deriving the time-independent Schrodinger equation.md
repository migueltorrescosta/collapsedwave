---
tags:
  - "#quantum-theory"
  - "#calculus"
---
We can derive the [[📘 Time-independent Schrodinger equation]] via [[separation of variables]] as follows:

$$
\begin{array}{rll}
i\hbar \frac{\partial}{\partial t}\ket{\psi_t} & = H \ket{\psi_t)} & \text{plugging in the ansatz } \ket{\psi_t}=\psi_0(x)T(t)\\
i\hbar \frac{\partial}{\partial t}\psi_0(x)T(t) & = H \psi_0(x)T(t) \\
i\hbar \psi_0(x)T'(t) & = T(t) H \psi_0(x) \\
i\hbar \frac{T'(t)}{T(t)} & =  \frac{H \psi_0(x)}{\psi_0(x)}\\
\end{array}
$$

Since the left only depends on $t$ and the right on $x$, both sides must be constant. We call this constant the [[energy]] $E$, and obtain the set of equations
$$
\left\{
\begin{matrix}
E = i\hbar \frac{T'(t)}{T(t)} \\
E = \frac{H\psi_0(x)}{\psi_0(x)}
\end{matrix}
\right.
\Rightarrow
\left\{
\begin{matrix}
T(t) \propto e^\frac{i\hbar t}{E} \\
E \ket{\psi} = H\ket{\psi} & \text{time-independent Schrodinger equation}
\end{matrix}
\right.
$$
