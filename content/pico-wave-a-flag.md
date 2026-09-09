# Wave a Flag

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

Connect to a remote webshell and run an unfamiliar binary to retrieve the flag.

## Solution

Connected to the challenge webshell and found an executable file named `warm` in the working directory.

First, made the file executable:

```bash
chmod +x warm
```

Ran it with no arguments to see default behavior:

```bash
./warm
```

Output:
```
Hello user! Pass me a -h to learn what I can do!
```

The program hinted at a `-h` flag, so ran it again:

```bash
./warm -h
```

This printed the help text along with the flag directly:

```
Oh, help? I actually don't do much, but I do have this flag here: picoCTF{b1scu1ts_4nd_gr4vy_ac5832c}
```

## Flag

```
picoCTF{b1scu1ts_4nd_gr4vy_ac5832c}
```

## Takeaway

Always check for a `-h` or `--help` flag on unknown binaries — sometimes the challenge just hands you the answer.
