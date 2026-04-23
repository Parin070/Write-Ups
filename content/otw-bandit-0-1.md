# Bandit: Level 0 → Level 1

## Level Information
**Goal:** Find the password for the next level stored in a file called `readme` located in the home directory.

---

## Commands Used
```bash
# Log in to the server (Password: bandit0)
ssh bandit0@bandit.labs.overthewire.org -p 2220

# List files in the current directory
ls

# Read the contents of the readme file
cat readme
```

---

## Approach
1.  **Logging In:** Connected to the OverTheWire server using SSH. The credentials for this entry level are `bandit0` for both the username and the password.

2.  **Exploring:** After the login banner appeared, I used `ls` to see what was in the home folder. The file `readme` was immediately visible.

3.  **Extraction:** I used the `cat` command to read the file. This printed the hash required to access the next level (`bandit1`).

---

## Proof of Learning
* **SSH (Secure Shell):** Practiced connecting to a remote host on a non-standard port (2220).

* **File Inspection:** Utilized `ls` to list directory contents and `cat` to concatenate/display file contents to the standard output.

* **Linux Fundamentals:** Confirmed that the first level of Linux security often involves simply knowing where to look and how to read basic files.

**Next Level Password:** `ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If`

---

## Important Note on Passwords
The passwords for OverTheWire levels are frequently updated or rotated.

The password I found during this session (ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If) may not work for you.

You must follow the steps above in your own terminal to retrieve the current active password for your session.

---

## Key Takeaways
* The password for the initial SSH connection is `bandit0`.
* In Linux, everything is a file; knowing how to list and read them is the most basic building block of CLI navigation.
