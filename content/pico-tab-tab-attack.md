# Tab, Tab, Attack

**Category:** General Skills
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A zip file with a deeply nested directory structure hides a binary. Point is to use tab-completion instead of typing the full path.

## Solution

Downloaded and unzipped the provided archive:

```bash
unzip Addadshashanammu.zip
```

This extracted a long chain of nested folders, each with an obscure name:

```
Addadshashanammu/Almurbalarammi/Ashalmimilkala/Assurnabitashpi/Maelkashishi/Onnissiralis/Ularradallaku/
```

Inside the final folder were two files:

```
fang-of-haynekhtnamet.c
fang-of-haynekhtnamet
```

Rather than typing out the whole path manually, used shell tab-completion to autofill each directory name and reach the binary quickly.

Ran the executable:

```bash
Addadshashanammu/Almurbalarammi/Ashalmimilkala/Assurnabitashpi/Maelkashishi/Onnissiralis/Ularradallaku/fang-of-haynekhtnamet
```

Output:
```
*ZAP!* picoCTF{l3v3l_up!_t4k3_4_r35t!_fc588427}
```

## Flag

```
picoCTF{l3v3l_up!_t4k3_4_r35t!_fc588427}
```

## Takeaway

Tab-completion is your friend when navigating deep or awkwardly-named directory trees — no need to type long paths by hand.
