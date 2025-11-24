---
layout: page
permalink: /blogs/Tools-for-proof/index.html
title: Tools for Proof
---
{% include mathjax.html %}

## Tools for Proof

### 1. Mathematical Induction and strong induction
Mathematical induction is a proof technique that allows us to prove that a statement is true for all natural numbers. It is a powerful tool for proving statements about integers and other discrete structures.

Strong induction is a variant of mathematical induction that allows us to prove that a statement is true for all natural numbers by assuming that the statement is true for all smaller natural numbers.

>Example: Prove that $1+2+3+\cdots+n=\frac{n(n+1)}{2}$ for all natural numbers $n$.

Proof: By mathematical induction, we can prove that the statement is true for all natural numbers $n$.

### 2. Proof by Contradiction

This technique is usefull when we have a existential statement to prove. We assume the negation of the statement is true and then show that this leads to a contradiction.

>Example: Prove that there is no rational number whose square is 2.

Proof: Assume there is a rational number $x$ whose square is 2. Then we can write $x=\frac{a}{b}$ where $a$ and $b$ are coprime integers. Then we have $x^2=\frac{a^2}{b^2}=2$. This implies that $a^2=2b^2$. Since $a^2$ is even, $a$ must be even. Let $a=2k$ for some integer $k$. Then we have $4k^2=2b^2$. This implies that $b^2=2k^2$. Since $b^2$ is even, $b$ must be even. This contradicts the fact that $a$ and $b$ are coprime. Therefore, there is no rational number whose square is 2.

### 3. Proof by Contraposition

This technique is usefull when we have a "if-then" statement to prove. We assume the conclusion is false and then show that this leads to a contradiction.

>Example: Prove that if $n$ is a natural number and $n^2$ is even, then $n$ is even.

Proof: Assume that $n$ is not even. Then $n$ is odd. Let $n=2k+1$ for some integer $k$. Then we have $n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1$. This implies that $n^2$ is odd. This contradicts the fact that $n^2$ is even. Therefore, if $n$ is a natural number and $n^2$ is even, then $n$ is even.

### 4. Proof by cases

This technique is usefull when we are able to construct a partition for the problem. We then prove that the statement is true for each case.

>Example: Prove that every natural number is either even or odd.

Proof: We can partition the natural numbers into two sets: the even numbers and the odd numbers. We then prove that the statement is true for each case.

### 5. Proof by construction

This technique is usefull when we are able to construct a concrete example that satisfies the statement.

>Example: Prove that there is a prime number between $n$ and $2n$ for any natural number $n$.