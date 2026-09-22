# interencdec

**Category:** Cryptography
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A file contains data that's been encoded/encrypted in multiple layers. Need to peel each layer back to recover the flag.

## Solution

Read the file:

```bash
cat enc_flag
```

Output:
```
YidkM0JxZGtwQlRYdHFhR3g2YUhsZmF6TnFlVGwzWVROclgyZzBOMm8yYXpZNWZRPT0nCg==
```

### Layer 1 — Base64 decode

```bash
echo "YidkM0JxZGtwQlRYdHFhR3g2YUhsZmF6TnFlVGwzWVROclgyZzBOMm8yYXpZNWZRPT0nCg==" | base64 -d
```

Result:
```
b'd3BqdkpBTXtqaGx6aHlfazNqeTl3YTNrX2g0N2o2azY5fQ=='
```

Still base64-looking data wrapped in a Python bytes-string literal (`b'...'`).

### Layer 2 — Base64 decode again

Stripped the `b'...'` wrapper and decoded the inner base64 string:

```bash
echo "d3BqdkpBTXtqaGx6aHlfazNqeTl3YTNrX2g0N2o2azY5fQ==" | base64 -d
```

Result:
```
wpjvJAM{jhlzhy_k3jy9wa3k_h47j6k69}
```

This looks like a `flag{...}`-style string but scrambled — a Caesar cipher.

### Layer 3 — Caesar cipher decode

Brute-forced shift values and found shift **19** produces readable text:

```
picoctf{caesar_d3cr9pt3d_a47c6d69}
```

## Flag

```
picoctf{caesar_d3cr9pt3d_a47c6d69}
```

## Takeaway

Multi-layer encoding challenges just require peeling back one transformation at a time — identify each layer by its shape (base64 looks like `A-Za-z0-9+/=`, Caesar output looks like a scrambled word with recognizable structure like `{...}` brackets) and decode in sequence until plaintext appears.
