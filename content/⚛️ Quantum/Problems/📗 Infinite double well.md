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
Each interval acts as a particle in a [[📗 Constant Potential]], which has well-known solutions which depend on whether the [[energy]] $E$ is higher or lower than the [[Potential]] in that interval. We have to consider:
1. $E < 0$
2. $E=0$
3. $E \in (0, v_0)$
4. $E=v_0$
5. $E > v_0$

In all of the cases below, $\psi(x)$ equals zero if $x$ is not in one of the defined intervals.
## $1️⃣ E < 0$
I need to do this. [[Help me ❓]]

## 2️⃣ $E=0$
For $E=0$, the [[📗 Constant Potential]] solution on $[-L, -\alpha]$ and $[\alpha, L]$ is a linear function. In order for $\psi(x)$ to be [[continuous]] at $L$ and $-L$, this function will be identically $0$ on these intervals. As such we end up with a setup equal to the [[Single well]] setup with [[energy]] lower than the [[Potential]] () $E=0 < v_0$ ), which has the general solution $\psi(x) = A\exp \left ( \frac{\sqrt{2mv_0}}{\hbar} x\right ) + B\exp \left ( -\frac{\sqrt{2mv_0}}{\hbar} x \right )$. When we attempt continuity at both extremes $\{ -\alpha, \alpha\}$, we get $A=B=0$, hence $\psi(x) = 0$, which is not a [[📘 Quantum state]]. As such $E=0$ does not provide a solution to this setup. 

## 3️⃣ $E \in (0, v_0)$
The general solution, with $c_i \in \mathbb{C}$, is given by
$$
\psi(x) = 
\left \{
\begin{array}{ll}
c_1 \sin \left ( \frac{\sqrt{2mE}}{\hbar} x \right ) + c_2 \cos \left ( \frac{\sqrt{2mE}}{\hbar} x \right ) ,& x \in [-L, -\alpha] \\
c_3\exp \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} x\right ) + c_4\exp \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} x \right ) ,& x \in [-\alpha, \alpha] \\
c_5\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) + c_6\cos \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) ,& x \in [\alpha, L] \\
\end{array}
\right .
$$

We will simplify the various constants $c_i$ by requiring the [[continuity]] of $\psi$ at the intervals' endpoints. For [[continuity]] at $L$ we we need $\psi(L)=0$. Since $\left . \psi(x) \right |_{[\alpha, L]}$ is a [[linear combination]] of [[trigonometric functions]], we can do some trigonometric magic to rewrite $c_5\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right ) + c_6\cos \left ( \frac{\sqrt{2m(E-k)}}{\hbar} x \right )$ as $c_7\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x-(-L)) \right ) = c_7\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x+L) \right )$. Doing the same thing on $[-L, -\alpha]$ and re indexing the constants we get

$$
\psi(x) = 
\left \{
\begin{array}{ll}
c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x+L) \right ) ,& x \in [-L, -\alpha] \\
c_2\exp \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} x\right ) + c_3\exp \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} x \right ) ,& x \in [-\alpha, \alpha] \\
c_4\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x-L) \right ) ,& x \in [\alpha, L] \\
\end{array}
\right .
$$
We can deconstruct any solution $\psi(x)$ as $\frac{1}{2}[\psi(x)+\psi(-x)] + \frac{1}{2}[\psi(x)-\psi(x)]$. This allow us to look for even and odd solutions of this [[📘 Time-independent Schrodinger equation]] separately, and write the general solution as [[linear combination]]s of the 2 parts. Matching constants in the expression above ( and again changing constant indexes), we get:

### Even solutions

$$
\psi(x) = 
\left \{
\begin{array}{ll}
c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x+L) \right ) ,& x \in [-L, -\alpha] \\
c_2 \left [ \exp \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} x\right ) + \exp \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} x \right ) \right ] ,& x \in [-\alpha, \alpha] \\
c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x-L) \right ) ,& x \in [\alpha, L] \\
\end{array}
\right .
$$
By requiring [[continuity]] at $-\alpha$ we get
$$
\begin{array}{rll}
c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (-\alpha+L) \right ) &= c_2 \left [ \exp \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} ( -\alpha ) \right ) + \exp \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} (- \alpha ) \right ) \right ] \\
c_1\sin \left ( \frac{\sqrt{2m(E-k)}(L-\alpha)}{\hbar} \right ) &= c_2 \left [ \exp \left ( - \frac{\alpha \sqrt{2m(E-v_0)}}{\hbar} \right ) + \exp \left ( \frac{\alpha \sqrt{2m(E-v_0)}}{\hbar} \right ) \right ] \\
\end{array}
$$

### Odd solutions
$$
\psi(x) = 
\left \{
\begin{array}{ll}
c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x+L) \right ) ,& x \in [-L, -\alpha] \\
c_2 \left [ \exp \left ( \frac{\sqrt{2m(E-v_0)}}{\hbar} x\right ) - \exp \left ( -\frac{\sqrt{2m(E-v_0)}}{\hbar} x \right ) \right ] ,& x \in [-\alpha, \alpha] \\
- c_1\sin \left ( \frac{\sqrt{2m(E-k)}}{\hbar} (x-L) \right ) ,& x \in [\alpha, L] \\
\end{array}
\right .
$$

WIP. [[Help me ❓]]

## 4️⃣ $E=v_0$
I need to do this. [[Help me ❓]]

## 5️⃣ $E > v_0$
Since the [[energy]] is higher than the [[Potential]] on all intervals, we get that the solution to the [[📗 Constant Potential]] problem on each interval is a trigonometric solution. The matching condition between intervals requires that both $\psi(x)$ and $\dot \psi(x)$ match. The only way that happens at $|_{ \{-L,L \} }$ is by  having $\psi(x) = \dot \psi(x) = 0$, but then $\psi(x)$ is identically zero.As such we get that $\psi(x) = 0 \forall x \in \mathbb{R}$, which is not a valid [[📘 Quantum state]].
