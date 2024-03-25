---
tags:
  - "#quantum-theory"
---
![[single_well_potential.png]]
## Setup
We have $V(x) = -C \mathbb{1}_{|x| > \alpha}$, having $\alpha \in \mathbb{R}^+$. The goal is to find the stable energy [[📘 Quantum state]] with this potential
## Solution
We have three intervals $[ -\infty, -\alpha]$, $[-\alpha, \alpha]$ and $[\alpha, \infty]$, each of being equivalent to the [[📗 Constant Potential]] problem on their domain. The solution depends on which is bigger, the [[energy]] $E$ or the [[Potential]] $V$. As such we get five cases: $E<-C$, $E=C$, $E \in [-C, 0]$, $E=0$ and $E>0$. In the sections below we use:
- 🔴 for no solutions
- 🔵 for discrete solutions
- 🟢 for continuous solutions

## 1️⃣ $E<-C$
The solution on each interval is given by a sum of exponentials. In order for the function to be [[📘 Normalizable]], we need $\lim_{x \rightarrow \pm \infty}\psi(x) = 0$. This gives us the solution
$$
\psi(x) =
\left \{
\begin{array}{ll}
c_1e^{\frac{\sqrt{-2mE}}{\hbar}x},& x<-\alpha \\
c_2e^{\frac{\sqrt{-2m(C-E)}}{\hbar}x} + c_3e^{-\frac{\sqrt{-2m(C-E)}}{\hbar}x},& -\alpha < x < \alpha \\
c_4e^{-\frac{\sqrt{-2mE}}{\hbar}x},& x>\alpha \\
\end{array}
\right .
$$

Since $V(x)$ is an even function, the functions $\psi_E(x) := \frac{1}{2}( \psi(x) + \psi(-x))$ and $\psi_O(x) := \frac{1}{2}(\psi(x) - \psi(-x))$ are also solutions of the original equation, and can be used to rebuild $\psi$ as $\psi = \frac{1}{2}( \psi_E + \psi_O)$. Let us consider even and odd functions separately.

### Even solutions

$$
\psi_E(x) =
\left \{
\begin{array}{ll}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Be^\frac{x\sqrt{-2mE}}{\hbar} + Be^{-\frac{x\sqrt{-2mE}}{\hbar}},& -\alpha < x < \alpha \\
Ae^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$
### Odd solutions
$$
\psi_O(x) =
\left \{
\begin{array}{ll}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Be^\frac{x\sqrt{-2mE}}{\hbar} - Be^{-\frac{x\sqrt{-2mE}}{\hbar}},& -\alpha < x < \alpha \\
-Ae^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$


## 2️⃣ $E=-C$ 🔴
If the [[energy]] equals $-C$, we get that $\psi$ is linear on $|x|>\alpha$. In order for $\psi$ to be [[📘 Normalizable]], it must be identically zero on $|x|>\alpha$. On $|x|<\alpha$ we have that $\psi$ is a sum of exponentials. In the interval $[-\alpha, \alpha]$, the generic solution for the [[📗 Constant Potential]] gives us that $\psi(x)=Ae^{\frac{\sqrt{2mC}}{\hbar}x}+Be^{-\frac{\sqrt{2mC}}{\hbar}x}$. In order for the end of the interval to match at $\alpha$, we have

$$
\begin{array}{rcll}
\left . \psi(x) \right |_{x=\alpha}=0 &\land& \left . \dot \psi(x) \right |_{x=\alpha}=0 & \text{Plugging in the definition of $\psi$} \\
\left . Ae^{\frac{\sqrt{2mC}}{\hbar}x}+Be^{-\frac{\sqrt{2mC}}{\hbar}x} \right |_{x=\alpha}=0 &\land& \left . A\frac{\sqrt{2mC}}{\hbar}e^{\frac{\sqrt{2mC}}{\hbar}x}-\frac{\sqrt{2mC}}{\hbar}Be^{-\frac{\sqrt{2mC}}{\hbar}x} \right |_{x=\alpha}=0 \\
Ae^{\frac{\sqrt{2mC}}{\hbar}\alpha}+Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha} = 0 &\land& A\frac{\sqrt{2mC}}{\hbar}e^{\frac{\sqrt{2mC}}{\hbar}\alpha}-\frac{\sqrt{2mC}}{\hbar}Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha}=0 \\
Ae^{\frac{\sqrt{2mC}}{\hbar}\alpha}=-Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha} &\land& [ \frac{\sqrt{2mC}}{\hbar} = 0 \lor Ae^{\frac{\sqrt{2mC}}{\hbar}\alpha}=Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha}] & \text{Since $\frac{\sqrt{2mC}}{\hbar} \neq 0$} \\
Ae^{\frac{\sqrt{2mC}}{\hbar}\alpha}=-Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha} &\land& Ae^{\frac{\sqrt{2mC}}{\hbar}\alpha}=Be^{-\frac{\sqrt{2mC}}{\hbar}\alpha} \\
A=0 &\land& B=0
\end{array}
$$
Hence $\psi(x)=0$, which is not a valid [[📘 Quantum state]].

## 3️⃣ $E \in [0,C]$
Applying the [[📗 Constant Potential]] solution to the individual intervals, we have that

$$
\psi(x) =
\left \{
\begin{array}{ll}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Be^\frac{x\sqrt{-2mE}}{\hbar} + Ce^{-\frac{x\sqrt{-2mE}}{\hbar}},& -\alpha < x < \alpha \\
De^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$

Were we used $\lim_{x \rightarrow \pm \infty} = 0$ to remove terms of $\psi(x)$ for $|x| > \alpha$. Since the [[Potential]] is an even function, we can consider odd and even functions $\psi_E, \psi_O$ separately. Their general form is given by

### Even solutions
$$
\psi(x) =
\left \{
\begin{array}{ll}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Be^\frac{x\sqrt{-2mE}}{\hbar} + Be^{-\frac{x\sqrt{-2mE}}{\hbar}},& -\alpha < x < \alpha \\
Ae^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$


### Odd solutions
$$
\psi(x) =
\left \{
\begin{array}{ll}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Be^\frac{x\sqrt{-2mE}}{\hbar} -Be^{-\frac{x\sqrt{-2mE}}{\hbar}},& -\alpha < x < \alpha \\
-Ae^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$


## 4️⃣ $E=C$ 🔴
If the [[energy]] equals $C$, we have that the solution is described by
$$
\psi(x) =
\left \{
\begin{array}{rl}
Ae^\frac{x\sqrt{2m(C-E)}}{\hbar},& x<-\alpha \\
Bx+C,& -\alpha < x < \alpha \\
De^\frac{-x\sqrt{2m(C-E)}}{\hbar},& x>\alpha \\
\end{array}
\right .
$$
Since no intervals have sign changes, $\psi(x) > 0\forall x \in \mathbb{R}$, or $\psi(x) < 0\forall x \in \mathbb{R}$. By considering $-\psi$ if needed, we can assume that $\psi(x) > 0\forall x \in \mathbb{R}$.

Since $\psi(x)$ is [[📘 Monotonic]] on $|x|>\alpha$, we have $\dot \psi(-\alpha) > 0$ and $\dot \psi(\alpha) < 0$. However no linear functions on $[-\alpha, \alpha]$ satisfy these constraints, so we have no solutions with $E=C$.

## 5️⃣ $E>C$ 🔴
If $E>C$, the solution in each interval is given by a sum of trigonometric functions. In order for the function to be [[📘 Normalizable]], it will be identically zero on $|x| > \alpha$. By [[continuity]], this will require $x = 0$ on $|x|<\alpha$ too, so we have no solutions here.