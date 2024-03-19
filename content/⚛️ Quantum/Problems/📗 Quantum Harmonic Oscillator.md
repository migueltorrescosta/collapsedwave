# Setup
 The [[📕 Postulate 4 - Schrodinger Equation]] is given by $H = \sum_{i=0}^n \frac{P_i}{2m} + \frac{1}{2}m\omega_i X_i^2$, as described in the [[📘 Quantum Harmonic Oscillator]]. We impose no boundary conditions other than getting a [[wave function]] that can be normalized
 
# Solution
Since we have a [[📘 Separable Hamiltonian]], we can consider each dimension independently. As such, we can focus on the simpler [[📘 Hamiltonian Operator]] $H=\frac{P}{2m} + \frac{1}{2}m \omega X$. The associated [[📘 Time-independent Schrodinger equation]] is given by

$$
\begin{array}{rll}
E \psi &= H\psi & \text{Expanding our Hamiltonian} \\
&= -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} \psi + \frac{1}{2}m\omega x^2 \psi & \text{Using the ansatz $\psi(x) = e^{-kx^2}f(x)$, to cancel the $x^2$ term} \\
&= -\frac{\hbar^2}{2m} [4k^2x^2f(x)+2(-2kx)f'(x) + f''(x)]e^{-kx^2} + \frac{1}{2}m\omega x^2 f(x)e^{-kx^2} & \text{Removing the $e^{-kx^2}$ term from both sides} \\
Ef(x) &= -\frac{\hbar^2}{2m} [4k^2x^2f(x)-4kxf'(x) + f''(x)] + \frac{1}{2}m\omega x^2 f(x) & \text{Choosing $k=\frac{im}{2}\sqrt{\frac{\omega}{\hbar}}$ to cancel the $x^2$ term, via $-\frac{\hbar^2}{2m}4k^2=\frac{1}{2}m \omega$} \\
&= -\frac{\hbar^2}{2m} [-4kxf'(x) + f''(x)] \\
\end{array}
$$

With the above we get the "simpler" equation $\frac{2mE}{\hbar}f(x)=4kxf'(x)-f''(x)$. I need to figure out the solution to this. [[Help me ❓]]
Note: We are supposed to get the [[energy level]]s $E=(n+\frac{1}{2})\hbar \omega, n \in \mathbb{N}$. 