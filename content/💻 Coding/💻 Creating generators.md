---
tags:
  - "#coding"
  - "#python"
  - "#script"
---
Generator Expressions ( [PEP 289](https://peps.python.org/pep-0289/) ) allow us to define a "list" while not forcing the entire computation and storage in memory. A good example of the benefits of this comes from:

```python
sum([x for x in range(10**8)]) # O(n) memory usage
sum(x for x in range(10**8)) # O(1) memory usage
```

They are easy to create for any custom function:

```python
>>> g = (x**2 for x in [-3,1,7])
>>> g
<generator object <genexpr> at 0x7f24e2bd0eb0>
>>> next(g)
9
>>> next(g)
1
>>> next(g)
49
>>> next(g)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

[[All python generators are also python iterators]]