# PW Crack 4

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

Same structure as PW Crack 3 — an MD5 hash comparison against `level4.hash.bin` — but this time the script leaks 100 candidate passwords instead of 7. Same brute-force approach still applies, just at a larger scale.

## Solution

Read the script's source:

```bash
cat level4.py
```

Same password-check logic as level 3:

```python
correct_pw_hash = open('level4.hash.bin', 'rb').read()

def hash_pw(pw_str):
    pw_bytes = bytearray()
    pw_bytes.extend(pw_str.encode())
    m = hashlib.md5()
    m.update(pw_bytes)
    return m.digest()

def level_4_pw_check():
    user_pw = input("Please enter correct password for flag: ")
    user_pw_hash = hash_pw(user_pw)
    if( user_pw_hash == correct_pw_hash ):
        ...
```

But this time the leaked candidate list at the bottom of the script has 100 entries instead of 7:

```python
pos_pw_list = ["6288", "6152", "4c7a", ..., "d964", "49ec"]  # 100 total
```

Reused the same brute-force script from level 3, just with the new candidate list:

```python
import hashlib

correct_pw_hash = open('level4.hash.bin', 'rb').read()
pos_pw_list = ["6288", "6152", "4c7a", ..., "d964", "49ec"]

for pw in pos_pw_list:
    if hashlib.md5(pw.encode()).digest() == correct_pw_hash:
        print("Password found:", pw)
```

Ran it:

```bash
python crack.py
```

```
Password found: 973a
```

Used the recovered password on the original script:

```bash
python level4.py
```

```
Please enter correct password for flag: 973a
Welcome back... your flag, user:
picoCTF{fl45h_5pr1ng1ng_ae0fb77c}
```

## Flag

```
picoCTF{fl45h_5pr1ng1ng_ae0fb77c}
```

## Takeaway

Brute-forcing a leaked candidate list scales fine even at 100 entries — MD5 hashing is fast, so checking every candidate locally takes a fraction of a second regardless of list size. Same script from PW Crack 3 worked here with zero changes to the logic.
