a# Introduction To Dark Web Operations

## Case Study: Introduction to Dark Web Operations

**Target Site:** `http://panznjcktrpezyln5frnjxf5gv4xoyi7wvd3ykeu6bejxvbynhfpasqd.onion`

## Mission Objective
Following the dismantling of a major UK drug trafficking network, intelligence suggests a surviving mastermind has launched a covert hub to continue operations. My objective was to infiltrate this platform, identify the "Midnite" hacker group affiliation, trace financial transactions, and locate a specific individual known as **PJ** before they could host a scheduled criminal congregation.

---

### **⚠️ Disclaimer & Technical Setup**
**Legal Notice:** This investigation was conducted for educational purposes within a controlled legal environment. 
**Technical Stack:** To maintain OpSec and safety, I utilized a **Kali Linux VM** paired with **ProtonVPN**. All site interactions were performed exclusively through the **Tor Browser**.

![Initial site access via Tor](content/assets/sbt_dark/initial_site_access_via_tor.png)

---

## Phase 1: Infiltration & Credential Harvesting
The entry point presented a secure login gate. To bypass this, I utilized browser developer tools to inspect the site's logic.

1.  **Command Execution:** In the browser **Console**, I ran the command `generateUserCredentials()`.
2.  **Decoding:** This produced a Base64-encoded string.
3.  **Access:** Decoding the string provided the credentials `user:password`, granting full access to the internal board.

![Opening the login console](content/assets/sbt_dark/opening_the_login_console.png)
![Generating credentials in console](content/assets/sbt_dark/generating_credentials_in_console.png)
![Decoding Base64 for cleartext login](content/assets/sbt_dark/decoding_base64_for_cleartext_login.png)

---

## Phase 2: Intelligence Extraction (Pinned Posts)
Upon login, the dashboard displayed three pinned posts. The titles were obfuscated using Hexadecimal encoding to hide the nature of the discussions from casual observers.

![Marketplace dashboard and pinned posts](content/assets/sbt_dark/marketplace_dashboard_and_pinned_posts.png)
![Secondary view of the message board](content/assets/sbt_dark/secondary_view_of_the_message_board.png)

By converting the Hex values to ASCII, I successfully identified the primary operational topics for the trafficking network.

![Decoding Hex titles into ASCII](content/assets/sbt_dark/decoding_hex_titles_into_ascii.png)

---

## Phase 3: The "Midnite" Connection
Further exploration of the site's footer and message boards revealed a link to an external partnership. 

![Finding external links](content/assets/sbt_dark/finding_external_links.png)

This link directed me to a page detailing the **Midnite** hacker group. I downloaded an associated "Setup Guide," which contained nested Base64 and Hexadecimal strings. Decoding these confirmed the group’s identity and their role in the current operation.

![Identifying the Midnite group](content/assets/sbt_dark/identifying_the_midnite_group.png)
![Extracting encoded data from the setup guide](content/assets/sbt_dark/extracting_encoded_data_from_the_setup_guide.png)
![Extracting encoded data from the setup guide](content/assets/sbt_dark/extracting_encoded_data_from_the_setup_guide.png)
![Final confirmation of the Midnite affiliation](content/assets/sbt_dark/final_confirmation_of_the_midnite_affiliation.png)

---

## Phase 4: Financial Trace (The $7,000 Transaction)
A critical security lapse on the site left a transaction log visible under "Recent Transactions." I focused on a specific **$7,000** entry. By opening the transaction details, I extracted the customer’s full name, email, and the specific illegal purpose of the funds transfer.

![Finding external links](content/assets/sbt_dark/finding_external_links.png)
![Exposed transaction logs](content/assets/sbt_dark/exposed_transaction_logs.png)
![Detailing the high-value transaction](content/assets/sbt_dark/detailing_the_highvalue_transaction.png)

---

## Phase 5: Steganography & AI-Assisted OSINT
The user **PJ** posted a party invitation. While the date was visible, the location was missing from the text. I downloaded the image and utilized **steganography** tools to extract a hidden message.

![Downloading the party invite for analysis](content/assets/sbt_dark/downloading_the_party_invite_for_analysis.png)
![Extracting hidden steganographic data](content/assets/sbt_dark/extracting_hidden_steganographic_data.png)
![Extracting hidden steganographic data](content/assets/sbt_dark/extracting_hidden_steganographic_data.png)

The extracted message contained a descriptive riddle about the location. I provided this description to **Google AI**, which analyzed the landmarks and details to confirm the specific city where the party was being hosted.

![Using AI to identify the city from the riddle](content/assets/sbt_dark/using_ai_to_identify_the_city_from_the_riddle.png)

---

## Phase 6: De-anonymizing the Vendor
Finally, I targeted a vendor selling stolen car parts. By locating their listing and decoding the Hex values within the contact section, I successfully identified their primary email address for law enforcement.

![Locating the car parts vendor](content/assets/sbt_dark/locating_the_car_parts_vendor.png)
![Final Hex decoding for email identification](content/assets/sbt_dark/final_hex_decoding_for_email_identification.png)

---

## Final Intelligence Report (Q&A)

| # | Question | Answer |
| :--- | :--- | :--- |
| **1** | **What command is used in the Console to generate valid credentials?** | `generateUserCredentials()`, KF7ybuD1, Alyhfot0V9VIWm6W |
| **2** | **What are the titles of the three pinned posts in ASCII?** | Drugs, Pleasure, and Drops |
| **3** | **Provide the name of the mentioned illegal hacker site.** | Midnite |
| **4** | **Provide the customer’s full name, email, and purpose from the log.** | Frank Castle, frankcastle2093@gmail.com, Hookers and Drugs |
| **5** | **What city is the illegal party taking place in and when?** | Cardiff, February 14, 2025 |
| **6** | **What is the email of the user selling ‘stolen’ car parts?** | twizzerichard@gmail.com |

---
**Mission Outcome:** Full digital profile of the operation and POIs successfully handed over to investigative authorities.