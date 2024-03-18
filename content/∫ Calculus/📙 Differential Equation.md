---
date: 2024-01-26
tags:
  - "#calculus"
---
A differential equation relates a function $\psi$ and it's derivatives. Below we list a few types of equations and their solutions. These are often needed to solve other problems in physics. Below we have a table of solutions:

# 2nd Order Differential Equation
$$
\begin{array}{rll}
0 & = a\ddot \psi(t) + b \dot \psi(t) + c \psi(t) \\
& \Downarrow & \text{Factorising $ax^2+bx+c = a(x-x_1)(x-x_2)$}\\
\psi(t) & = \left \{\begin{matrix} A e^{x_1t} + B e^{x_2t}, & x_1 \neq x_2 \\ A x e^{x_1t} + B e^{x_1t}, & x_1 = x_2 \end{matrix} \right .
\end{array}
$$


# Integrating factors
$$
\begin{array}{rll}
\dot \psi(x) + f(x) \psi(x) & = g(x) \\
& \Downarrow & h(x) := \int f(x) dx\\ 
\psi(x) &= e^{-h(x)}\int g(x) e^{h(x)} dx
\end{array}
$$