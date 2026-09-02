# 2WARM — PicoCTF

**Category:** General Skills
**Difficulty:** Very Easy

## Challenge

Convert decimal `42` (base 10) to binary (base 2).

## Process

Convert decimal `42` to binary:

- `32 + 8 + 2 = 42`
- Powers of 2: `32 (2⁵) + 8 (2³) + 2 (2¹)`
- Binary representation: `101010`

Via Python / CLI:

```bash
python3 -c "print(bin(42)[2:])"
# Output: 101010
```

## Flag

```
picoCTF{101010}
```

## Takeaway

Basic decimal to binary conversion. Binary is the foundational number system for computer architecture, low-level memory, and bitwise operations.
