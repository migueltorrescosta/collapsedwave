---
tags:
  - "#coding"
  - "#image-processing"
---
For the code below, inputs are a 3D array, with the last dimension having size 3, for the distinct [[RGB Channels]]. The results can be shown by running `plt.imshow(final_image)`.

### Relevant imports
```python
import numpy as np
import matplotlib.pyplot as plt
import itertools
from scipy.ndimage import uniform_filter
from copy import deepcopy
```

### Add a border while keeping the picture size

```python
final_image = deepcopy(original_image)

final_image[0:20,:,:] = 1
final_image[original_image.shape[0]-20:original_image.shape[0],:,:] = 1
final_image[:,0:20,:] = 1
final_image[:,original_image.shape[1]-20:original_image.shape[1],:] = 1
```

### Add a border by extending the picture

```python
final_image[20:original_image.shape[0]+20,20:original_image.shape[1]+20,:] = np.divide(original_image,256)
```

### Smooth the image by applying a Uniform Kernel

```python
uniform_filter(deepcopy(original_image), size=(10, 10, 1))
```