## Bandit: Level 5 → Level 6

### **Level Information**
**Goal:** Find a file under the `inhere` directory that is human-readable, 1033 bytes in size, and not executable.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit5@bandit.labs.overthewire.org -p 2220

# Navigate to the target directory
cd inhere

# Search for the file based on specific properties
find . -type f -size 1033c ! -executable -exec file '{}' \;

# Read the discovered file
cat ./maybehere07/.file2
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit5` and the password `4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw`.

2.  **Advanced Search:** Used the `find` command to filter through the numerous subdirectories in `inhere`.

3.  **Command Breakdown:**
    * `.`: Searches the current directory and all subfolders.
    * `-type f`: Limits the search to regular files.
    * `-size 1033c`: Filters for a size of exactly 1033 bytes.
    * `! -executable`: Excludes files that have execute permissions.
    * `-exec file '{}' \;`: Runs the `file` command on each result to confirm it is human-readable (ASCII text).

4.  **Discovery:** The search identified `./maybehere07/.file2` as the only match.

---

### **Proof of Learning**
* **Metadata Filtering:** Mastered using `find` with specific flags for file type, size, and permissions.

* **Logical Negation:** Used `!` to filter out unwanted file attributes.

* **In-line Execution:** Used `-exec` to pass search results into secondary tools for immediate verification.

**Next Level Password:** `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**HWasnPhtq9AVKe0dmk45nxy20cvUa6EG**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* The `find` command is the standard for granular data discovery in a Linux filesystem.
* Combining `find` with `file` allows for rapid identification of human-readable content in massive directories.