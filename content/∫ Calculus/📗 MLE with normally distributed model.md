---
tags:
  - "#calculus"
  - "#statistics"
---
# Setup
We have a set of observations $(x_i, y_i)$, and we want to find the parameters $a,b,\sigma, \mu$ such that $Y = aX + b + \epsilon$, where $\epsilon \approx \mathscr{N}(0, \sigma)$ is Normally distributed.

# Solution
We will apply [[📙 Maximum Likelihood Estimation]]. Applied to this problem, we want to find the $argmax$ of the expression below:
$$
\begin{array}{rll}
\prod \mathbb{P}[y_i | x_i] &= \log \left ( {\prod \mathbb{P}[y_i | x_i]} \right )  & \text{As $\log(\prod z_i) = \sum \log(z_i)$} \\
&= \sum \log \left ( {\mathbb{P}[y_i | x_i]} \right )  & \text{As $\mathbb{P}[y_i | x_i] = \frac{1}{\sigma \sqrt{2 \pi}}e^{-\frac{1}{2} ( \frac{ax_i+b-y_i}{\sigma} )^2}$} \\
&= \sum \log \left ( \frac{1}{\sigma \sqrt{2 \pi}}e^{-\frac{1}{2} ( \frac{ax_i+b-y_i}{\sigma} )^2} \right )  & \text{As $\log(\prod z_i) = \sum \log(z_i)$} \\
&= -N \log(\sigma) -\frac{N}{2}\log(2\pi) -\frac{1}{2} \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2  & \text{As $-\frac{N}{2}\log(2\pi)$ is a constant} \\
&= -N \log(\sigma) -\frac{1}{2} \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2  & \text{As $-\frac{N}{2}\log(2\pi)$ is a constant} \\
\end{array}
$$

In order to find the $argmax$ we equal all derivatives to zero:
$$
\begin{array}{rl}
0 &= \frac{\partial}{\partial b}\prod \mathbb{P}[y_i | x_i] \\
&= \frac{\partial}{\partial b} \left( -N \log(\sigma) -\frac{1}{2} \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2 \right ) & \text{Removing terms without $b$ and constants}\\
&= \frac{\partial}{\partial b} \left( \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2 \right ) \\
&= \sum \frac{\partial}{\partial b} \left( ( ax_i+b-y_i )^2 \right ) \\
&= \sum 2 ( ax_i+b-y_i ) & \text{Dividing both sides by $2$}\\
&= \sum ax_i +b-y_i \\
& \Downarrow \\
a \sum x_i + N b &= \sum y_i \\
\end{array}
$$
Doing the same for $a$:

$$
\begin{array}{rl}
0 &= \frac{\partial}{\partial a}\prod \mathbb{P}[y_i | x_i] \\
&= \frac{\partial}{\partial a} \left( -N \log(\sigma) -\frac{1}{2} \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2 \right ) & \text{Removing terms without $a$ and constants}\\
&= \frac{\partial}{\partial a} \left( \sum  ( \frac{ax_i+b-y_i}{\sigma} )^2 \right ) \\
&= \sum \frac{\partial}{\partial a} \left( ( ax_i+b-y_i )^2 \right ) \\
&= \sum 2 x_i ( ax_i+b-y_i ) & \text{Dividing both sides by $2$}\\
&= \sum ax_i^2 +x_ib-x_iy_i \\
& \Downarrow \\
a \sum x_i^2 + b \sum x_i &= \sum x_iy_i\\
\end{array}
$$
Writing the 2 equations above in matrix form:
$$
\left (
\begin{matrix}
\sum x_i & N \\
\sum x_i^2 & \sum x_i
\end{matrix}
\right )
\left (
\begin{matrix}
a \\ b
\end{matrix}
\right )
=
\left (
\begin{matrix}
\sum y_i \\ \sum x_iy_i
\end{matrix}
\right )
\Rightarrow
\left (
\begin{matrix}
a \\ b
\end{matrix}
\right )
=
\left (
\begin{matrix}
\sum x_i & N \\
\sum x_i^2 & \sum x_i
\end{matrix}
\right )^{-1}
\left (
\begin{matrix}
\sum y_i \\ \sum x_iy_i
\end{matrix}
\right )
=
\frac{1}{(\sum x_i)^2 - N\sum x_I^2}
\left (
\begin{matrix}
\sum x_i & - N \\
- \sum x_i^2 & \sum x_i
\end{matrix}
\right )^{-1}
\left (
\begin{matrix}
\sum y_i \\ \sum x_iy_i
\end{matrix}
\right )
$$

Applying the formula above, we get the solution for the linear regression as a function of our observations. We can also calculate $\sigma$ if we want to know the estimated error of our predictions, but it is not needed to build the predictor itself