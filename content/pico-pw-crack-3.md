# PW Crack 3

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

Same XOR-decryption setup as prior PW Crack levels, but this time the password isn't hardcoded directly — instead the script compares the MD5 hash of user input against a hash loaded from `level3.hash.bin`. The script also lists 7 candidate passwords, only one of which is correct.

## Solution

Downloaded all three required files into the same directory: `level3.py`, `level3.flag.txt.enc`, and `level3.hash.bin`.

Read the script's source:

```bash
cat level3.py
```

Key parts of the code:

```python
correct_pw_hash = open('level3.hash.bin', 'rb').read()

def hash_pw(pw_str):
    pw_bytes = bytearray()
    pw_bytes.extend(pw_str.encode())
    m = hashlib.md5()
    m.update(pw_bytes)
    return m.digest()

def level_3_pw_check():
    user_pw = input("Please enter correct password for flag: ")
    user_pw_hash = hash_pw(user_pw)
    if( user_pw_hash == correct_pw_hash ):
        ...

# The strings below are 7 possibilities for the correct password.
#   (Only 1 is correct)
pos_pw_list = ["8799", "d3ab", "1ea2", "acaf", "2295", "a9de", "6f3d"]
```

The script reveals 7 candidate passwords in a comment at the bottom, and the real password check is an MD5 hash comparison against `level3.hash.bin`. Rather than guessing manually, wrote a small brute-force script to test each candidate:

```python
import hashlib

correct_pw_hash = open('level3.hash.bin', 'rb').read()
pos_pw_list = ["8799", "d3ab", "1ea2", "acaf", "2295", "a9de", "6f3d"]

for pw in pos_pw_list:
    if hashlib.md5(pw.encode()).digest() == correct_pw_hash:
        print("Password found:", pw)
```

Ran it:

```bash
python crack.py
```

```
Password found: 2295
```

Used the recovered password on the original script:

```bash
python level3.py
```

```
Please enter correct password for flag: 2295
Welcome back... your flag, user:
picoCTF{m45h_fl1ng1ng_6f98a49f}
```

## Flag

```
picoCTF{m45h_fl1ng1ng_6f98a49f}
```

## Takeaway

When a password check hashes user input and compares it to a stored hash, and the source leaks a short candidate list, brute-forcing that small list locally (hash each candidate, compare to the stored hash) is far faster than guessing through the program's prompt.
