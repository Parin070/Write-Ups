# Introduction to Threat Hunting — SBT

**Tooling used:** Custom-built `ioc-hunter` CLI (Linux-native, replaces Redline + IOC Editor)

## Scenario

Junior Threat Hunter role. Threat Intel team hands off two malware samples, tasked with:
- Extracting IOCs from both samples (MD5, SHA1, size, filename, strings)
- Auditing a target system (disk image) for presence of those IOCs
- Scoping the hunt to a specific user's directories based on a TI tip-off

## Why no Redline / IOC Editor

Both tools are Windows-only. Standard path = spin up a Windows dev VM, disable Defender, install two GUI apps to do what is fundamentally hash + string matching. Skipped that — built a CLI tool instead: **[IOC-Hunter](https://github.com/Parin070/IOC-Hunter)**.

### How it works

Two-phase workflow, same job Redline + IOC Editor do combined, minus the GUI:

**Phase 1 — Collect IOCs from the malware samples**

```bash
python3 ioc_tool.py collect sample1.exe sample2.exe
```

For each sample, the tool computes MD5 and SHA1 (via `hashlib`, streamed in chunks so large files don't choke memory), grabs file size, and extracts printable strings using a regex over runs of printable ASCII bytes (`[ -~]{6,}`) — same concept as the Linux `strings` command, just built inline so there's no external tool dependency. It also prompts to confirm the reported size against what's visible in a file browser, with an override option, and asks whether to add another sample before finishing. Everything gets written to a local `iocs.json` — the IOC database, equivalent to what IOC Editor would output as an `.ioc` file.

**Phase 2 — Layer in analyst-provided IOCs**

The Threat Intel note included two extra string IOCs (`390808010001Z0U1`, `#H3XGROUPWASHERE`) that weren't guaranteed to appear via automatic string extraction on the sample binaries directly. Added them straight into the IOC database:

```bash
python3 ioc_tool.py add-strings "390808010001Z0U1" "#H3XGROUPWASHERE"
```

**Phase 3 — Hunt the target directory**

```bash
python3 ioc_tool.py hunt "TH_Challenge_Target-2/DaveS"
```

This walks every file under the target path recursively (`os.walk`), computes MD5/SHA1 for each, checks size against known IOC sizes, checks filename for exact or partial matches, and searches extracted file strings for substring overlap against every known IOC string. Substring containment was used deliberately instead of exact-token matching — IOC strings often show up embedded inside longer binary strings, and exact matching misses those. Every file that trips one or more of these checks gets logged into a report with the specific reasons it matched, plus a total count — the direct equivalent of Redline's IOC Report.

Sample walkthrough of tool in action below.

## Process

**1. Threat Intel note**

Analyst note flagged two extra string IOCs and scoped the hunt to a specific user (DaveS) to save time.

![Threat Intel note](content/assets/sbt_threat_hunting/note.png)

**2. IOC collection + hunt — three commands**

```bash
python3 ioc_tool.py collect "CTI Team - Malware Samples/"*
python3 ioc_tool.py add-strings "390808010001Z0U1" "#H3XGROUPWASHERE"
python3 ioc_tool.py hunt "TH_Challenge_Target-2/DaveS"
```

![Collect command](content/assets/sbt_threat_hunting/collect.png)
![Add-strings command](content/assets/sbt_threat_hunting/manual.png)
![Hunt command](content/assets/sbt_threat_hunting/final.png)

**3. Report output**

Tool walked the DaveS directory tree, hashed every file, cross-checked against MD5/SHA1/size/filename/string IOCs, output a full match report to `ioc_report.json`.

![IOC report contents](content/assets/sbt_threat_hunting/report.png)

One entry initially returned as a false positive — matched on generic strings (`HA1 block transform`, `ineIy{`) that turned out to be PE-header noise, not real IOC signatures. Filtered out manually before finalizing the count.

Confirmed matches: same malware sample appeared twice under different filenames (`myfile.exe` renamed to `wallpaperHD.exe` in a different folder) — same hash, different name, classic evasion-by-rename.

## Results

| # | Question | Answer |
|---|----------|--------|
| 1 | How many pieces of malware were detected using IOCs generated from the two samples? | **4** |
| 2 | What is the file name beginning with "w"? (including extension) | **wallpaperHD.exe** |
| 3 | Is there malware in the location "/DaveS/Pictures"? (True or False) | **True** |
| 4 | Which MD5 hash appears in two different files? | **0c4374d72e166f15acdfe44e9398d026** |

## Takeaway

Redline's whole job is hash + size + filename + string matching over a directory tree. That's `os.walk` and `hashlib` — no GUI, no Windows VM, no Defender toggling required. Built the tool once, reusable for any future IOC-hunting task.