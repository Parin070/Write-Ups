# Introduction to Vulnerability Management

## Objective

To prove readiness for a Vulnerability Analyst position by conducting a full vulnerability assessment of Metasploitable 2 — an intentionally vulnerable system. The assessment was performed individually using Nessus on Kali Linux, with both systems hosted in virtual machines. Findings are documented in this report.

---

## Scan Details

| Field | Details |
|---|---|
| **Conducted By** | Parin |
| **Scanner IP (Kali VM)** | [VM — IP] |
| **Target IP** | 192.168.X.X |
| **Scan Started** | 2:53 PM |
| **Scan Finished** | 3:13 PM |
| **Total Vulnerabilities Identified** | 69 |

### Severity Breakdown

| Severity | Count |
|---|---|
| Critical | 10 |
| High | 6 |
| Medium | 24 |
| Low | 9 |
| Informational | 140 |

---

## Overview

Metasploitable 2 is an intentionally vulnerable system designed for security training. The Nessus scan revealed 69 vulnerabilities across all severity levels, with 10 critical, 6 high, 24 medium, and 9 low severity issues identified.

The critical vulnerabilities represent the most dangerous findings — these are actively exploitable with little to no effort. Services like vsftpd 2.3.4 and UnrealIRCd running on this system contain known backdoors that give an attacker instant remote shell access. Samba is running a vulnerable version exploitable via the usermap script, and PHP CGI injection allows remote code execution directly through the web server. Every single one of these has a public exploit and a Metasploit module.

The high severity findings include services running with default credentials such as PostgreSQL, and misconfigured services like distcc which allow remote code execution under certain conditions. These require slightly more effort but are still trivially exploitable by anyone with basic knowledge.

The medium and low severity findings mostly represent outdated software versions, weak configurations, and information disclosure issues that alone are not catastrophic but in combination with critical findings paint a picture of a completely unprotected system.

In summary, this system has no hardening whatsoever. Default credentials are unchanged, services are unpatched, backdoors are present, and no firewall rules exist. Any attacker with network access would fully compromise this machine within minutes. This is exactly why Metasploitable exists — as a safe legal target to practice real exploitation techniques.

---

## Top 5 Most Serious Security Issues

### 1. Canonical Ubuntu Linux 8.04 End of Life — CVSS 10

Operating system abandoned since 2013. No security patches ever again. Every vulnerability discovered since 2013 exists permanently with no fix. The entire system foundation is compromised. All other vulnerabilities on this system exist partly because of this underlying issue.

### 2. VNC Server 'password' Password — CVSS 10

VNC running with password literally set to "password." An attacker logs in remotely and gets full graphical desktop control. No exploitation required — just type the password. Complete system takeover in seconds.

### 3. Debian OpenSSH/OpenSSL Random Number Generator Weakness — CVSS 10

Cryptographic keys generated on this system are predictable. An attacker can brute force the private key from a tiny set of possible values. All encrypted SSH sessions and SSL certificates are worthless. Remote access is fully compromised.

### 4. Apache Tomcat End of Life (<= 5.5.x) — CVSS 10

Tomcat version 5.5 is abandoned with no patches. Multiple known public exploits exist against this version. The web application server is fully exposed and an attacker can pivot from the web server to full system access.

### 5. Bind Shell Backdoor Detection — CVSS 9.8

An active backdoor is listening on an open port. An attacker connects directly and receives an instant command shell with no credentials required. Full command line control of the system is one connection away.

---

## Top 5 Remediations

### 1. Ubuntu 8.04 EOL

Migrate the entire system to a supported Ubuntu LTS version immediately — Ubuntu 22.04 or 24.04. No patch exists for an end-of-life operating system. The only fix is full replacement. Every day running on 8.04 is another day of full exposure.

### 2. VNC Default Password

Change the VNC password immediately to a strong random string of minimum 16 characters. Preferably disable VNC entirely if remote desktop access is not required. If VNC must remain active, restrict access to specific trusted IP addresses only via firewall rules.

### 3. Debian OpenSSH/OpenSSL Weak Key Generation

Revoke and regenerate all SSH keys and SSL certificates created on this system. Update OpenSSL and OpenSSH to fully patched versions. Any key generated before the patch is compromised and must be treated as untrusted regardless of key length.

### 4. Apache Tomcat EOL

Upgrade Tomcat to an actively maintained version immediately — minimum 9.x, preferably 10.x. Disable the AJP connector entirely if not explicitly required. If AJP is needed, bind it to localhost only and never expose it publicly.

### 5. Bind Shell Backdoor

Identify which service or process opened the backdoor port and terminate it immediately. Audit all running processes and open ports. Run a rootkit scanner. The presence of an active backdoor suggests the system may already be compromised — a full rebuild is recommended over attempting cleanup.

---

*Report conducted as part of Security Blue Team — Introduction to Vulnerability Management course challenge.*