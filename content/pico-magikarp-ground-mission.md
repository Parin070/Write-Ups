# Magikarp Ground Mission

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A basic shell navigation exercise. Connect over SSH and follow a trail of instructions across three locations — the home directory, root, and back home — collecting one piece of the flag at each stop.

## Solution

Connected to the remote container over SSH:

```bash
ssh ctf-player@wily-courier.picoctf.net -p 57145
```

Password: `8c606eb1`

### Part 1 — starting directory

```bash
ls
```

```
1of3.flag.txt  instructions-to-2of3.txt
```

```bash
cat 1of3.flag.txt
```

```
picoCTF{xxsh_
```

Read the instructions for the next step:

```bash
cat instructions-to-2of3.txt
```

```
Next, go to the root of all things, more succinctly `/`
```

### Part 2 — root directory

```bash
cd /
ls
cat 2of3.flag.txt
```

```
0ut_0f_//4t3r_
```

```bash
cat instructions-to-3of3.txt
```

```
Lastly, ctf-player, go home... more succinctly `~`
```

### Part 3 — home directory

```bash
cd ~
ls
cat 3of3.flag.txt
```

```
0b24fc4f}
```

### Assembling the flag

Concatenated all three pieces in order:

```
picoCTF{xxsh_ + 0ut_0f_//4t3r_ + 0b24fc4f}
```

## Flag

```
picoCTF{xxsh_0ut_0f_//4t3r_0b24fc4f}
```

## Takeaway

Basic shell navigation — `cd /` for root, `cd ~` for home directory — is enough to follow a multi-step trail across the filesystem. Always `cat` any instructions file left behind before moving on.
