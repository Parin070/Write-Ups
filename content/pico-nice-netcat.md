# Nice netcat...

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

There is a nice program that you can talk to by using netcat, but it outputs a sequence of decimal ASCII values instead of plain text.

## Solution

Connected to the remote service using `nc`:

```bash
nc wily-courier.picoctf.net 57246
```

Output received:

```
112 
105 
99 
111 
67 
84 
70 
123 
103 
48 
48 
100 
95 
107 
49 
116 
116 
121 
33 
95 
110 
49 
99 
51 
95 
107 
49 
116 
116 
121 
33 
95 
100 
57 
52 
55 
54 
125 
10 
```

The output consists of decimal ASCII codes printed line by line. Converted each number to its corresponding ASCII character using Python:

```python
nums = [112, 105, 99, 111, 67, 84, 70, 123, 103, 48, 48, 100, 95, 107, 49, 116, 116, 121, 33, 95, 110, 49, 99, 51, 95, 107, 49, 116, 116, 121, 33, 95, 100, 57, 52, 55, 54, 125, 10]
print(''.join(chr(n) for n in nums))
```

Or by piping netcat output directly into a Python one-liner:

```bash
nc wily-courier.picoctf.net 57246 | python3 -c "import sys; print(''.join(chr(int(line)) for line in sys.stdin if line.strip()))"
```

Output:

```
picoCTF{g00d_k1tty!_n1c3_k1tty!_d9476}
```

## Flag

```
picoCTF{g00d_k1tty!_n1c3_k1tty!_d9476}
```

## Takeaway

Services streaming raw numbers over netcat often output decimal, hex, or binary byte representations of text. Decoding decimal ASCII values with `chr()` in Python or piping the stream directly to a script quickly reconstructs the original string.
