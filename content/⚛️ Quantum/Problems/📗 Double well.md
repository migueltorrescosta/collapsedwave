---
tags:
  - "#quantum-theory"
---
![[double_well.png]]
# Setup
We have a particle moving in $1$ dimention, with a [[Potential]] given by 
$$
V(x) = 
\left \{
\begin{array}{ll}
0 ,& x \in [-L, -\alpha] \\
v_0 ,& x \in [-\alpha, \alpha] \\
0 ,& x \in [\alpha, L] \\
\infty ,& \text{otherwise} \\
\end{array}
\right .
$$
We want to find the stable [[📘 Quantum state]]s in this [[Potential]]
# Solution
Each interval acts as a particle in a [[📗 Constant Potential]], which has well-known solutions which depend on whether the [[energy]] $E$ is higher or lower than the [[Potential]] in that interval. We have to consider three cases:
1. $E < 0$
2. $E=0$
3. $E \in (0, v_0)$
4. $E=v_0$
5. $E > v_0$

## $E < 0$
I need to do this. [[Help me ❓]]

## $E=0$
For $E=0$, the [[📗 Constant Potential]] solution on $[-L, -\alpha]$ and $[\alpha, L]$ is a linear function. In order for $\psi(x)$ to be [[continuous]] at $L$ and $-L$, this function will be identically $0$ on these intervals. As such we end up with a setup equal to the [[Single well]] setup with [[energy]] lower than the [[Potential]] () $E=0 < v_0$ ), which has the general solution $\psi(x) = A\exp \left ( \frac{\sqrt{2mv_0}}{\hbar} x\right ) + B\exp \left ( -\frac{\sqrt{2mv_0}}{\hbar} x \right )$. When we attempt continuity at both extremes $\{ -\alpha, \alpha\}$, we get $A=B=0$, hence $\psi(x) = 0$, which is not a [[📘 Quantum state]]. As such $E=0$ does not provide a solution to this setup. 

## $E \in (0, v_0)$
The general solution, with $c_i \in \mathbb{C}$, is given by
$$
\psi(x) = 
\left \{
\begin{array}{ll}
c_1 \exp \left ( \frac{\sqrt{2mE}}{\hbar} x \right ) + c_2 \exp \left ( \frac{\sqrt{2mE}}{\hbar} x \right ) ,& x \in [-L, -\alpha] \\
c_3\sin \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} x\right ) + c_4\cos \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} x \right ) ,& x \in [-\alpha, \alpha] \\
c_5\exp \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) + c_6\exp \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) ,& x \in [\alpha, L] \\
0 ,& \text{otherwise} \\
\end{array}
\right .
$$

We will simplify the various constants $c_i$ by requiring the [[continuity]] of $\psi$ at the intervals' endpoints. WIP. [[Help me ❓]]


## $E=v_0$
I need to do this. [[Help me ❓]]

## $E > v_0$
I need to do this. [[Help me ❓]]
