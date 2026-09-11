# Python Wrangling

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

Given a Python script `ende.py`, a `password.txt`, and an encrypted `flag.txt.en`. Need to run the script correctly to decrypt the flag.

## Solution

First checked the script's usage instructions:

```bash
python ende.py -h
```

Output:
```
Usage: ende.py (-e/-d) [file]
Examples:
  To decrypt a file named 'pole.txt', do: '$ python ende.py -d pole.txt'
```

So the script takes an `-e` (encrypt) or `-d` (decrypt) flag followed by a filename, and presumably prompts for a password.

Checked the contents of `password.txt`:

```bash
cat password.txt
```

Output:
```
720b6ad346f84cd483c60c7464dd95d4
```

Ran the script in decrypt mode on the encrypted flag file:

```bash
python ende.py -d flag.txt.en
```

When prompted for the password, entered the string from `password.txt`:

```
Please enter the password: 720b6ad346f84cd483c60c7464dd95d4
```

This decrypted the file and printed the flag:

```
picoCTF{4p0110_1n_7h3_h0us3_9c5f9bcf}
```

## Flag

```
picoCTF{4p0110_1n_7h3_h0us3_9c5f9bcf}
```

## Takeaway

Check a script's help/usage output first (`-h`) to understand how to invoke it. Supporting files like `password.txt` are often exactly what a script expects when prompted for credentials.
