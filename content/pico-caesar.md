# caesar

**Category:** Cryptography
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

A message is encrypted with a Caesar cipher (simple letter-shift substitution). Need to find the shift and decrypt it to recover the flag.

## Solution

Read the encrypted message:

```bash
cat data.enc
```

Output:
```
picoCTF{gvswwmrkxlivyfmgsrfuppobuf}
```

Brute-forced all 25 possible shift values (Caesar cipher only has 26 total, one being no shift) and checked which one produced readable English inside the `picoCTF{...}` wrapper.

Shift of **22** produced the correct plaintext:

```
picoCTF{crossingtherubiconbqllkxqb}
```

## Flag

```
picoCTF{crossingtherubiconbqllkxqb}
```

## Takeaway

Caesar ciphers only have 25 possible shifts, so brute-forcing every shift and eyeballing (or scripting a dictionary check) for readable output is trivial — no need for frequency analysis or fancy tools. Rated "Medium" here, but in practice one of the easiest crypto challenges once you know it's Caesar.
