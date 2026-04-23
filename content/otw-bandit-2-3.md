## Bandit: Level 2 → Level 3

### **Level Information**
**Goal:** Find the password for the next level stored in a file called **spaces in this filename** located in the home directory.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit2@bandit.labs.overthewire.org -p 2220

# List files in the current directory
ls

# Read the file using the -- separator and quotes
cat -- '--spaces in this filename--'
```

---

### **Approach**
1.  **Logging In:** I accessed the level using the username `bandit2` and the password `263JGJPfgU6LtdEvgfWU1XP5yac29mFx`.

2.  **The Challenge:** The file `spaces in this filename` contains multiple spaces. Additionally, when dealing with "difficult" filenames, it's good practice to ensure the command doesn't misinterpret the filename as an option.

3.  **The Solution:** I used the `cat -- 'filename'` syntax. 
    * The `' '` (quotes) handle the spaces so the shell sees one file instead of four.
    * The `--` (double dash) tells `cat` to stop looking for command-line flags and treat everything else as a literal filename. This is a "safety first" approach that prevents errors if a filename starts with a dash.

---

### **Proof of Learning**
* **The End-of-Options Operator (`--`):** Learned that `--` is a special operator used by many Bash built-ins and standard commands to signal the end of command options. Anything after it is treated strictly as a filename or argument.

* **Quoting Strings:** Reinforced that wrapping a filename in single or double quotes allows for the inclusion of spaces without breaking the command.

**Next Level Password:** `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* The `--` separator is a powerful tool when working with filenames that might be confused with command flags.
* Combining `--` with quotes is the most robust way to ensure a file is read correctly regardless of its naming convention.