# PW Crack 5

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

Same MD5-hash password check as prior levels, but this time no candidate list is embedded in the script. Instead, a separate `dictionary.txt` wordlist is provided containing all possible passwords based on the conventions seen in earlier levels.

## Solution

Downloaded all required files into the same directory: `level5.py`, `level5.flag.txt.enc`, `level5.hash.bin`, and `dictionary.txt`.

Same password-check logic as previous levels — MD5 hash of user input compared against `level5.hash.bin`. This time, instead of a hardcoded list, wrote a script to read candidates from the dictionary file line by line:

```python
import hashlib

correct_pw_hash = open('level5.hash.bin', 'rb').read()

with open('dictionary.txt') as f:
    for line in f:
        pw = line.strip()
        if hashlib.md5(pw.encode()).digest() == correct_pw_hash:
            print("Password found:", pw)
            break
```

Ran it:

```bash
python crack.py
```

```
Password found: eee0
```

Used the recovered password on the original script:

```bash
python level5.py
```

```
Please enter correct password for flag: eee0
Welcome back... your flag, user:
picoCTF{h45h_sl1ng1ng_fffcda23}
```

## Flag

```
picoCTF{h45h_sl1ng1ng_fffcda23}
```

## Takeaway

Same brute-force principle as previous levels, just reading candidates from a file instead of a hardcoded list. `strip()` each line to remove trailing newlines before hashing, or the comparison will always fail.
