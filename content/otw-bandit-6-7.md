## Bandit: Level 6 → Level 7

### **Level Information**
**Goal:** Find a file hidden somewhere on the server that is owned by user **bandit7**, owned by group **bandit6**, and is **33 bytes** in size.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit6@bandit.labs.overthewire.org -p 2220

# Search the entire root directory with specific ownership and size filters
# 2>/dev/null hides 'Permission Denied' errors
find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null

# Read the file found at the revealed path
cat /var/lib/dpkg/info/bandit7.password
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit6` and the password `HWasnPhtq9AVKe0dmk45nxy20cvUa6EG`.

2.  **The Challenge:** Unlike previous levels, the file isn't in the home directory. It is "somewhere on the server," requiring a search from the root (`/`).

3.  **Refining the Search:**
    * Initial attempts with `find /` produced a massive amount of "Permission Denied" errors because a standard user cannot access every system folder.
    * **The Solution:** I used `2>/dev/null` to redirect **Standard Error (stderr)** to the "null device," effectively silencing all error messages and only displaying the successful match.

4.  **Discovery:** The search identified the path `/var/lib/dpkg/info/bandit7.password`.

---

### **Proof of Learning**
* **Root Level Searching:** Learned to use `find /` to search the entire filesystem rather than just the current directory.

* **Ownership Filters:** Used `-user` and `-group` flags to locate files based on specific Linux permission metadata.

* **Error Redirection:** Mastered the use of `2>/dev/null` to clean up terminal output by suppressing permission errors.

**Next Level Password:** `morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* Redirecting errors to `/dev/null` is a crucial skill for system administration and security auditing to find relevant data quickly.
* The `find` command can filter by almost any attribute, including specific user and group ownership.