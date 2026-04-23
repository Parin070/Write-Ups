# Bandit: Level 1 → Level 2

## Level Information
**Goal:** Find the password for the next level stored in a file called `-` located in the home directory.

---

## Commands Used
```bash
# Log in to the server
ssh bandit1@bandit.labs.overthewire.org -p 2220

# List files in the current directory
ls

# Read the file with a dashed filename using a relative path
cat ./-
```

---

## Approach
1.  **Logging In:** Accessed the level using the username `bandit1` and the password found previously.

2.  **The Problem:** Running `ls` showed a file named `-`. Typically, in Linux, the dash character `-` is used to represent stdin (Standard Input) or to denote the start of command-line arguments/flags.

3.  **The Solution:** If I were to run `cat -`, the program would simply wait for me to type something. To tell the shell that I am referring to a specific file named `-` in the current folder, I used the relative path prefix `./`.

---

## Proof of Learning
* **Relative Pathing:** Learned that `./` refers to the current working directory. Using `./-` explicitly tells the command to look for a file rather than an argument.

* **Special Characters:** Discovered that certain filenames can be "tricky" if they overlap with shell operators, and providing the path is a standard way to bypass this.

**Next Level Password:** `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`

---

## Important Note on Passwords
⚠️ The passwords for OverTheWire levels are frequently updated or rotated.
The password I found (263JGJPfgU6LtdEvgfWU1XP5yac29mFx) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

## Key Takeaways
* Filenames consisting of special characters require specific path references to be read correctly.

* `cat ./-` is the most common way to read a file named exactly `-`.
