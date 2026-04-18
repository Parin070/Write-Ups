# Digital Forensics Challenge: Thato’s Stories

## Case Study: Multi-Artifact Forensic Investigation

**Target Environment:** Forensic image zip file containing administrative, image, and web development directories.

## Mission Objective
The objective was to identify and preserve four distinct pieces of electronic evidence hidden within a complex directory structure. The investigation required applying the order of volatility, maintaining a chain of custody, and utilizing forensic tools to uncover data hidden through encryption, file extension manipulation, and steganographic techniques.

---

### **⚠️ Disclaimer & Technical Setup**
**Legal Notice:** This investigation was conducted for educational purposes within a controlled legal environment. 
**Technical Stack:** Forensic analysis was conducted using a **Linux environment** utilizing tools such as `tree`, `fcrackzip`, `strings`, `file`, and `head`.

![Initial environment setup and theoretical phase](content/assets/sbt_forensics/initial-environment-setup.png)

---

## Phase 1: Directory Traversal & Hidden File Discovery
The investigation began by analyzing the directory structure to locate hidden components. A simple list was insufficient, so I utilized `tree -a` to reveal hidden files and directories across the workspace.

![Initial directory listing](content/assets/sbt_forensics/initial-directory-listing.png)
![Revealing hidden files with tree -a](content/assets/sbt_forensics/revealing-hidden-files.png)

---

## Phase 2: [Evidence 1/4] Employee Information
While analyzing the **.test** directory proved it was a diversion, further inspection of the **/to-do/** directory revealed a hidden zip file.

1.  **Identification:** Located a hidden zip file named `a0415ns.zip` within the `/to-do/` directory.
2.  **Decryption:** Utilized `fcrackzip` to recover the password and unlock the archive.
3.  **Extraction:** The recovered artifact contained sensitive **Employee information**.

![Hidden zip file discovery in to-do](content/assets/sbt_forensics/hidden-zip-discovery.png)
![Recovering zip password](content/assets/sbt_forensics/recovering-zip-password.png)
![Extracting Evidence 1/4](content/assets/sbt_forensics/extracting-evidence-1.png)

---

## Phase 3: [Evidence 2/4] Employee Passwords
Following clues from saved emails regarding a "form," I shifted the investigation to the **/Images/** folder to look for embedded data.

1.  **Strings Analysis:** Ran `strings Form1.jpg` to identify interesting data embedded in image metadata.
2.  **File Verification:** Examined suspicious files and identified `laptop.jpg` as the primary carrier within the `/Images/` directory.
3.  **Extraction:** This file contained a hidden document listing **employee passwords**.

![Analyzing saved emails for leads](content/assets/sbt_forensics/analyzing-saved-emails.png)
![Using strings on Form1.jpg](content/assets/sbt_forensics/using-strings-on-form1.png)
![Images directory overview](content/assets/sbt_forensics/images-directory-overview.png)
![Locating the passwords document](content/assets/sbt_forensics/locating-passwords-document.png)
![Evidence 2 result: Passwords list](content/assets/sbt_forensics/evidence-2-passwords-list.png)

---

## Phase 4: [Evidence 3/4] Office Locations
The third piece of evidence was located by investigating administrative files within the **Weekly Meeting Notes**.

1.  **Anomaly Detection:** Inside the `/Week 10/` directory, the file `posidon.xml` appeared suspicious.
2.  **MIME Identification:** Running `file *` confirmed that `posidon.xml` was actually a **PNG image** file disguised with an XML extension.
3.  **Discovery:** Opening the image revealed critical **Office locations**.

![Running file command in Week 10](content/assets/sbt_forensics/running-file-command.png)
![Viewing the disguised PNG image](content/assets/sbt_forensics/viewing-disguised-png.png)

---

## Phase 5: [Evidence 4/4] Colin Information
The final investigation phase focused on the **Web Dev work** directory.

1.  **Directory Inspection:** While reviewing the **/css/** directory, I noticed `bootstrap.min.abc` had a non-standard extension.
2.  **Data Extraction:** Utilizing the `head` command allowed me to bypass the extension and view the raw file contents.
3.  **Result:** This file contained specific **Colin information**.

![Inspecting the CSS directory](content/assets/sbt_forensics/inspecting-css-directory.png)
![Recovering the final evidence artifact](content/assets/sbt_forensics/recovering-final-evidence.png)

---

## Final Intelligence Report (Q&A)

### General Forensic Questions

| # | Question | Answer |
| :--- | :--- | :--- |
| **1** | **When considering the order of volatility, which is the MOST volatile form of evidence?** | Cache |
| **2** | **What is the Chain of Custody in regard to digital forensics?** | Paper trail for evidence that shows where it has been, and who has been in possession of it. |
| **3** | **An employee is under investigation, and you are sent to look at his laptop. You discover that it is locked, but you have the user’s password to unlock it. What should you do next?** | Wait for the user and get them to sign-in |
| **4** | **Can social-media posts be counted as a form of electronic evidence?** | Yes |
| **5** | **Which one of the following evidence types holds the most value in court?** | Real Evidence |
| **6** | **When cracking ZIP passwords using fcrackzip, what is the flag used to conduct a brute force attack, with lowercase letters and numbers?** | `-b -c a1` |
| **7** | **Digital Forensics entails…** | The identification, preservation, and analysis of evidence found on electronic devices. |
| **8** | **What does HTCIA stand for in regard to Digital Forensics?** | High Technology Crime Investigation Association |
| **9** | **Computer Forensics and Data Recovery are the same thing, true or false?** | False |
| **10** | **Corporate Policies can dictate which of the following?** | All of the Above |

### Practical Challenge Questions

| # | Question | Answer |
| :--- | :--- | :--- |
| **E1.1** | **What is the name of the file where the evidence was found? (filename and extension)** | `a0415ns.zip` |
| **E1.2** | **What is the name of the directory where this evidence was found?** | `/to-do/` |
| **E1.3** | **What piece of evidence have you found?** | Employee information |
| **E2.1** | **What is the name of the file where the evidence was found? (filename and extension)** | `laptop.jpg` |
| **E2.2** | **What is the name of the directory where this evidence was found?** | `/Images/` |
| **E2.3** | **What piece of evidence have you found?** | List of employee passwords |
| **E3.1** | **What is the name of the file where the evidence was found? (filename and extension)** | `posidon.xml` |
| **E3.2** | **What is the name of the directory where this evidence was found?** | `/Week 10/` |
| **E3.3** | **What piece of evidence have you found?** | Office locations |
| **E4.1** | **What is the name of the file where the evidence was found? (filename and extension)** | `bootstrap.min.abc` |
| **E4.2** | **What is the name of the directory where this evidence was found?** | `/css/` |
| **E4.3** | **What piece of evidence have you found?** | Colin information |

---
**Mission Outcome:** Full digital forensic profile successfully reconstructed. All four primary evidence artifacts were recovered and verified using industry-standard analysis techniques.