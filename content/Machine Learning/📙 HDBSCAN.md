---
date: 2023-11-01
tags:
  - machine-learning
---
HDBSCAN is a [[clustering algorithm]]. It has 5 steps:

1. Build the [[📘 Minimum spanning tree]] using the $d_{mreach-k}(a,b)$ [[📘 Distance]]. This can be done efficiently using [[Prims algorithm]] or [[Dual Tree Boruvka]].
2. Dropping the edges according to their distances allows us to build a cluster hierarchy
3. Remove cluster from tree below a minimum cluster size $m$.
4. Calculate the cluster stability for all clusters in the tree.
5. Climb the tree from the node clusters to the root:
	1. If a cluster has higher stability than the sum of its direct children, delete all of the children. 
	2. Otherwise set it's stability to be the sum of it's children
6. Return the list of leaf clusters that survived as our clustering 🎉

*Note: If we selected a maximum cluster distance after step 2 and selected all clusters below it, this would be the implementation of [[DBSCAN]].*

>[!info]-  
> 1. $core_k(x)$ is the [[core distance]] to the $k$ nearest neighbour from point $x$. $x$ does not need to be in our data.
> 2. $d_{mreach-k}(a,b) := max \{ core_k(a), core_k(b), d(a,b) \}$ is the [[mutual reachability distance]].
> 3. $m$ : The minimum cluster size, used for pruning the cluster tree.
> 4. $\sum_{p \in C} ( \lambda_p - \lambda_{birth})$ is the stability of a cluster of points $C$ .
> 5. $\lambda_p$ is the inverse of the distance when a point "fell of" a cluster
> 6. $\lambda_{birth}$ is the inverse distance of a cluster

The description of $\lambda$ as the inverse of a distance needs to be flushed out: it is unclear which distance is being used. [[Help me ❓]]
  
>[!tip]  
>We can think of the steps above as
> 1. Transforming the space according to the density/sparsity.
> 2. Building the minimum spanning tree of the distance weighted graph.
> 3. Constructing a cluster hierarchy of connected components.
> 4. Condensing the cluster hierarchy based on minimum cluster size.
> 5. Extracting the stable clusters from the condensed tree.  
  
  
>[!quote]  
> [readthedocs from Python's hdbscan package](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html)
