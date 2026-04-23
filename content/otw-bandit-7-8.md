## Bandit: Level 7 → Level 8

### **Level Information**
**Goal:** Find the password for the next level stored in the file **data.txt** next to the word **millionth**.

---

### **Commands Used**
```bash
# Log in to the server
ssh bandit7@bandit.labs.overthewire.org -p 2220

# Search for the specific string within the data.txt file
grep "millionth" data.txt

# Alternative method using pipes
cat data.txt | grep "millionth"
```

---

### **Approach**
1.  **Logging In:** Accessed the level using the username `bandit7` and the password `morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj`.

2.  **The Challenge:** The file `data.txt` is a massive text file containing thousands of lines. Manually reading it to find one specific word is inefficient.

3.  **The Solution:** I used `grep`, a command-line utility for searching plain-text data sets for lines that match a regular expression.
    * By running `grep "millionth" data.txt`, the terminal filtered out every line except the one containing the target word and its associated password.

4.  **Discovery:** The output immediately revealed the password string located right next to the word "millionth."

---

### **Proof of Learning**
* **grep (Global Regular Expression Print):** Learned how to use `grep` to quickly extract specific information from large files.

* **Piping (`|`):** Practiced using the pipe operator to send the output of one command (`cat`) into another (`grep`).

* **Efficient Data Filtering:** Understood that searching for keywords is the fastest way to handle high-volume text logs.

**Next Level Password:** `dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc`

---

### **Important Note on Passwords**

The passwords for OverTheWire levels are frequently updated or rotated. The password I found (**dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc**) is specific to this session. You must follow the steps above in your own terminal to retrieve the current active password for your own "Proof of Learning."

---

### **Key Takeaways**
* `grep` is one of the most powerful tools in a Linux user's arsenal for searching through configuration files and logs.
* You can run `grep` directly on a file (`grep "text" file`) or pipe data into it (`cat file | grep "text"`).