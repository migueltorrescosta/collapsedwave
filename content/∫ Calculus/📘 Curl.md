---
tags:
  - "#calculus"
---
$$
\nabla \times F := 
\left |
\begin{matrix}
e_x & e_y & e_z \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{matrix}
\right |
=  \left ( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right ) e_x + \left ( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right ) e_y + \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) e_z
$$
In the above,
$e_x, e_y, e_z$ are three [[orthogonal]] [[axis]]
$F : \mathbb{R}^3 \rightarrow \mathbb{R}^3$ is a 3-dimensional [[📘 Vector field]]
$| \cdot |$ is the [[determinant]] of a [[matrix]]
$\nabla := (\frac{\partial}{\partial x_1}, \cdots, \frac{\partial}{\partial x_n})$ is the [[📘 Del or Nabla]] [[vector]] [[operator]]