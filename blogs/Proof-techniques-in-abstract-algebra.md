---
layout: page
permalink: /blogs/Proof-techniques-in-abstract-algebra/index.html
title: Proof techniques in abstract algebra
---
{% include mathjax.html %}

## Proof techniques in abstract algebra

### Basic techniques

>We wish to prove an element is unique

```{Proof}
We have standard method that assuming there are two elements and we show that they are the same using some assumptions or premises.
```

### How to Show Two Binary Structures Are Isomorphic

Let $(S, *)$ and $(S', *')$ be binary algebraic structures.  
To prove that $(S, *) \cong (S', *')$, proceed as follows.

1. **Define the map.**  
   Define a function
   \\[
   \phi : S \to S'
   \\]
   by explicitly specifying $\phi(s)$ for every $s \in S$.

2. **Injectivity (one-to-one).**  
   Show that $\phi$ is injective.  
   That is, assume
   \\[
   \phi(x) = \phi(y)
   \\]
   for $x,y \in S$, and deduce that $x = y$.

3. **Surjectivity (onto).**  
   Show that $\phi$ is surjective.  
   That is, let $s' \in S'$ be arbitrary and prove that there exists $s \in S$ such that
   \\[
   \phi(s) = s'.
   \\]

4. **Homomorphism property.**  
   Show that $\phi$ preserves the operation:
   \\[
   \phi(x * y) = \phi(x) *' \phi(y)
   \quad \text{for all } x,y \in S.
   \\]
   This is typically verified by direct computation.

If all four steps are satisfied, then $\phi$ is an isomorphism and the structures $(S, *)$ and $(S', *')$ are isomorphic.

### Structural Properties and Isomorphism

A *structural property* of a binary structure $(S, *)$ is a property that is *preserved under isomorphism*. That is, if
\\[
(S, *) \cong (S', *'),
\\]
then $(S, *)$ and $(S', *')$ must share all structural properties.

Structural properties are not concerned with:
- the names of the elements of the set,
- the symbols used to denote the operation,
- whether one set is a subset of another.

Instead, structural properties depend only on the algebraic structure itself.

**Examples of structural properties:**
- Cardinality (finite, countably infinite, uncountable)
- Existence of an identity element
- Existence of inverses
- Associativity and commutativity
- Number of elements in the underlying set

**Non-structural properties:**
- Element labels or notation
- The name of the operation (e.g., $+$ vs. $\times$)
- Whether one structure is a proper subset of another

**Key consequence:**  
If two structures have different cardinalities, they cannot be isomorphic.

For example,
\\[
(\mathbb{Q}, +) \not\cong (\mathbb{R}, +),
\\]
since $\mathbb{Q}$ is countable while $\mathbb{R}$ is uncountable.

**Important caution:**  
A structure may be isomorphic to a proper subset of itself.  
Therefore, being a proper subset does *not* rule out isomorphism.

**Summary:**  
Isomorphism preserves structure, not appearance.

