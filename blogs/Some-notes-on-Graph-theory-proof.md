---
layout: page
permalink: /blogs/Some-notes-on-Graph-theory-proof/index.html
title: Some Notes on Graph Theory Proof
---
{% include mathjax.html %}

## Some Notes on Graph Theory Proof

### 1. Basic Graph Theory Concepts

A graph $G = (V, E)$ consists of a set of vertices $V$ and a set of edges $E$. Understanding the fundamental definitions is crucial for constructing proofs in graph theory.

>**Definition**: A graph is **connected** if there exists a path between any two vertices.

>**Definition**: The **degree** of a vertex $v$, denoted $\deg(v)$, is the number of edges incident to $v$.

### 2. Common Proof Techniques in Graph Theory

#### 2.1 Proof by Induction on the Number of Vertices or Edges

Many graph theory proofs use induction on the number of vertices $n$ or edges $m$.

>**Example**: Prove that every tree with $n$ vertices has exactly $n-1$ edges.

**Proof**: We proceed by induction on the number of vertices $n$.

- **Base case**: For $n=1$, a tree with one vertex has $0 = 1-1$ edges. ✓
- **Inductive step**: Assume the statement holds for all trees with $k$ vertices, where $k < n$. Consider a tree $T$ with $n$ vertices. Since $T$ is a tree, it has at least one leaf (a vertex of degree 1). Remove this leaf and its incident edge to obtain a tree $T'$ with $n-1$ vertices. By the inductive hypothesis, $T'$ has $(n-1)-1 = n-2$ edges. Therefore, $T$ has $(n-2)+1 = n-1$ edges. ✓

#### 2.2 Proof by Contradiction

This technique is useful when proving properties that must hold for all graphs of a certain type.


#### 2.3 Proof by Construction

This technique involves explicitly constructing a graph or structure that satisfies the desired properties.

>**Example**: Prove that for any $n \geq 3$, there exists a graph with $n$ vertices that is $2$-connected but not $3$-connected.

**Proof**: Consider the cycle graph $C_n$ with $n$ vertices. This graph is $2$-connected (removing any single vertex leaves a connected graph), but it is not $3$-connected (removing two adjacent vertices disconnects the graph).

#### 2.4 Proof by Extremal Principle（Upper bound or lower bound）

This technique involves considering an extremal object (maximum, minimum, etc.) and showing that it must have certain properties.

>**Example**: Prove that in any graph, there exists a vertex $v$ such that at least half of its neighbors have degree at most $\deg(v)$.

**Proof**: Consider a vertex $v$ of maximum degree. For any neighbor $u$ of $v$, we have $\deg(u) \leq \deg(v)$ by the maximality of $v$. Therefore, all neighbors of $v$ have degree at most $\deg(v)$, which is certainly at least half.

>Some tricks involve setting the minial cycle, and remove one edge, some may involve setting the maximum length of walk and construct a longer one. 

### 3. Important Theorems and Their Proof Strategies

#### 3.1 Handshaking Lemma

>**Theorem**: In any graph, $\sum_{v \in V} \deg(v) = 2|E|$.

**Proof Strategy**: Count the number of edge-vertex incidences in two ways. Each edge contributes 2 to the sum of degrees (one for each endpoint).

#### 3.2 Euler's Formula (for planar graphs)

>**Theorem**: For a connected planar graph with $V$ vertices, $E$ edges, and $F$ faces, we have $V - E + F = 2$.

**Proof Strategy**: Use induction on the number of edges, considering cases based on whether the graph contains cycles.

### 4. Tips for Graph Theory Proofs

1. **Draw diagrams**: Visual representations often reveal key insights.
2. **Consider special cases**: Trees, cycles, complete graphs, and bipartite graphs often serve as building blocks.
3. **Use invariants**: Properties like the sum of degrees, number of components, or chromatic number can be powerful tools.
4. **Consider the complement**: Sometimes it's easier to prove something about the complement graph.
5. **Use extremal arguments**: Consider vertices or edges with maximum or minimum degrees.

### 5. Common Pitfalls to Avoid

- Assuming all graphs are connected without stating it.
- Forgetting to handle edge cases (empty graphs, graphs with one vertex, etc.).
- Confusing necessary and sufficient conditions.
- Not clearly defining what "removing a vertex" or "removing an edge" means in the context of the proof.



