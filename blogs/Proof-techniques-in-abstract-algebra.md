---
layout: page
permalink: /blogs/Proof-techniques-in-abstract-algebra/index.html
title: Proof Techniques in Abstract Algebra
description: Proving uniqueness, verifying isomorphisms, and recognizing structural properties in algebra.
---
{% include mathjax.html %}

# Proof Techniques in Abstract Algebra

Algebraic proofs often ask whether an object is unique, whether a map preserves an operation, or whether two structures are isomorphic. The key is to work directly from the definitions.

## Proving Uniqueness

To prove uniqueness, suppose two objects satisfy the defining property and show that they are equal. If the statement also asserts existence, establish that separately.

Example: A binary operation has at most one two-sided identity element.

Proof: Suppose $$e$$ and $$f$$ are both two-sided identities. Since $$e$$ is an identity, $$e*f=f$$. Since $$f$$ is an identity, $$e*f=e$$. Therefore $$e=f$$.

## Showing Two Binary Structures Are Isomorphic

Let $$(S,*)$$ and $$(S',*')$$ be sets equipped with binary operations. To prove they are isomorphic, construct a bijection that preserves the operation.

1. Define a map $$\phi:S\to S'$$ explicitly. Check that it is well-defined and takes values in $$S'$$.
2. Prove injectivity: if $$\phi(x)=\phi(y)$$, then $$x=y$$.
3. Prove surjectivity: for every $$s'\in S'$$, find an $$s\in S$$ with $$\phi(s)=s'$$.
4. Verify the homomorphism property:

$$
\phi(x*y)=\phi(x)*'\phi(y)
\qquad\text{for all }x,y\in S.
$$

For structures with additional operations, such as rings, check preservation of all required operations and any distinguished elements required by the definition you are using.

### Example: Integers and Even Integers Under Addition

Define $$\phi:\mathbb{Z}\to2\mathbb{Z}$$ by $$\phi(n)=2n$$. If $$2m=2n$$, then $$m=n$$, so the map is injective. Every even integer has the form $$2n$$, so it is surjective. Finally,

$$
\phi(m+n)=2(m+n)=2m+2n=\phi(m)+\phi(n).
$$

Thus $$(\mathbb{Z},+)$$ and $$(2\mathbb{Z},+)$$ are isomorphic, even though $$2\mathbb{Z}$$ is a proper subset of $$\mathbb{Z}$$.

## Structural Properties

A structural property is preserved under isomorphism. For binary structures, examples include:

- Cardinality.
- Associativity and commutativity.
- Existence of a two-sided identity.
- In a group, the order of each element and the existence of inverses.

Element labels, operation symbols, and the way a set sits inside an ambient set are not, by themselves, structural properties.

### Using an Invariant to Rule Out an Isomorphism

If two structures have different cardinalities, no bijection exists between them, so they cannot be isomorphic. For example,

$$
(\mathbb{Q},+)\not\cong(\mathbb{R},+),
$$

because $$\mathbb{Q}$$ is countable and $$\mathbb{R}$$ is uncountable.

Matching one invariant does not prove isomorphism. For instance, two groups may have the same cardinality but differ in commutativity or element orders. To establish an isomorphism, supply a map and verify all the required properties.
