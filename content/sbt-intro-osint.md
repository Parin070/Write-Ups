# Introduction To OSINT

## Case Study: Tracking the MSP Breach Lead (SBT OSINT Capstone)

## Investigation Overview
As a law enforcement analyst, I was assigned to track a Person of Interest (POI) believed to be associated with a hacking group targeting Managed Service Providers (MSPs). The investigation began with a single Twitter handle.

![Initial investigation briefing and tasking](content/assets/sbt_osint/intro.png)

---

## Phase 1: Social Media Pivot & Infrastructure
The initial analysis of the target's Twitter profile revealed a suspicious link in the bio that appeared to be a Base64-encoded string.

![Twitter profile showing the encoded link in bio](content/assets/sbt_osint/twitter.png)

Decoding this string revealed a clear-net domain used by the target: **redhunt.net**. 

![Decoding the Base64 string to reveal the domain](content/assets/sbt_osint/site1.png)

Before interacting with the site, I performed a reputation check on VirusTotal to identify any malicious activity or known threats associated with the domain. The results were clean.

![VirusTotal reputation check for redhunt.net](content/assets/sbt_osint/virus.png)

After visiting the site, I confirmed the link to the POI by matching visual assets. The site featured the same image previously posted by the user on Twitter, establishing a firm connection between the handle and this domain.

![Image matching between the website and social media](content/assets/sbt_osint/site_bulb.png)
![Confirming the visual evidence on the website](content/assets/sbt_osint/twit_bulb.png)

---

## Phase 2: Dorking & Lead Generation
Using Google Dorking techniques focused on the specific username, I located a secondary blog site used by the target.

![Google Dorking for the POI's unique handle](content/assets/sbt_osint/google.png)
![Verification of site usage and final investigative leads](content/assets/sbt_osint/url.png)
![Identifying the secondary blog platform](content/assets/sbt_osint/blog1.png)

This blog site yielded a critical piece of intelligence: the target's primary email address.
**Email Found:** `d1ved33p@gmail.com`

![Discovery of the target's primary email address](content/assets/sbt_osint/email.png)

---

## Phase 3: De-anonymization & Profiling
The blog contained a location string formatted as hex-encoded text. Decoding this provided the direct URL to the target’s **Official Blogspot profile**—the primary owned site for this POI.

![Decoding the hex-encoded location string](content/assets/sbt_osint/location.png)

By performing a deep dive into this official profile and the associated blog entries, I successfully extracted the target's full identity and background.

![Navigating the target's complete digital profile](content/assets/sbt_osint/blog2.png)
![Navigating the target's complete digital profile](content/assets/sbt_osint/info.png)
![Navigating the target's complete digital profile](content/assets/sbt_osint/detail.png)

---

## Final Intelligence Report (Q&A)

| Category | Finding |
| :--- | :--- |
| **Real Name** | Sammie Woods |
| **Age** | 23 |
| **Primary Email** | d1ved33p@gmail.com |
| **Occupation** | Junior Penetration Tester |
| **Employer** | PhilmanSecurityINC |
| **Location** | United Kingdom |
| **Used Site (Owned)** | `redhunt.net` |
| **Discovered Blog** | sp1ritfyrehackerstories.blogspot.com |
| **Interests** | Security, Programming, Technology, Gaming, Photography, Camping |

![Comprehensive profile details and personal interests](content/assets/sbt_osint/info.png)
![Employment and age verification data](content/assets/sbt_osint/detail.png)

### Conclusion
The POI was successfully identified as Sammie Woods, a junior security professional in the UK. While the target did not own **redhunt.net**, their digital footprint across multiple blogs and the reuse of visual assets provided enough evidence to link them directly to the platforms used to discuss the MSP breach and credential sales.

