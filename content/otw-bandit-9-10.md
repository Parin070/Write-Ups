## Bandit: Level 9 → Level 10

### **Level Information**
**Goal:** Find the password for the next level stored in the file **data.txt** in one of the few human-readable strings, preceded by several '=' characters.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit9@bandit.labs.overthewire.org -p 2220

# Extract human-readable strings and filter for the '=' character
strings data.txt | grep "="
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit9` and the password `4CKMh1JI91bUIZZPXDqGanal4xvAg0JM`.

2.  **The Challenge:** The file `data.txt` is a binary file. If you try to `cat` it, the terminal will display unreadable symbols and might even break your session formatting.

3.  **The Solution:** I used the `strings` command.
    * `strings`: Scans the binary file and extracts sequences of printable characters that are at least 4 characters long.
    * `grep "="`: Filtered those strings to find the ones containing the `=` sign, as hinted in the level description.

4.  **Discovery:** The output showed several lines of equal signs, eventually leading to the phrase "the password is" followed by the actual password.

---

### **Proof of Learning**
* **The `strings` Command:** Learned how to extract meaningful text from binary or data files that are otherwise unreadable by standard text editors.

* **Binary Analysis:** Understood that even in compiled or data-heavy files, plaintext information (like hardcoded keys or passwords) can often be found using basic forensic tools.

* **Pattern Matching:** Combined `strings` with `grep` to quickly sift through the printable output for specific markers.

**Next Level Password:** `FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* Never `cat` a binary file; use `strings` to see if there is any human-readable information hidden inside.
* `strings` is a fundamental tool for basic reverse engineering and digital forensics.