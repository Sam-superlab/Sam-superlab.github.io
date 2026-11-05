---
layout: page
permalink: /blogs/Some-notes-on-Graph-theory-proof/index.html
title: Notes on Graph Theory Proofs
description: Examples of induction, contradiction, construction, and extremal arguments in graph theory.
---
{% include mathjax.html %}

# Notes on Graph Theory Proofs

These notes concern finite, simple, undirected graphs. A graph $$G=(V,E)$$ consists of a vertex set and an edge set. It is connected if every pair of vertices can be joined by a path. The degree $$\deg(v)$$ is the number of edges incident to $$v$$.

## 1. Induction on Vertices or Edges

Example: Every tree with $$n\ge1$$ vertices has exactly $$n-1$$ edges.

Proof: A one-vertex tree has no edges. For the inductive step, let $$T$$ be a tree with $$n\ge2$$ vertices. Choose a simple path of maximum length. An endpoint cannot have a neighbor outside the path, because that would extend it, or a neighbor elsewhere on the path other than the next vertex, because that would create a cycle. Thus the endpoint is a leaf.

Remove this leaf and its incident edge. The remaining graph is connected and has no cycles, so it is a tree on $$n-1$$ vertices. By induction it has $$n-2$$ edges. Restoring the removed edge gives $$n-1$$ edges in $$T$$.

## 2. Proof by Contradiction

Example: A tree has exactly one simple path between any two distinct vertices.

Proof: Connectivity supplies at least one path. Suppose there were two distinct simple paths between the same vertices. Starting at their first divergence and following them until their next meeting produces a cycle. A tree has no cycles, so two such paths cannot exist.

## 3. Proof by Construction

Example: For every $$n\ge3$$, there is a graph on $$n$$ vertices that is $$2$$-connected but not $$3$$-connected.

A graph is $$k$$-connected if it has more than $$k$$ vertices and remains connected after deleting any set of fewer than $$k$$ vertices.

Proof: Choose the cycle $$C_n$$. Deleting any one vertex leaves a path, so $$C_n$$ is $$2$$-connected. For $$n\ge4$$, deleting two nonadjacent vertices separates the remaining vertices into two nonempty paths, so $$C_n$$ is not $$3$$-connected. For $$n=3$$, the graph has only three vertices and therefore fails the size requirement for $$3$$-connectivity.

Deleting two adjacent vertices from a cycle leaves a connected path; it does not provide the required disconnection.

## 4. Extremal Arguments

Choose an object that maximizes or minimizes a useful quantity, then use that choice to constrain the graph.

Example: In any nonempty finite graph, there is a vertex $$v$$ such that at least half its neighbors have degree at most $$\deg(v)$$.

Proof: Choose a vertex of maximum degree. Every neighbor has degree at most $$\deg(v)$$, so all its neighbors satisfy the condition. The statement also holds if the vertex is isolated.

Longest simple paths, shortest cycles, and vertices of maximum or minimum degree are common starting points. Be precise about the object: in a graph with a cycle, walks can be arbitrarily long, so a “longest walk” need not exist.

## 5. Two Useful Counting Results

### Handshaking Lemma

For a finite graph,

$$
\sum_{v\in V}\deg(v)=2|E|.
$$

Count incidences between vertices and edges. Each edge has two endpoints and therefore contributes two to the degree sum.

### Euler's Formula

For a connected graph embedded in the plane, let $$v$$, $$e$$, and $$f$$ denote its numbers of vertices, edges, and faces, including the unbounded face. Then

$$
v-e+f=2.
$$

Proof strategy: If the graph is a tree, then $$e=v-1$$ and $$f=1$$. Otherwise, remove an edge on a cycle. This preserves connectivity and merges its two incident faces, decreasing both $$e$$ and $$f$$ by one. Repeat until a tree remains. Each removal preserves $$v-e+f$$, so the tree case establishes the formula.

## 6. A Proof Checklist

- State assumptions such as finiteness, simplicity, and connectivity.
- Check small graphs and boundary cases.
- Explain why a deletion or construction preserves the properties you need.
- Distinguish paths from walks and necessary conditions from sufficient ones.
- Draw examples to develop an argument, then justify the claim for every graph covered by the statement.
