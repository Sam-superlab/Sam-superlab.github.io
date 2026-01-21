---
layout: page
permalink: /blogs/Proof-techniques-in-analysis/index.html
title: Proof Techniques in Analysis
---
{% include mathjax.html %}

## Proof Techniques in Analysis

In general, the technique and language we use in analysis is essentially different than those in algebra, $\varepsilon, \delta$ language, etc.

The purpose of this note is to summarize some common techniques and constructions we use in analysis.

I don't recommand who are taking analysis to read this note, it is better to frustrate first and then ask for help.

### Common Inequalities in Analysis

Inequalities are the core technical tool in analysis.  
They are used to control errors, dominate expressions, and connect abstract definitions (limits, continuity, convergence) to concrete estimates.

Most analysis proofs reduce to **choosing the correct inequality at the correct moment**.

---

#### Triangle Inequality

For any real (or complex) numbers $x,y$,
\\\[
|x+y| \le |x| + |y|.
\\\]

More generally, for any $x,y$,
\\\[
\big||x| - |y|\big| \le |x-y|.
\\\]

**Typical use cases:**
- Splitting an error term
- Proving uniqueness of limits
- Bounding expressions in $\varepsilon$-proofs

```{Proof Strategy}
Rewrite the quantity you want to bound as a sum or difference,
then apply the triangle inequality to separate terms.
````

---

#### Reverse Triangle Inequality

For all $x,y$,
\\\[
\big||x| - |y|\big| \le |x-y|.
\\\]

**Key idea:**
Distances cannot increase under absolute values.

**Typical use cases:**

* Showing convergence of $|x_n|$
* Proving continuity of $|\cdot|$
* Lower bounds in limit arguments

---

#### Cauchy–Schwarz Inequality

For vectors $x,y \in \mathbb{R}^n$,
\\[
|x \cdot y| \le |x|,|y|.
\\]

In $\mathbb{R}$, this reduces to
\\[
|xy| \le \tfrac{1}{2}(x^2 + y^2).
\\]

**Typical use cases:**

* Controlling products
* Bounding integrals or sums
* Norm estimates

```{Proof Strategy}
Use Cauchy–Schwarz to replace a product by a sum of squares,
which are easier to control.
```

---

#### AM–GM Inequality

For nonnegative real numbers $a,b$,
\\[
\sqrt{ab} \le \frac{a+b}{2}.
\\]

More generally, for $a_1,\dots,a_n \ge 0$,
\\[
\left(\prod_{i=1}^n a_i\right)^{1/n}
\le \frac{1}{n}\sum_{i=1}^n a_i.
\\]

**Typical use cases:**

* Bounding nonlinear expressions
* Simplifying products into sums
* Error estimates

---

#### Bernoulli’s Inequality

For $x \ge -1$ and $n \in \mathbb{N}$,
\\[
(1+x)^n \ge 1 + nx.
\\]

**Typical use cases:**

* Exponential estimates
* Convergence of sequences
* Comparing growth rates

---

#### Mean Value Inequality (Derived from MVT)

If $f$ is differentiable on an interval and $|f'(x)| \le M$, then
\\[
|f(x) - f(y)| \le M |x-y|.
\\]

**Interpretation:**
A bounded derivative implies Lipschitz continuity.

**Typical use cases:**

* Proving continuity
* Showing uniform continuity
* Estimating function differences

---

#### Young’s Inequality (Two-Term Version)

For $a,b \ge 0$ and $\varepsilon > 0$,
\\[
ab \le \varepsilon a^2 + \frac{1}{4\varepsilon} b^2.
\\]

**Key idea:**
Trade one term for another with a tunable parameter.

**Typical use cases:**

* Absorbing error terms
* Balancing inequalities
* Functional analysis arguments

---

#### Bounding by Constants

If $x_n \to 0$ and $(y_n)$ is bounded, then
\\[
x_n y_n \to 0.
\\]

**Underlying inequality:**
\\[
|x_n y_n| \le |x_n| \cdot \sup |y_n|.
\\]

**Typical use cases:**

* Product limits
* Series estimates
* Error control

---

#### Max–Min Trick

For any real numbers $a,b$,
\\[
|a| \le \max{|a-b|,|b|} + |b|.
\\]

More commonly,
\\[
|x| \le \max{1,|x|}.
\\]

**Typical use cases:**

* Piecewise estimates
* Splitting cases
* Uniform bounds

---

### Strategic Advice

* Inequalities are **tools** the construction is still your business
* Always ask: *what needs to be small?*
* Replace complicated expressions with **simpler upper bounds**.
* Constants do not matter unless explicitly stated.

In analysis, **control beats exactness**.

---

### Meta-Rule (Very Important)

If you are stuck in an $\varepsilon$–proof:

> Rewrite the goal as an inequality involving $|x - L|$
> and ask which inequality allows you to bound it.

Most proofs fail because the **wrong inequality** is chosen, not because of algebraic mistakes.


---

### Index Control Techniques

Many arguments in analysis fail not because of algebraic mistakes, but because of poor control of indices.
A recurring theme is that when multiple conditions must hold simultaneously, we must synchronize them using a single index.

---

#### The Max Index Trick

This is one of the most frequently used techniques in analysis.

The typical situation is that we have two (or more) statements of the following form:
\\[
\exists N_1 \in \mathbb{N} \text{ such that } P(n) \text{ holds for all } n \ge N_1,
\\]
\\[
\exists N_2 \in \mathbb{N} \text{ such that } Q(n) \text{ holds for all } n \ge N_2.
\\]

To make both conditions hold at the same time, we define
\\[
N := \max{N_1, N_2}.
\\]

Then, for every ( n \ge N ), both ( P(n) ) and ( Q(n) ) hold automatically, since ( n \ge N_1 ) and ( n \ge N_2 ).

This construction is not a trick in the casual sense; it is a structural necessity.
Whenever two asymptotic conditions appear in the same argument, the max index is unavoidable.

Typical situations where this appears include:

* Comparing two convergent sequences
* Proving uniqueness of limits
* Showing that sums or products of sequences converge
* Synchronizing multiple ( \varepsilon )-conditions

As a mental rule:
If you see two limits or two error bounds in the same proof, you should expect to take a maximum.

---

### Constructing New Sequences from Old Ones

In analysis, we rarely study sequences in isolation. Instead, we construct new sequences from old ones and control their behavior using known estimates.

Common constructions include
\\[
(x_n + y_n), \quad (x_n y_n), \quad (|x_n|), \quad (x_{n_k}).
\\]

The guiding principle is that new expressions must be bounded using inequalities applied to the original sequences.

For example, when studying the convergence of ( x_n + y_n ), one does not attempt to analyze the expression directly. Instead, one rewrites
\\[
|(x_n + y_n) - (x + y)| \le |x_n - x| + |y_n - y|.
\\]

Each term is then controlled separately, and the max index trick is used to synchronize the bounds.

This pattern appears so frequently that it should be treated as automatic.

---

### Nested Interval Technique

The nested interval technique is a construction method rather than a single theorem.
It is used to prove existence results when the object cannot be written down explicitly.

The idea is to construct a sequence of closed intervals
\\[
I_1 \supseteq I_2 \supseteq I_3 \supseteq \cdots
\\]
with the following properties:

1. Each interval ( I_n ) is closed and bounded.
2. The intervals are nested.
3. The lengths satisfy ( |I_n| \to 0 ).

Under these conditions, there exists a unique point
\\[
x \in \bigcap_{n=1}^{\infty} I_n.
\\]

---

#### General Process

The nested interval method always follows the same logical structure.

First, choose an initial closed interval ( I_1 ) that contains all possible candidates.

Next, assuming ( I_n ) has been constructed, define a smaller closed interval ( I_{n+1} \subseteq I_n ) that preserves the desired property.

Then, ensure that the length of the intervals tends to zero, usually by construction.

Finally, define the desired object as the unique point in the intersection of all intervals.

---

#### Why the Method Works

Closed and bounded intervals in ( \mathbb{R} ) are compact.
Nested closed sets with shrinking diameter must have a nonempty intersection.
Shrinking length guarantees uniqueness.

This technique is the conceptual engine behind:

* Completeness of ( \mathbb{R} )
* Bolzano–Weierstrass
* Cantor’s intersection theorem
* Binary and decimal expansions of real numbers

---

### Common Failure Modes

Nested interval arguments fail if any of the following are overlooked:

* Intervals are not closed
* Intervals are not bounded
* Lengths do not shrink to zero
* Existence is confused with uniqueness

If any of these conditions fail, the conclusion does not follow.

---

### Meta-Observation

A large fraction of undergraduate analysis proofs are built from the same three components:

* One inequality
* One index synchronization using a maximum
* One compactness or completeness principle

Everything else is bookkeeping.
