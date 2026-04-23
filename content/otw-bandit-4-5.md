## Bandit: Level 4 → Level 5

### **Level Information**
**Goal:** Find the password for the next level stored in the only human-readable file in the **inhere** directory.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit4@bandit.labs.overthewire.org -p 2220

# Navigate to the target directory
cd inhere

# Identify the file type of all files starting with "-file"
file ./-file*

# Read the identified ASCII text file
cat ./-file07
```

---

### **Approach**
1.  **Logging In:** I accessed the level using the username `bandit4` and the password `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`.

2.  **The Challenge:** Inside the `inhere` directory, there are multiple files named with a leading dash (e.g., `-file00` to `-file09`). Most of these contain binary "data" that is not human-readable.

3.  **The Solution:** I used the `file` command combined with a wildcard `*`.
    * Using `./-file*` ensured the command correctly handled the leading dashes.
    * The `file` command inspects the file's content (magic bytes) to determine its type rather than relying on a file extension.

4.  **Discovery:** The output showed that `./-file07` was the only **ASCII text** file. I then used `cat` to read it and retrieve the password.

---

### **Proof of Learning**
* **The `file` Command:** Learned how to distinguish between binary data and human-readable text without having to manually open every file.

* **Wildcards (`*`):** Used the asterisk to perform an operation on multiple files simultaneously.

* **Filtering:** Understood that in security challenges, the "needle in the haystack" can often be found by filtering for specific metadata or file properties.

**Next Level Password:** `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* Use `file` when you are faced with many files of unknown origin to quickly identify which ones are text-based.
* Just like previous levels, prepending `./` is necessary when filenames begin with a dash to prevent the `file` or `cat` commands from erroring out.