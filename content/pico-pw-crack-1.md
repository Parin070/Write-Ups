# PW Crack 1

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A Python script decrypts a flag file using XOR, but only if the correct password is entered. Password is hardcoded in plaintext inside the script.

## Solution

Read the script's source:

```bash
cat level1.py
```

Key part of the code:

```python
def level_1_pw_check():
    user_pw = input("Please enter correct password for flag: ")
    if( user_pw == "8713"):
        print("Welcome back... your flag, user:")
        decryption = str_xor(flag_enc.decode(), user_pw)
        print(decryption)
        return
    print("That password is incorrect")
```

The password check is a plain string comparison against `"8713"`, hardcoded right in the source — no need to crack anything, just read it.

Ran the script and entered the password:

```bash
python level1.py
```

```
Please enter correct password for flag: 8713
Welcome back... your flag, user:
picoCTF{545h_r1ng1ng_1b2fd683}
```

The password itself doubles as the XOR key used to decrypt `level1.flag.txt.enc`.

## Flag

```
picoCTF{545h_r1ng1ng_1b2fd683}
```

## Takeaway

Always read the source first. When a password check is hardcoded in plaintext, there's nothing to "crack" — just use it directly.
