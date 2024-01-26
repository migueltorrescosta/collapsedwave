---
date: 2024-01-26
tags:
  - math
---
A differential equation relates a function $\psi$ and it's derivatives. Below we list a few types of equations and their solutions. These are often needed to solve other problems in physics. Below we have a table of solutions:

| Equation | Solution |
| ---: | ---- |
| $a \ddot \psi + b \dot \psi + c \psi = 0$ | $\left \{\begin{matrix} A e^{x_1t} + B e^{x_2t}, & x_1 \neq x_2 \\ A x e^{x_1t} + B e^{x_1t}, & x_1 = x_2 \end{matrix} \right .$   , where $x_i$ are the 2 roots of $ax^2 + bx + c = 0$ |
| $\dot \psi + f(x) \psi = g(x)$ | $\psi(x) = e^{-h(x)}\int g(x) e^{h(x)} dx$, where $h(x) := \int f(x) dx$. |

# Second Order Differential Equation
A 2nd order differential equation can be written as $$a \ddot \psi + b \dot \psi + c \psi = 0$$
These have general solution obtained by $A e^{x_1t} + B e^{x_2t}$ where $x_1$ and $x_2$ are the two roots of the equation $ax^2 + bx + c = 0$. If we have a single root, then the solution is $Axe^{xt} + Be^{xt}$. 

# Integrating Factors
When we have an equation of the form
$$\dot \psi + f(x) \psi = g(x)$$
The general solution is given by $\psi(x) = e^{-h(x)}\int g(x) e^{h(x)} dx$, where $h(x) := \int f(x) dx$.