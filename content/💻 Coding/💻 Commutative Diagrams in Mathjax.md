---
tags:
  - "#coding"
  - "#mathjax"
---
It is possible to render commutative diagrams in MathJax. The following provide 2 such possibilities. Both can be tested in this [online mathjax editor](https://cortexjs.io/mathlive/demo/), useful to build the initial version of the latex code.

# CD environment
This uses the CD environment provided by the amscd package. It does not support diagonal arrows. [Documentation is available here](https://www.latex-project.org/help/documentation/amsldoc.pdf).

## Example 1
$$
\begin{CD}
K(X) @>{ch}>> H(X;\mathbb Q)\\
@V{\Psi}VV @VV{\phi_t}V \\
K(Y) @>{ch}>> H(Y;\mathbb Q)
\end{CD}
$$

## Example 2
$$
\begin{CD}
\mathcal{L} @>>> \mathcal{K} @>>> \mathcal{K} @>>> \mathcal{L}\\
@V{\mathcal{L}}VV @AAA @AA\mathcal{R}A @VVV\\
\mathcal{L} @>>> \mathcal{K} @>>> \mathcal{K} @>>> \mathcal{L}
\end{CD}
$$

# Arrays


## Example 3
$$
\begin{array}{ccccccccc}
0 & \xrightarrow{i} & A & \xrightarrow{f} & B & \xrightarrow{q} & C & \xrightarrow{d} & 0\\
\mathcal{F}\downarrow & \searrow & \downarrow & \nearrow & \downarrow & \searrow & \downarrow & \nearrow & \downarrow\\
0 & \xrightarrow{j} & D & \xrightarrow{g} & E & \xrightarrow{r} & F & \xrightarrow{e} & 0
\end{array}
$$

