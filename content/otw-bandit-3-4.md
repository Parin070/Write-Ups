## Bandit: Level 3 → Level 4

### **Level Information**
**Goal:** Find the password for the next level stored in a hidden file in the **inhere** directory.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit3@bandit.labs.overthewire.org -p 2220

# Enter the target directory
cd inhere

# List all files, including hidden ones
ls -a

# Read the hidden file
cat ...Hiding-From-You
```

---

### **Approach**
1.  **Logging In:** I accessed the level using the username `bandit3` and the password `MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx`.

2.  **Navigation:** I used `cd inhere` to move into the directory mentioned in the level description.

3.  **The Challenge:** Running a standard `ls` returned no output, making the directory appear empty. In Linux, files that start with a dot (`.`) are considered **hidden files** and do not show up in normal directory listings.

4.  **The Solution:** I used `ls -a` (the "all" flag), which revealed the hidden file. I then used the `cat` command followed by the full filename (including the dot) to display the password.

---

### **Proof of Learning**
* **Hidden Files:** Learned that prefixing a filename with a period (`.`) hides it from standard view in the Linux filesystem.

* **ls Flags:** Practiced using `ls -a` to view all entries in a directory, including hidden files and the `.` (current) and `..` (parent) directory references.

* **Directory Traversal:** Used `cd` to navigate the folder hierarchy before performing file operations.

**Next Level Password:** `2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* `ls -a` is essential for finding configuration files or hidden data (like `.bashrc` or `.git` folders).
* If a directory looks empty but you suspect a "goal" is inside, always check for hidden files first.

