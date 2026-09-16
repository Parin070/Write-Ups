# convertme.py

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A Python script asks the user to convert a random decimal number into binary. Answering correctly triggers XOR-decryption of an embedded encrypted flag.

## Solution

Read the script's source:

```bash
cat convertme.py
```

Key logic:

```python
num = random.choice(range(10,101))
print('If ' + str(num) + ' is in decimal base, what is it in binary base?')
ans = input('Answer: ')
ans_num = int(ans, base=2)
if ans_num == num:
    flag = str_xor(flag_enc, 'enkidu')
    print('That is correct! Here\'s your flag: ' + flag)
```

The script picks a random decimal number between 10–100 and asks for its binary equivalent. Entering the correct binary value triggers the flag to print.

Ran the script:

```bash
python convertme.py
```

```
If 76 is in decimal base, what is it in binary base?
```

Converted 76 to binary using Python:

```python
>>> bin(76)
'0b1001100'
```

Dropping the `0b` prefix gives `1001100`. Entered that as the answer:

```
Answer: 1001100
That is correct! Here's your flag: picoCTF{4ll_y0ur_b4535_762f748e}
```

## Flag

```
picoCTF{4ll_y0ur_b4535_762f748e}
```

## Takeaway

Python's built-in `bin()` function makes quick work of decimal-to-binary conversion — just strip the `0b` prefix from the result. Reading the source first confirms exactly what format the answer needs to be in (here, `int(ans, base=2)` means a plain binary string with no prefix).
