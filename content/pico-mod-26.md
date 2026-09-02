# Mod 26 — PicoCTF

**Category:** Cryptography
**Difficulty:** Very Easy

## Challenge

Given ROT13 encoded text, decrypt it to retrieve the flag.

Ciphertext:
`cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_45559noq}`

## Process

The challenge title "Mod 26" references the modulo 26 arithmetic used in the ROT13 (Caesar cipher with a shift of 13).

ROT13 shifts each letter by 13 positions in the alphabet. Because the Latin alphabet contains 26 letters (2 × 13), ROT13 is reciprocal: applying it a second time restores the original plaintext.

Decoded via Linux command line using `tr`:

```bash
echo "cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_45559noq}" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

Alternatively via Python:

```python
import codecs
print(codecs.encode("cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_45559noq}", 'rot_13'))
```

## Flag

```
picoCTF{next_time_I'll_try_2_rounds_of_rot13_45559abd}
```

## Takeaway

ROT13 is a classic symmetric substitution cipher operating under modulo 26 arithmetic. It shifts letters by 13 places while keeping numbers, punctuation, and casing intact.
