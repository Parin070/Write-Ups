# PW Crack 2

**Category:** Reverse Engineering
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

Same setup as PW Crack 1 — a Python script XOR-decrypts a flag file using a hardcoded password. This time the password is obfuscated as hex character codes instead of a plain string.

## Solution

Read the script's source:

```bash
cat level2.py
```

Key part of the code:

```python
def level_2_pw_check():
    user_pw = input("Please enter correct password for flag: ")
    if( user_pw == chr(0x34) + chr(0x65) + chr(0x63) + chr(0x39) ):
        print("Welcome back... your flag, user:")
        decryption = str_xor(flag_enc.decode(), user_pw)
        print(decryption)
        return
    print("That password is incorrect")
```

The password is built from `chr()` calls on hex values instead of being written as a literal string:

```
0x34 = '4'
0x65 = 'e'
0x63 = 'c'
0x39 = '9'
```

Concatenated together: `4ec9`.

Ran the script and entered the decoded password:

```bash
python level2.py
```

```
Please enter correct password for flag: 4ec9
Welcome back... your flag, user:
picoCTF{tr45h_51ng1ng_9701e681}
```

## Flag

```
picoCTF{tr45h_51ng1ng_9701e681}
```

## Takeaway

Simple obfuscation like `chr(0x..)` chains is easy to decode by hand — just convert each hex value to its ASCII character and concatenate. Don't let a slightly dressed-up check look harder than it is.
