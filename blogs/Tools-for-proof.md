---
layout: page
permalink: /blogs/Tools-for-proof/index.html
title: Tools for Proof
description: Worked examples of induction, contradiction, contraposition, proof by cases, and construction.
---
{% include mathjax.html %}

# Tools for Proof

A proof technique is a way to organize an argument. Start by identifying the assumptions and the precise statement you need to establish, then choose a method that fits.

## 1. Mathematical Induction

To prove a statement for all positive integers, establish a base case and show that the statement for an arbitrary integer $$k$$ implies the statement for $$k+1$$.

Example: For every positive integer $$n$$,

$$
1+2+\cdots+n=\frac{n(n+1)}{2}.
$$

Proof: For $$n=1$$, both sides equal $$1$$. Assume the formula holds for $$n=k$$. Then

$$
1+2+\cdots+k+(k+1)
=\frac{k(k+1)}{2}+(k+1)
=\frac{(k+1)(k+2)}{2}.
$$

This is the formula for $$k+1$$, so induction proves the claim.

### Strong Induction

Strong induction allows the inductive step to use all earlier cases, rather than just the immediately preceding case.

Example: Every integer $$n\ge2$$ is a product of primes.

Proof: The base case $$n=2$$ is prime. Suppose the claim holds for every integer from $$2$$ through $$n-1$$. If $$n$$ is prime, it is already a product with one prime factor. Otherwise, $$n=ab$$ for integers $$2\le a,b<n$$. The inductive hypothesis expresses both $$a$$ and $$b$$ as products of primes, and multiplying those products gives the required expression for $$n$$.

## 2. Proof by Contradiction

Assume the negation of the desired conclusion and derive a contradiction with a known fact or an assumption.

Example: No rational number has square $$2$$.

Proof: Suppose $$x^2=2$$ for a rational number $$x=a/b$$, where $$a,b$$ are coprime integers and $$b\ne0$$. Then $$a^2=2b^2$$, so $$a$$ is even. Write $$a=2k$$. Substitution gives $$b^2=2k^2$$, so $$b$$ is also even. This contradicts the assumption that $$a$$ and $$b$$ are coprime.

## 3. Proof by Contraposition

To prove “if $$P$$, then $$Q$$,” prove the equivalent statement “if not $$Q$$, then not $$P$$.”

Example: If $$n$$ is an integer and $$n^2$$ is even, then $$n$$ is even.

Proof: We prove the contrapositive. If $$n$$ is odd, write $$n=2k+1$$ for an integer $$k$$. Then

$$
n^2=(2k+1)^2=2(2k^2+2k)+1,
$$

which is odd. Thus an odd integer cannot have an even square, proving the original implication.

## 4. Proof by Cases

Divide the possibilities into cases that cover every situation, then prove the claim in each case.

Example: For every integer $$n$$, the number $$n(n+1)$$ is even.

Proof: By division with remainder, $$n$$ is either even or odd. If $$n=2k$$, then $$n(n+1)=2k(2k+1)$$ is even. If $$n=2k+1$$, then $$n(n+1)=(2k+1)2(k+1)$$ is even. Both cases give the same conclusion.

## 5. Proof by Construction

To prove that an object exists, give an explicit example and verify the required properties.

Example: For every positive integer $$n$$, there is an even integer greater than $$n$$.

Proof: Choose $$m=2n$$. The integer $$m$$ is even, and $$m-n=n>0$$. Therefore $$m>n$$.
