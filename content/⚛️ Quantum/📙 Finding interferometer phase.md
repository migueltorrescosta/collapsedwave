---
tags:
  - "#interferometry"
---
# Setup
When making the [[📘 Pauli Matrix]] [[📘 Measurement]] $\sigma_X$ on an [[interferometer]] in the [[📘 Quantum state]] $\cos(\theta) \ket{\downarrow} + \sin(\theta) \ket{\uparrow}$, we get $\uparrow$ with probability $\sin^2(\theta)$ and $\downarrow$ with probability $\cos^2(\theta)$, i.e.
$$
\left \{
\begin{array}{rl}
\mathbb{P}[\uparrow | \theta] = \sin^2(\theta) \\
\mathbb{P}[\downarrow | \theta] = \cos^2(\theta)
\end{array}
\right .
$$
Depending on the value of $\theta$ we can get more/less information per experiment, based on the derivatives of $\sin^2(\theta )$ and $\cos^2( \theta )$. Since the underlying value of $\theta$ is uniform on the interval $[0, 2 \pi]$, we can attempt to maximise the information obtained by applying different [[phase shift]]s before applying the $\sigma_X$ [[📘 Measurement]]. As such, we will consider our observations to be the set $\{ (a_i, \theta_i): a_i \in \{ \uparrow, \downarrow \}, \theta_i \in \mathbb{R} \}$, obtained with the underlying probabilities
$$
\left \{
\begin{array}{rl}
\mathbb{P}[\uparrow | \theta, \theta_i] = \sin^2(\theta + \theta_i) \\
\mathbb{P}[\downarrow | \theta, \theta_i] = \cos^2(\theta + \theta_i)
\end{array}
\right .
$$

Our goal is to find the most likely $\theta$ given our observations.

# Solution
We will apply the [[📙 Maximum Likelihood Estimation]] framework. Up to a constant, the probability of our observations equals $L := \prod_{i, a_i=\uparrow} \sin^2(\theta + \theta_i)\prod_{i,a_i=\downarrow} \cos^2(\theta + \theta_i)$ . Since $\log$ is [[📘 Monotonic]], $\underset{\theta}{argmax}\{ L \} = \underset{\theta}{argmax}\{ \log ( L ) \}$, allowing us to simplify the latter expression:
$$
\begin{array}{rl}
\log ( L ) &= \log \left ( \prod_{i, a_i=\uparrow} \sin^2(\theta + \theta_i)\prod_{i,a_i=\downarrow} \cos^2(\theta + \theta_i) \right ) & \text{As $\log(xy) = \log(x) + \log(y)$} \\
&= \log \left ( \prod_{i, a_i=\uparrow} \sin^2(\theta + \theta_i) \right ) +  \log \left ( \prod_{i,a_i=\downarrow} \cos^2(\theta + \theta_i) \right ) & \text{As $\log(\prod x_i) = \sum \log(x_i)$} \\
 &= \sum_{i,a_i = \uparrow} \log \left ( \sin^2(\theta + \theta_i) \right ) + \sum_{i,a_i = \downarrow} \log \left ( \cos^2(\theta + \theta_i) \right )
\end{array}
$$
In order to maximise $L$ we need to have
$$
\begin{array}{rll}
0 &= \frac{\partial}{\partial \theta}{\log ( L )} \\
&= \frac{\partial}{\partial \theta} \left [ \sum_{i,a_i = \uparrow} \log \left ( \sin^2(\theta + \theta_i) \right ) + \sum_{i,a_i = \downarrow} \log \left ( \cos^2(\theta + \theta_i) \right ) \right ] & \text{Using the linearity of $\frac{\partial}{\partial \theta}$} \\ 
&= \sum_{i,a_i = \uparrow} \frac{\partial}{\partial \theta} \left [ \log \left ( \sin^2(\theta + \theta_i) \right ) \right ] + \sum_{i,a_i = \downarrow} \frac{\partial}{\partial \theta} \left [ \log \left ( \cos^2(\theta + \theta_i) \right ) \right ] & \text{By the chain rule} \\
&= \sum_{i,a_i = \uparrow} 2 \sin^{-2}(\theta + \theta_i) \sin(\theta + \theta_i)\cos(\theta + \theta_i) - \sum_{i,a_i = \downarrow} 2 \cos^{-2}(\theta + \theta_i) \sin(\theta + \theta_i)\cos(\theta + \theta_i) & \text{Removing $2$ as it does not impact the final result}\\
&= \sum_{i,a_i = \uparrow} \arctan(\theta + \theta_i) - \sum_{i,a_i = \downarrow} \tan(\theta + \theta_i)\\
\end{array}
$$

While finding the closed formula solution for the equation above might not be possible, finding the roots can be done relatively quickly via the [[Newton-Raphson method]]. Some questions remain. [[Help me ❓]]
1. Is the root unique, up to translations of $2 \pi$? 
2. What is the [[📘 Fisher Information]] associated with this model?
3. Can we find the [[variance]] of the estimated value $\bar \theta$?
4. $\underset{\theta+\theta_i \rightarrow \pm \pi}{\lim} \tan(\theta + \theta_i) = \pm \infty = \underset{\theta+\theta_i \rightarrow 0}{\lim} \arctan(\theta + \theta_i)$. Could this cause problems in the equality above due to an absurd sensitivity to "edge" cases?

- [ ] Calculate the [[📘 Fisher Information]] applied to this model