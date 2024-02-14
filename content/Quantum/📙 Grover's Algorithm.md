---
tags:
  - "#quantum-theory"
---
I need to explain this properly. [[Help me ❓]]

## Key ideas
- $U_w := I - 2\ket{\omega}\bra{\omega}$
- $\ket{s'} := H^{\otimes n} \ket{0}^n - \ket{\omega}$ 
- $U_{s'} = 2\ket{s'}\bra{s'} - I$  

## Questions
- Is there a requirement for $\ket{w}$ to be unique? ( i.e. could we have two or more pure states that "solve" a problem, described by $\dim ( \ker ( U_\omega + I )) \geq 2$?

- [ ] Rewrite $U_\omega$ and $U_{s'}$  as vector operations, calculate their products $U_\omega U_{s'}$ and $U_{s'} U_\omega$, and see if a simpler calculation can return the desired output, i.e. minimize the number of uses of the oracle $U_{s'}$ .