---
layout: page
permalink: /blogs/Proof-techniques-in-analysis/index.html
title: Proof Techniques in Analysis
description: Inequalities, index choices, and nested intervals for introductory real analysis proofs.
---
{% include mathjax.html %}

# Proof Techniques in Analysis

These notes collect techniques for introductory real analysis: estimating errors, choosing indices, and constructing limits. They assume familiarity with sequences, limits, and the definitions of continuity and differentiability.

Try a problem yourself before consulting the notes. When you get stuck, identify the quantity you need to control and the assumptions available to control it.

## Common Inequalities

### Triangle and Reverse Triangle Inequalities

For real or complex numbers $$x,y$$,

$$
|x+y|\le |x|+|y|,
\qquad
\big||x|-|y|\big|\le |x-y|.
$$

The triangle inequality separates an error into manageable parts. The reverse triangle inequality helps transfer estimates to absolute values. For instance, if $$x_n\to x$$, then

$$
\big||x_n|-|x|\big|\le |x_n-x|\to0.
$$

### Cauchy–Schwarz Inequality

For $$x,y\in\mathbb{R}^n$$ with the Euclidean norm,

$$
|x\cdot y|\le\|x\|_2\|y\|_2.
$$

This bounds an inner product by the product of two norms. It is useful for estimating sums and proving continuity of linear maps in finite-dimensional spaces.

A separate useful scalar estimate is

$$
|ab|\le\frac{a^2+b^2}{2}.
$$

It follows by expanding $$(\lvert a\rvert -\lvert b\rvert )^2\ge0$$.

### Arithmetic–Geometric Mean Inequality

For nonnegative real numbers $$a_1,\ldots,a_n$$, with $$n\ge1$$,

$$
\left(\prod_{i=1}^n a_i\right)^{1/n}
\le\frac{1}{n}\sum_{i=1}^n a_i.
$$

In particular, $$\sqrt{ab}\le(a+b)/2$$ for $$a,b\ge0$$. This converts some product estimates into sum estimates.

### Bernoulli's Inequality

For $$x\ge-1$$ and an integer $$n\ge1$$,

$$
(1+x)^n\ge1+nx.
$$

This gives a simple lower bound for a power and can help compare growth rates.

### Mean Value Estimate

Let $$a<b$$ and let $$f:[a,b]\to\mathbb{R}$$ be continuous on $$[a,b]$$ and differentiable on $$(a,b)$$. If $$\lvert f'(t)\rvert \le M$$ throughout $$(a,b)$$, the mean value theorem gives

$$
|f(x)-f(y)|\le M|x-y|
\qquad\text{for all }x,y\in[a,b].
$$

Thus a uniform bound on the derivative gives Lipschitz continuity, and hence uniform continuity, on this interval.

### Young's Inequality with a Parameter

For $$a,b\ge0$$ and $$\varepsilon>0$$,

$$
ab\le\varepsilon a^2+\frac{b^2}{4\varepsilon}.
$$

This follows from

$$
\left(\sqrt{\varepsilon}\,a-\frac{b}{2\sqrt{\varepsilon}}\right)^2\ge0.
$$

The parameter lets you make the coefficient of one squared term small while allowing the other coefficient to grow.

### Bounding a Product

If $$x_n\to0$$ and $$(y_n)$$ is bounded, choose $$M\ge0$$ such that $$\lvert y_n\rvert \le M$$ for every $$n$$. Then

$$
|x_ny_n|\le M|x_n|\to0.
$$

The bound must be independent of $$n$$. More generally, track which variables a constant depends on before treating it as fixed.

### Splitting Small and Large Values

The bounds

$$
|x|\le\max\{1,|x|\},
\qquad
1+|x|\le2\max\{1,|x|\}
$$

can combine the cases $$\lvert x\rvert \le1$$ and $$\lvert x\rvert >1$$. This is useful when one estimate behaves differently near zero and far from zero.

## Choosing a Single Index

Suppose $$P(n)$$ holds for every $$n\ge N_1$$ and $$Q(n)$$ holds for every $$n\ge N_2$$. Set

$$
N=\max\{N_1,N_2\}.
$$

For every $$n\ge N$$, both conditions hold. The same argument works for any finite collection of eventual conditions.

### Example: The Sum of Two Convergent Sequences

Suppose $$x_n\to x$$ and $$y_n\to y$$. Given $$\varepsilon>0$$, choose $$N_1$$ such that $$\lvert x_n-x\rvert <\varepsilon/2$$ for $$n\ge N_1$$, and $$N_2$$ such that $$\lvert y_n-y\rvert <\varepsilon/2$$ for $$n\ge N_2$$.

For $$n\ge\max\{N_1,N_2\}$$,

$$
|(x_n+y_n)-(x+y)|
\le|x_n-x|+|y_n-y|
<\varepsilon.
$$

This proves $$x_n+y_n\to x+y$$. The index can depend on $$\varepsilon$$, but it must work for every subsequent $$n$$.

## Constructing Sequences

New sequences often come from sums, products, absolute values, or subsequences. Relate the new expression to estimates you already know.

For example, to control a product near its proposed limit, write

$$
|x_ny_n-xy|
\le |x_n|\,|y_n-y|+|y|\,|x_n-x|.
$$

If $$(x_n)$$ converges, it is bounded. This reduces the product limit to two terms that tend to zero.

For a subsequence $$(x_{n_k})$$, remember that its indices must be strictly increasing. In particular, $$n_k\ge k$$, so eventual bounds for the original sequence also apply to the subsequence.

## Nested Intervals

Let $$I_n=[a_n,b_n]$$ be nonempty closed, bounded intervals in $$\mathbb{R}$$ such that

$$
I_1\supseteq I_2\supseteq I_3\supseteq\cdots,
\qquad b_n-a_n\to0.
$$

Then the intersection contains exactly one point.

### Why It Works

The left endpoints are nondecreasing and bounded above by $$b_1$$. By completeness, $$x=\sup\{a_n:n\ge1\}$$ exists. For any fixed $$n$$, nesting implies that every $$a_k\le b_n$$, so $$a_n\le x\le b_n$$. Hence $$x\in I_n$$ for every $$n$$.

If $$x$$ and $$y$$ both lie in every interval, then $$\lvert x-y\rvert \le b_n-a_n$$ for every $$n$$. Since the lengths tend to zero, $$x=y$$.

### Using the Construction

1. Choose a nonempty closed, bounded interval containing possible candidates.
2. Construct a nested sequence of nonempty closed subintervals that preserves the property you need.
3. Show that their lengths tend to zero.
4. Check that the point in their intersection has the desired property.

Closedness and boundedness support the existence argument; shrinking lengths give uniqueness. Without shrinking lengths, an intersection may still exist but contain more than one point. Without closedness, even nested bounded intervals of shrinking length can have an empty intersection, as with $$(0,1/n)$$.

## Before Finishing a Proof

- State the domain and hypotheses of each inequality or theorem you use.
- In an $$\varepsilon$$ argument, make each choice after the quantities it depends on have been fixed.
- Check that bounds intended to be uniform do not depend on the varying index or point.
- Separate existence from uniqueness: they may require different arguments.
