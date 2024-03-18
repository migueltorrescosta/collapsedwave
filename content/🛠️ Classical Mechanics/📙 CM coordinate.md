---
tags:
  - "#classical-mechanics"
---
Let our [[📘 Hamiltonian Operator]] be of the form $H(x_1,p_1,x_2,p_2) = \frac{P_1}{2m_1} + \frac{P_2}{2m_2} + V(x_1-x_2)$. Since the [[Potential]] $V$ only depends on the relative position of the particle $x_1, x_2$, we can split the system into $2$ separate coordinate systems by considering the [[virtual particle]] with equations

$$
\left \{
\begin{matrix}
x_{CM} &=& \frac{m_1x_1 + m_2x_2}{m_1 + m_2} \\
x &=& x_1 - x_2 & \text{$x$ is the relative virtual particle's position}\\
p_{CM} &=& m_1 \dot x_1 + m_2 \dot x_2\\
p &=& \mu \dot x & \text{$\mu$ is the relative virtual particle's mass}
\end{matrix}
\right .
$$

These two [[virtual particle]] have [[mass]] $M_{CM} = m_1 + m_2$ and $M_{rel} = \frac{m_1m_2}{m_1 + m_2}$ ( the [[harmonic mean]] of $\{ m_1, m_2 \}$)

With this, we are able to re-write the [[📘 Hamiltonian Operator]] as
$$
\begin{array}{rll}
H(x_1, p_1, x_2, p_2) &= H(x_{CM}, p_{CM}, x, p) \\
&= H_{CM}(x_{CM}, p_{CM}) + H_{rel}(x, p) +V(x) & \text{This is a separable Hamiltionian}
\end{array}
$$
By getting a [[📘 Separable Hamiltonian]], we get 2 simpler systems which can be solved independently. The $CM$ system can often be ignored, as it behaves as a [[free particle]] with linear motion and constant [[energy]].