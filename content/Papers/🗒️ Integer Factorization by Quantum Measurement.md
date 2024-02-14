---
tags:
  - "#quantum-theory"
url: ???
---
Below I've written up the aspects of this paper 
# ⚒️ Initial Setup

🌞 nitpick: It was unclear in Eq 3 that the hamiltonians $\bar H_1$ and $\bar H_2$ were operating on distinct qubits. The notation for this is the tensor product, $\bar H = \bar H_1 \otimes \bar H_2$

# 💻 Algorithm

The decomposition of $\log N$ as $\log p_i + \log \hat N_i$ is possible as the first qubit is in a state $\log p_i$ and the second qubit in a state $\log j$, for $i, j \in \{ 1, 2, ... , m \}$. Then the decomposition of $\ket{log N}$ is only possible if $\log \hat N_i \leq \log m \Rightarrow \hat N_i < m, \exists $\bar N_i$. Letting $p$ be the greatest prime factor of $n$, we would then need to have $m \geq N/p$ in order for the algorithm to work, otherwise none of the eigenstates of $\bar H$ have energy level $\log N$. What happens if this is the case?

Example: If $N = 2^{500}$, then the only possible decomposition of $\log{N}$ is given by $\log(N) = \log(2^{500}) = \log(2) + \log ( 2^{499} )$. For the measurement potentially return $\ket{\log 2} \ket{\log 2^{499}}$ we need $m \geq 2^{499}$.

# 🌍 Quantum Potentials

I'm lost. [[Help me ❓]]. I need to learn the concepts of
- [ ] discrete quantum register
- [ ] quantum ladder ( This feels like a quantum specific application of ladder operator, i.e. annihilation/creation operators in the quantum world )
- [ ] "Both legs should have $d$ spins": No clue what this means
- [ ] Supersymmetric Quantum Mechanics: This technique allows us to build a potential with a pre-defined finite number of eigenvalues $\{ e_1, e_2, \dots , e_n \}$. 
- [ ] "digital implementation of the algorithm": Classically, analog means continuous and digital means discrete. Does the same apply to quantum implementations? I thought everything in the quantum world was quantized aka discrete aka digital.