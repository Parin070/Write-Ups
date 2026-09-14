# Enhance!

**Category:** Forensics
**Platform:** CyLab/picoCTF
**Difficulty:** Medium

## Description

An SVG image file is given. The flag isn't visible in the rendered image — it's hidden in the file's source.

## Solution

Downloaded `drawing.flag.svg`. SVG files are XML-based text files, not raw pixel data, so the flag wasn't going to show up by just looking at the rendered image.

Renamed the file extension from `.svg` to `.txt` to open it as plain text:

```bash
mv drawing.flag.svg drawing.flag.txt
```

Opened the renamed file and read through the markup — the flag was embedded directly inside the SVG's source.

(Note: this step isn't strictly necessary — `cat drawing.flag.svg` or a browser's "view source" works just as well, since SVG is already plain text under the hood. Renaming just makes it open in a plain text editor by default.)

## Flag

```
picoCTF{3nh4nc3d_d0a757bf}
```

## Takeaway

SVG is a text-based vector format, unlike raster images (PNG/JPG). Anything hidden in an SVG — text, comments, metadata — is readable by just opening the file as plain text or viewing its source, no special forensics tools needed.
