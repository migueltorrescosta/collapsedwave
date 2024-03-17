---
tags:
  - "#algebra"
---

i.e. $[A, [B,C]] + [B, [C,A]] + [C, [A,B]] = 0$, where
- $[ \cdot, \cdot ]$ is the [[📘 Commutator]]

# Proof
$$
\begin{array}{rll}
[A, [B,C]] + [B, [C,A]] + [C, [A,B]] & = [A, BC-CB] + [B,CA-AC] + [C, AB-BA] & \text{By the commutator's definition} \\
& = A(BC-CB) - (BC-CB)A + B(CA-AC) - (CA-AC)B + C(AB-BA) - (AB-BA)C & \text{Expanding the multiplications} \\
& = ABC - ACB - BCA +CBA + BCA - BAC - CAB + ACB + CAB - CBA - ABC + BAC & \text{Cancelling the repeated terms} \\
& = 0
\end{array}
$$