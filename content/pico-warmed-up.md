# Warmed Up — PicoCTF

**Category:** General Skills
**Difficulty:** Very Easy

## Challenge

Convert hexadecimal `0x3D` (base 16) to decimal (base 10).

## Process

Convert hex value `0x3D` to base 10:

- `3` in the 16s place: `3 × 16¹ = 48`
- `D` in the 1s place (where D = 13 in hex): `13 × 16⁰ = 13`
- Sum: `48 + 13 = 61`

Via Python / CLI:

```bash
python3 -c "print(int('3D', 16))"
# Output: 61
```

## Flag

```
picoCTF{61}
```

## Takeaway

Basic base-16 (hexadecimal) to base-10 (decimal) conversion. Essential skill for working with memory addresses, byte values, and low-level data.
