# Neuron Meet 0 — Academy

**Category:** AI Foundations
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Challenge

A black-box 1D perceptron is exposed over the network. You send a number within [-10.0, 10.0] and it returns 0 (quiet) or 1 (fires), following the rule `w*x + b >= 0 -> 1, else 0`. The same number can't be sent twice in a row. The goal is to make the last 8 outputs read `01110000`, which is ASCII `p`.

## Process

Launch the instance and connect. Since the internal weights are hidden, I probed the neuron with a couple of inputs to locate the decision boundary.

| Input | Output |
|-------|--------|
| 1     | 0      |
| 2     | 1      |

The boundary sits between 1 and 2. Anything at or below 1 stays quiet, anything at or above 2 fires.

The target pattern is `0 1 1 1 0 0 0 0`, so I picked safe values on each side of the boundary:

- Fire side: 2, 3, 4
- Quiet side: 1, -2

Because back-to-back repeats aren't allowed, I alternated between 1 and -2 for the trailing zeros.

Inputs sent:

```
1, 2, 3, 4, 1, -2, 1, -2
```

Outputs:

```
0 1 1 1 0 0 0 0
```

The server confirmed the pattern match and returned the flag.

## Flag

```
academy{n3ur0n_m3t_e231b9ca}
```

## Takeaway

A perceptron is a linear threshold unit: a single boundary splits the input space into two classes. By probing the black box, you can find that boundary and then control the output at will. Binary search over the allowed range finds the boundary quickly. The same idea underlies model probing and evasion attacks in AI security.
