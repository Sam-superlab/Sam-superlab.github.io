---
layout: page
permalink: /blogs/Graphs-to-mem/index.html
title: Reading Graphs in Physics
description: How to interpret gradients and areas under force and acceleration graphs.
---
{% include mathjax.html %}

# Reading Graphs in Physics

Before interpreting a graph, identify the quantity on each axis, its units, and any scale factors. The axes determine what the gradient and the area represent.

## Gradients

For a graph of $$y$$ against $$x$$, the average rate of change over an interval is

$$
\frac{\Delta y}{\Delta x}.
$$

The instantaneous rate of change is the tangent's gradient, $$dy/dx$$.

For example, the gradient of a momentum–time graph is the net force:

$$
F_{\mathrm{net}}=\frac{dp}{dt}.
$$

Over a time interval, $$\Delta p/\Delta t$$ gives the average net force. Always check the units: momentum divided by time has the units of force.

## Force Against Displacement

In one-dimensional motion, the signed area under a force–displacement graph is the work done by that force:

$$
W=\int_{x_1}^{x_2}F(x)\,dx.
$$

Use the force component along the direction of displacement. Areas below the horizontal axis contribute negative work.

## Acceleration Against Displacement

For one-dimensional motion with constant mass, the signed area under an acceleration–displacement graph is net work per unit mass:

$$
\int_{x_1}^{x_2}a(x)\,dx
=\frac{W_{\mathrm{net}}}{m}
=\frac{v_2^2-v_1^2}{2}.
$$

Here the horizontal axis is displacement, not time. An acceleration–time graph instead gives the change in velocity through its signed area.

## Force Against Time

The signed area under a net force–time graph is the impulse, equal to the change in momentum:

$$
J=\int_{t_1}^{t_2}F_{\mathrm{net}}(t)\,dt=\Delta p.
$$

For a constant net force, this becomes $$J=F_{\mathrm{net}}\Delta t$$. For a varying force, use the integral or the average force over the interval.
