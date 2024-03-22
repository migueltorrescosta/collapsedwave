---
tags:
  - "#quantum-theory"
  - "#potential"
---
# Setup
Consider a particle in a [[Potential]] $V(x) = \lambda x^4$. We want to find the [[Ground state]] of a [[particle]] in this [[Potential]].

# Solution
We will find an upper bound for the [[Ground state]] energy by calculating the [[energy]] for the $ansatz$ given by $e^\frac{-\alpha x^2}{2}$.
The associated [[Hamiltonian]] is given by $H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \lambda x^4$. We can [[📙 Calculate the energy of a wave function]] as $E(\alpha) = \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \left ( -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \lambda x^4 \right ) e^\frac{-\alpha x^2}{2}dx / \int_\mathbb{R}e^{-\alpha x^2}dx$.

We will split the calculations into 2 parts. We start with $\int_\mathbb{R}e^\frac{-\alpha x^2}{2}(\frac{d^2}{dx^2})e^\frac{-\alpha x^2}{2}dx$:

$$
\begin{array}{rll}
\int_\mathbb{R}e^\frac{-\alpha x^2}{2}(\frac{d^2}{dx^2})e^\frac{-\alpha x^2}{2}dx &= \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \frac{d}{dx} \left ( -\alpha x e^\frac{-\alpha x^2}{2} \right ) dx & \text{Taking $-\alpha$ out of the integral}\\
&= -\alpha \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \frac{d}{dx} \left ( xe^\frac{-\alpha x^2}{2} \right ) dx & \text{By the product rule} \\
&= -\alpha \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \left ( e^\frac{-\alpha x^2}{2} + x(- \alpha x) e^\frac{-\alpha x^2}{2} \right ) dx & \text{Separating into $2$ integrals} \\
&= -\alpha \int_\mathbb{R}e^{-\alpha x^2}dx + \alpha^2 \int_\mathbb{R} x^2 e^{-\alpha x^2} dx & \text{Setting $\mathscr{C}_\alpha := \int_\mathbb{R}e^{-\alpha x^2}dx$} \\
&= -\alpha \mathscr{C}_\alpha + \alpha^2 \int_\mathbb{R} x^2 e^{-\alpha x^2} dx & \\
&= -\alpha \mathscr{C}_\alpha + \alpha^2 \int_\mathbb{R} x^2 \frac{1}{-2 \alpha x}de^{-\alpha x^2} & \text{Moving constants out of the integral} \\
&= -\alpha \mathscr{C}_\alpha - \frac{\alpha}{2} \int_\mathbb{R} x de^{-\alpha x^2} & \text{Integration by parts} \\
&= -\alpha \mathscr{C}_\alpha + \frac{\alpha}{2} \int_\mathbb{R} e^{-\alpha x^2} dx & \text{Setting $\mathscr{C}_\alpha := \int_\mathbb{R}e^{-\alpha x^2}dx$} \\
&= -\alpha \mathscr{C}_\alpha + \frac{\alpha}{2} \mathscr{C}_\alpha \\
& = - \frac{\alpha}{2} \mathscr{C}_\alpha

\end{array}
$$
Secondly we simplify $\int_\mathbb{R}x^4e^{-\alpha x^2}dx$:

$$
\begin{array}{rll}
\int_\mathbb{R}x^4e^{-\alpha x^2}dx &= \int_\mathbb{R}x^4\frac{-1}{2 \alpha x}de^{-\alpha x^2} \\
&= - \frac{1}{2 \alpha} \int_\mathbb{R}x^3de^{-\alpha x^2} & \text{Integration by parts} \\
&= \frac{1}{2 \alpha} \int_\mathbb{R}e^{-\alpha x^2}dx^3 \\
&= \frac{1}{2 \alpha} \int_\mathbb{R}3x^2e^{-\alpha x^2}dx \\
&= \frac{3}{2 \alpha} \int_\mathbb{R}x^2e^{-\alpha x^2}dx \\
&= \frac{3}{2 \alpha} \int_\mathbb{R}x^2\frac{-1}{2 \alpha x}de^{-\alpha x^2} \\
&= - \frac{3}{4 \alpha^2} \int_\mathbb{R}xde^{-\alpha x^2} & \text{Integration by parts} \\
&= \frac{3}{4 \alpha^2} \int_\mathbb{R}e^{-\alpha x^2}dx & \text{Setting $\mathscr{C}_\alpha := \int_\mathbb{R}e^{-\alpha x^2}dx$} \\
&= \frac{3}{4 \alpha^2}\mathscr{C}_\alpha
\end{array}
$$

Hence

$$
\begin{array}{rll}
E(\alpha) &= \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \left ( -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + \lambda x^4 \right ) e^\frac{-\alpha x^2}{2}dx / \int_\mathbb{R}e^{-\alpha x^2}dx \\
&= \left ( -\frac{\hbar^2}{2m} \int_\mathbb{R}e^\frac{-\alpha x^2}{2} \left ( \frac{d^2}{dx^2} \right ) e^\frac{-\alpha x^2}{2}dx + \lambda \int_\mathbb{R} x^4 e^{-\alpha x^2}dx \right ) / \mathscr{C}_\alpha & \text{Substituting the results above} \\
&= \left ( \frac{- \hbar^2}{2m} \frac{-\alpha}{2}\mathscr{C}_\alpha + \lambda \frac{3}{4 \alpha^2}\mathscr{C}_\alpha\right ) / \mathscr{C}_\alpha & \text{Cancelling out the $\mathscr{C}_\alpha$ terms} \\
&= \frac{- \hbar^2}{2m} \frac{-\alpha}{2} + \lambda \frac{3}{4 \alpha^2} \\
&= \frac{\hbar^2 \alpha}{4m} + \frac{3 \lambda}{4 \alpha^2}
\end{array}
$$
=
Since we want to find an upper bound for the [[Ground state]] [[energy]] $E_0$, we want to minimize $E(\alpha)$, using the standard method:

$$
\begin{array}{rll}
0 &= \frac{d}{d\alpha}E(\alpha) \\
&= \frac{d}{d\alpha} \left ( \frac{\hbar^2 \alpha}{4m} + \frac{3 \lambda}{4 \alpha^2} \right ) \\
&= \frac{\hbar^2}{4m} - \frac{3 \lambda}{2 \alpha^3} \\
& \Downarrow \\
\hbar^2 \alpha^3 &= 6 \lambda m \\
& \Downarrow & \text{Relabelling $\alpha$ as $\alpha_0$ to disguish it as a minimum}\\
\alpha_0 &= \left ( \frac{6 \lambda m}{\hbar^2} \right )^\frac{1}{3}\\

\end{array}
$$

We get the upper bound $E(\alpha_0) = \frac{\hbar^2 \alpha_0}{4m} + \frac{3 \lambda}{4 \alpha_0^2} = \frac{3}{8} \left ( \frac{6 \hbar^4 \lambda}{m^2} \right )^\frac{1}{3}$. 