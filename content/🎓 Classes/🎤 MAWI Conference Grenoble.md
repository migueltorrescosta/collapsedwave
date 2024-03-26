---
tags:
  - "#conference"
---
25-29th March 2024

# Day 1

## Lecture 1: Introduction to Python
No notes taken
- [ ] Setup Google Colab with examples of keras / tensorflow / scipy / linear regression / etc

## Lecture 2: Theory of two mode Quantum Interferometers
We will consider the lossless / ideal case

We will work with the [[Mach-Zehnder interometer]]

![[mach_zehnder_interferometer.png]]

The goal is to count the number of particles in the result ( screens above ), and based on that understand the test.

The overall goal is to remove the [[📘 Measurement uncertainty]] $\Delta \theta$ , where $\theta$ represents the [[📘 Operator]] in our Sample Beam (SB). We need a Reference Beam (RB) to compare the 2 modes of the beam.

Our system satisfies the [[📘 Canonical Commutation Relations]]
$$
\left \{
\begin{array}{rll}
[ \hat a, \hat a ^\dagger] &=1 \\
[ \hat a, \hat l] &=0 \\
[ \hat a, \hat a ^\dagger] &=0 \\
[ \hat l, \hat l ^\dagger] &=1 \\
\end{array}
\right .
$$

We have
$$
\left (
\begin{array}{rll}
\hat a \\
\hat b
\end{array}
\right )_{out}
=
\left (
\begin{array}{rll}
m_{11} & m_{12}\\
m_{21} & m_{22}
\end{array}
\right )

\left (
\begin{array}{rll}
\hat a \\
\hat b
\end{array}
\right )_{in}
$$
where we have the relation $m_{ij} = |m_ij| e^{i\theta_{ij}}$ , which defines the angle $\theta_{ij}$.

We have

$$
\begin{array}{rll}
N_{Out} &= \left . \hat a \hat a^\dagger + \hat l^\dagger \hat l \right |_{out} \\
&= (m_{11}^* \hat a^\dagger + m_{12}^* \hat l^\dagger)(m_{11} \hat a + m_{12} \hat l)(m_{21}^* \hat a^\dagger + m_{22}^* \hat l^\dagger)(m_{21} \hat a + m_{12} \hat l \\
&= \hat a^\dagger_{out}\hat a_{out}\hat l^\dagger_{out}\hat l_{out} \\
&= \hat a^\dagger \hat a + \hat l^\dagger \hat l
\end{array}
$$

We require
$$
\left \{
\begin{array}{rll}
| m_{11}|^2 + | m_{21}|^2 &= 1 \\
| m_{22}|^2 + | m_{12}|^2 &= 1 \\
m_{11}m_{12}^* + m_{21}m_{22} &= 0 \\
| m_{11}|^2 + | m_{12}|^2 &= 1 & \text{This condition is derived from the commutation relations applied to $a_{out}$, $l_{out}$, $l_{in}$ and $a_{in}$}\\
| m_{21}|^2 + | m_{22}|^2 &= 1 &\text{As above}\\ 
\end{array}
\right .
$$

The condition $| m_{11}|^2 + | m_{21}|^2 = 1$ is solved as
$$
\left \{
\begin{array}{rl}
m_{11} &= e^{i \theta_{11}} \cos ( \alpha ) \\
m_{21} &= e^{i \theta_{21}} \sin ( \alpha ) \\
\end{array}
\right .
$$

The condition $| m_{22}|^2 + | m_{12}|^2 = 1$ is solved as
$$
\left \{
\begin{array}{rl}
m_{22} &= e^{i \theta_{11}} \cos ( \alpha ) \\
m_{12} &= e^{i \theta_{21}} \sin ( \alpha ) \\
\end{array}
\right .
$$

Which results in the relation $\theta_{21}-\theta_{11} = \pi + \theta_{11}- \theta_{12}$.

So we can write $M$ as
$$
M = e^{i\theta_0}
\left (
\begin{array}{rll}
e^{-i\theta_t} \cos ( \frac{\theta}{2}) & e^{-i\theta_t} \sin ( \frac{\theta}{2})\\
e^{i\theta_\pi} \sin ( \frac{\theta}{2}) & e^{i\theta_\pi} \cos ( \frac{\theta}{2})
\end{array}
\right )
$$
$M$ satisfies the properties
- $\det (M) = e^{-2i\theta_0}$ 
- $M \in SU(2)$, the [[Special Unitary Group]] of dimention $2$ 

Setting $\theta_0=0 \Rightarrow \det (M) = 1$,  which allows us to see $M$ in this [[Intorfermeter]] as applying rotations in space, as we are now working in the [[Orthogonal Group]] $M \in SO(3) \subset SU(2)$.
- [ ] See the result by Schwinfer

We define the [[Angular Momentum Operator]], which are [[Casimir invariant]]:

$$
\left \{
\begin{array}{rll}
\tau_X &= \frac{1}{2}(\hat a^\dagger \hat l + \hat l ^\dagger a)\\
\tau_Y &= \frac{1}{2i}(\hat a^\dagger \hat l - \hat l ^\dagger a)\\
\tau_Z &= \frac{1}{2}(\hat a^\dagger \hat a - \hat l ^\dagger l)\\
\end{array}
\right .
$$
Which satisfies the commutation relations
$$
\left \{
\begin{array}{rll}
[ \tau_X, \tau_Y] &= i\tau_Z \\
[ \tau_X, \tau_Z] &= -i\tau_Y \\
[ \tau_Y, \tau_Z] &= i\tau_X \\
\end{array}
\right .
$$
and $\tau^2 = \tau_X^2 + \tau_Y^2 + \tau_Z^2 = \frac{\hat N}{2} \left ( \frac{\hat N}{2} + 1 \right )$.

We can write our operator $M$ as mapping
$$
M : \left \{
\begin{array}{rll}
\hat a_{out} = \theta_aa_{in}\\
\hat b_{out} = \theta_bb_{in}\\
\end{array}
\right .
$$

Our Phase Shift Operator $PS$ is given by 
$$
M = e^{i\theta_0}
\left (
\begin{array}{rll}
e^{-i\theta_a} & 0\\
0 & e^{-i\theta_b}
\end{array}
\right ) 
\overset{\text{Ignoring the global phase}}{=}
\left (
\begin{array}{rll}
e^{-i(\theta_a-\theta_b)} & 0\\
0 & e^{i(\theta_a - \theta_b)}
\end{array}
\right ) 
\overset{\theta := \theta_a - \theta_b}{=}
\left (
\begin{array}{rll}
e^{-i\theta} & 0\\
0 & e^{i\theta}
\end{array}
\right ) 
$$
$$
\left \{
\begin{array}{l}
\left . \tau_X \right |_{out} = ( ... ) = \cos(\theta) \left . \tau_X \right |_{in} - n \theta \left . \tau_Y \right |_{in} \\
\left . \tau_Y \right |_{out} = \left . \tau_Y \right |_{in} a \theta - n \theta \left . \tau_Y \right |_{in} \\
\left . \tau_Z \right |_{out} = \left . \tau_Z \right |_{in} \\
\end{array}
\right .
$$

Which is the rotation around $Z$ described by
$$
\left (
\begin{array}{rll}
\hat \tau_X \\
\hat \tau_Y \\
\hat \tau_Z \\
\end{array}
\right )_{out}
=
\left (
\begin{array}{rll}
\cos ( \theta ) & - \sin ( \theta ) & 0\\
\sin ( \theta ) & \cos ( \theta ) & 0\\
0 & 0 & 1\\
\end{array}
\right )

\left (
\begin{array}{rll}
\hat \tau_X \\
\hat \tau_Y \\
\hat \tau_Z \\
\end{array}
\right )_{in}
$$
We need the [[Baker-Campbell-Hausdorff formula]] as a way to expand $\left . \tau_X \right |_{out} = \left ( e^{i\theta \hat \tau_Z} \hat \tau_X e^{i\theta \hat \tau_Z} \right )_{in}$.   This equation describes the transition of the phase in the [[Heisenberg picture]]

- [ ] [[Heisenberg picture]] means transforming operators
- [ ] [[Schrodinger picture]] means transforming states

If we're interested in the [[📘 Expectation]] 
$$
\begin{array}{rll}
\braket{\tau_X}_{out} &= \braket{\psi_{in} | \tau_X | \psi_{in}}_{out} \\
&= ...
\end{array}
$$
Giving us the relations
$$
\left \{
\begin{array}{rll}
PS &\Rightarrow e^{-i \theta \tau_Z} & \text{$Z$ Rotation}\\
BS &\Rightarrow ??? & \text{Mixes the inputs}\\
\end{array}
\right .
$$
We describe our Beam Splitter as

$$
M_{BS} = 
\left (
\begin{array}{rll}
\cos ( \frac{\theta}{2}) & i \sin ( \frac{\theta}{2})\\
i \sin ( \frac{\theta}{2}) & \cos ( \frac{\theta}{2})
\end{array}
\right )
$$
Which gives the matrix in 3D
$$
\left (
\begin{array}{rll}
\hat \tau_X \\
\hat \tau_Y \\
\hat \tau_Z \\
\end{array}
\right )_{out}
=
\left (
\begin{array}{rll}
1 & 0 & 0\\
0 & \cos ( \theta ) & - \sin ( \theta )\\
0 & \sin ( \theta ) & \cos ( \theta )\\
\end{array}
\right )

\left (
\begin{array}{rll}
\hat \tau_X \\
\hat \tau_Y \\
\hat \tau_Z \\
\end{array}
\right )_{in}
$$

Which allows us to correct the initial splitters as
$$
\left \{
\begin{array}{rll}
PS &\Rightarrow e^{-i \theta \hat \tau_Z} & \text{$Z$ Rotation}\\
BS &\Rightarrow e^{-i\theta \hat \tau_X} & \text{$X$ Rotation}\\
\end{array}
\right .
$$

The [[Mach-Zehnder interferometer]] aggregates these operations as $BS \circ PS \circ BS$, as per the image on top. Hence
$$
\begin{array}{rll}
MZ &= e^{-i \theta \hat \tau_X}e^{-i \theta \hat \tau_Z}e^{-i \theta \hat \tau_X} \\
&= \exp \left ( { -i \theta [ e^{-i \theta \hat \tau_X}\hat \tau_Z}e^{-i \theta \hat \tau_X } ] \right ) & \text{Apply the BCH formula}\\
\end{array}
$$

### Setup
We setup $N$ particles in $2$ modes, creating the $N+1$ dimensional space spanned by the [[basis]] $\ket{m, N-m}$, for $m \in \{ 0,1, ... , N \}$. 
We write $\ket{\psi} = \sum_{m=0}^N c_m \ket{m}_\alpha\ket{N-m}_e$ and $\ket{\psi}_{out} = e^{-i\theta \hat \tau_Y} \ket{\psi}_{in}$.

For simplicity we write $\ket{\mu}$ instead of $\ket{m, N-m}$, with $\mu := \frac{m-(N-m)}{2} = $\frac{N}{2}-m$. In this setting the $\tau_X$ and $\tau_Y$ act as the [[raising operator]] and [[lowering operator]], respectively. 

We define the [[polarised state]] as $\ket{N}_a\ket{0}_b$, i.e. all particles are in the [[Ground state]]. This is an [[📘 Eigenstate]] of $\tau_Z$ , with [[eigenvalue]] $\frac{N}{2}$.

![[Pasted image 20240325121647.png]]
- Our Phase Shift represents a rotation around $Z$ ( green above )
- Our Beam Splitter represents a rotation around $X$ ( red above )

Hence
$$
\begin{array}{rll}
\braket{\tau_Z}_{out} &= \braket{\mu = \frac{N}{2} | e^{i \theta \hat \tau_Y} \tau_Z e^{-i \theta \hat \tau_Y} | \mu = \frac{N}{2}} & \text{Using $e^{i \theta \hat \tau_Y} \tau_Z e^{-i \theta \hat \tau_Y}=\tau_Z \cos ( \theta ) + \tau_X \sin ( \theta ) $ }\\
&= \braket{\mu = \frac{N}{2} | \tau_Z | \mu = \frac{N}{2}} \cos ( \theta ) - \braket{\mu = \frac{N}{2} | \tau_X | \mu = \frac{N}{2}} \sin ( \theta ) \\
&= \frac{N}{2} \cos ( \theta ) - 0 = \frac{N}{2} \cos ( \theta )
\end{array}
$$

Hence by making the [[📘 Measurement]] $\braket{\tau_Z}_{out}$ we can recover information on $\theta$ through the relation $\braket{\tau_Z}_{out}=\frac{N}{2} \cos ( \theta )$.

![[Pasted image 20240325122707.png]]

- [ ] Apply the [[Minimum Likelihood Framework]] with observations of $\tau_Z$ above, where we want the value of $\theta$.
	- [ ] Find the parameterized distribution for the errors of $\tau_Z$.

Letting $\bar \theta$ be our estimation of the true value of $\theta$, we have
$\tau - \braket{\tau} = \frac{\partial}{\partial \theta} \braket{\tau_Z }\left ( \theta - \hat \theta \right )$.

By the [[Central Limit Theorem]], the estimated error is approximately $\frac{\Delta \tau_Z}{zsqrt{m}}$.


## Exercises: Introduction to Python

# Day 2

# Lecture 1: More Python
No notes taken

# Lecture 2: Monte Carlo Methods

### Setup
We build a well model with [[Hamiltonian]] $H$, and we want to build a high precision model of how it works
$$
H \mapsto \text{"High precision"}
$$

We want to use a $t$ to describe the [[transition rate matrix]] for our Monte Carlo process.

We describe our system as a set of spherical particles in a box
![[Pasted image 20240326111428.png]]

We defined
- Our partition function as $Z = \sum_C W(C)$, where $C$ represents a particle configuration, and $W(C) = \left \{ \begin{matrix}1, & \text{2 particles overlap}\\ 0,& \text{No particles overlap} \end{matrix} \right .$ 
- The [[Potential]] $V$ is described as $\sum_{i<j}v(v_{ij})$ 
- $Z = \int e^{-\beta V(R) dR}$ 
- $\braket{A(R)} = \frac{1}{Z} \int e^{- \beta V(R)}A(R)dR$ 


We can consider a few different cases:
- Classical fluids/solids
- Spin models, such as the [[Ising Model]]. ( $E = -y\sum _{ij} S_{Z,i}S_{Z,j}$ )
- [[Lattice field]]s

we can consider the system
$$
\left \{
\begin{array}{rll}
p &= m \dot x \\
\dot p &= -\frac{\partial}{\partial x}V
\end{array}
\right . \Leftarrow \text{Molecular Dynamics}
$$


- [ ] Look into the [[Metropolis–Hastings algorithm]] ( [Wikipedia page](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm) )

The [[Metropolis–Hastings algorithm]] consists of two sets:
1. Generate a new sample based on our known but incomplete information on how the system evolves
2. Reject/Approve the new sample based on it's properties. The probability of acceptance is usually based on some invariants of the configuration that we want to preserve. This could be
	1. ensuring that the new energy is similar to the previous energy
	2. The momentum is maintained through time
	3. etc


#### Setup
- Data $(y, \sigma)$.
- Parameters $\theta \rightarrow y_\theta$. 
The goal is to find $\mathbb{P}[\theta | y]$ ( i.e. find the true underlying parameters based on our observations )

By [[Bayes theorem]], $\mathbb{P}[\theta | y] = \mathbb{P}[y | \theta]\mathbb{P}[\theta]\mathbb{P}[y]^{-1}$. We assume that
- $\mathbb{P}[y|\theta]$ is normally distributed
- $\mathbb{P}[y] = \mathbb{E}_\theta[y] = \int \mathbb{P}[\theta] \mathbb{P}[y | \theta] d \theta$, where $\mathbb{E}_\theta[y]$ is the [[📘 Expectation]] of $y$ given a certain distribution of $\theta$. This can be as simple as $d\theta = \mathbb{1}_{\text{valid configuration}}$.

- [ ] What is a [[partition function]] in [[statistical mechanics]]? [[Help me ❓]]


In quantum systems, we can have $\hat H = \hat K + \hat V = \frac{\Delta^2}{2m} + V(x)$, using the [[position basis]]. We always have that
$$
\begin{array}{rll}
E_0 &\leq \frac{\braket{\psi | H | \psi}}{\braket{\psi | \psi}} \\
&= \frac{\int \psi^2(R)H\psi(R)dR}{\int | \psi(R)|^2dR}
\end{array}
$$

( What is a [[mean field]] ?? [[Help me ❓]])

$$
\left \{
\begin{array}{rll}
\mathbb{P}[R] &= \frac{\psi(R)^2}{\int \psi(R)^2dR} \\
E_u(R) &= \frac{H\psi(R)}{\psi(R)} \\
\psi(R) & \approx \prod_{i < j} \phi(v_{ij}) = e^{-\sum_{i<j}u(v_{ij})}
\end{array}
\right .
$$

With this 
$$
\begin{array}{rll}
E_0 &\leq \underset{\theta}{\min}E_\theta  \\
&= \underset{\theta}{\min}\frac{\braket{\psi_\theta | H | \psi_\theta}}{\braket{\psi_\theta | \psi_\theta}} \\
\end{array}
$$

with $\theta_{n+1} = \theta_n \\ - \epsilon_n \partial_\theta E_\theta$ as our "evolution" of the algorithm. We want $\epsilon_n \overset{n \rightarrow \infty}{\rightarrow} 0$, but $\sum_n \epsilon_n = \infty$ to ensure that we don't get locally stuck. In order to iterate, we need to calculate $\partial_\theta E_\theta$. This is calculated as
$$
\begin{array}{rll}
\partial_\theta E_\theta &= \partial_\theta \frac{\braket{\psi_\theta | H | \psi_\theta}}{\braket{\psi_\theta | \psi_\theta}} & \text{By the chain rule}\\
&= \frac{\braket{\psi_\theta | H | \partial_\theta\psi_\theta}}{\braket{\psi_\theta | \psi_\theta}} - \frac{\braket{\psi_\theta | H | \psi_\theta}}{\braket{\psi_\theta | \psi_\theta}}\frac{\braket{\psi_\theta | \partial \psi_\theta}}{\braket{\psi_\theta | \psi_\theta}} & \text{Applying the Hamiltonian $H$ to the left}\\
&= \psi_\theta^2(R) \left ( E(R) - E_\theta \right ) \frac{\partial_\theta \psi_\theta}{\psi_\theta}
\end{array}
$$

Improvement by considering $\ket{\psi_\beta} := e^{-\beta H}\ket{\psi}$. We get that $\frac{\braket{\psi_\beta | H | \psi_\beta}}{\braket{\psi_\beta | \psi_\beta}} = (...)$ ( I didn't get this )

$$
\begin{array}{rll}
(e^{-\frac{\beta H}{M}})^M &= e^{-iH}e^{iH}(e^{-\frac{\beta H}{M}})^M & \text{Multiplying by an identity} \\
&= \int e^{-iH}\ket{R}\bra{R}e^{iH}\ket{R}\bra{R}(e^{-\frac{\beta H}{M}})^M dR\
\end{array}
$$
