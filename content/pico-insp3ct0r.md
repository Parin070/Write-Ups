# Insp3ct0r

**Category:** Web Exploitation
**Platform:** CyLab/picoCTF
**Difficulty:** Easy

## Description

A simple website hides flag fragments across its HTML, CSS, and JS source. Task is to inspect all three to reassemble the full flag.

## Solution

Opened the challenge site and viewed the page source (`index.html`). Found an HTML comment inside the "How" tab content:

```html
<!-- Html is neat. Anyways have 1/3 of the flag: picoCTF{tru3_d3 -->
```

Next, opened the linked stylesheet `mycss.css` and found a comment with the second piece:

```css
/* You need CSS to make pretty pages. Here's part 2/3 of the flag: t3ct1ve_0r_ju5t */
```

Finally, opened the linked script `myjs.js` and found the last piece:

```js
/* Javascript sure is neat. Anyways part 3/3 of the flag: _lucky?302945a7} */
```

Concatenated all three fragments in order (HTML → CSS → JS):

```
picoCTF{tru3_d3 + t3ct1ve_0r_ju5t + _lucky?302945a7}
```

## Flag

```
picoCTF{tru3_d3t3ct1ve_0r_ju5t_lucky?302945a7}
```

## Takeaway

Always check linked CSS and JS files, not just the HTML — comments and secrets can be hidden anywhere in the page's source files.
