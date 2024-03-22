---
tags:
  - "#calculus"
---
Slightly ambiguous vector differential operator $\nabla$, defined as the vector operator $(\frac{\partial}{\partial x_1}, \cdots, \frac{\partial}{\partial x_n})$, which can represent a few different operations:
- [[📘 Gradient]] of a [[scalar field]] $f: \mathbb{R}^n \rightarrow \mathbb{R}$, where  $\nabla f$ = $(\frac{\partial}{\partial x_1}f, \cdots, \frac{\partial}{\partial x_n}f)$
- [[📘 Jacobian]] of a [[📘 Vector field]] $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$, where  $\nabla f$ = $J_f$. The Jacobian equals the Gradient when $m=1$.
- [[📘 Divergence]] of a [[📘 Vector field]] $\overrightarrow{F} : \mathbb{R}^n \rightarrow \mathbb{R}^n$ , where $\nabla \cdot \overrightarrow{v} = (\frac{\partial}{\partial x_1}F_1, \cdots, \frac{\partial}{\partial x_n}F_n)$,
- [[📘 Curl]] of a [[📘 Vector field]] $\overrightarrow{F} : \mathbb{R}^3 \rightarrow \mathbb{R}^3$ , where $\nabla \times \overrightarrow{v} = \left ( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right ) e_x + \left ( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right ) e_y + \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) e_z$,

In the above $e_x, e_y, e_z$ are the 3 vectors of length $1$ along the $x, y, z$ axis, respectively