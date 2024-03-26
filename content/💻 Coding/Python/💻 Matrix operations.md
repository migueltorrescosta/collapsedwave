---
tags:
  - "#coding"
  - "#python"
---

## Matrix creation
```python
import numpy as np
x = np.array([[1,2],[3,4]])
y = np.array([[5,6],[7,8]])
```

## Element wise multiplication
```python
>>> x * y
array([[ 5, 12],
       [21, 32]])
```

## Matrix multiplication
```python
>>> x @ y
array([[19, 22],
       [43, 50]])
```

## Tensor product
```python
>>> np.kron(x,y)
array([[ 5,  6, 10, 12],
       [ 7,  8, 14, 16],
       [15, 18, 20, 24],
       [21, 24, 28, 32]])

```

## Trace
```python
>>> np.einsum('ii',x)
5
```

## $L_\infty$ norm
(i.e. summing all values of the matrix)
```python
>>> np.einsum('ij->',x)
10
```

## Sum over rows/columns
```python
>>> np.einsum('ij->i',x)
array([3, 7])
>>> np.einsum('ij->j',x)
array([4, 6])
```