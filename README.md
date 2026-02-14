# TypeLens

A Chrome extension that inspects and previews typography on any website.

![TypeLens](typelense.png)

## Features

**Typography Detection** — Scans the page and groups every text element by semantic role: Headings, Content, Interactive, and Other. Each entry shows the HTML tag, font family, size, weight, and line height at a glance.

**Live Preview** — Toggle preview mode on any typography group to see sample text rendered with the actual web fonts, including font-style, text-transform, and letter-spacing.

**Expand Instances** — Click the count badge on any typography entry to fetch and display the text from every matching element on the page.

**Inspector Mode** — Hover over any element to see a tooltip with its full typography properties. Click to copy the CSS to your clipboard.

**Element Highlighting** — Click a typography row to highlight all matching elements on the page and scroll to the first one.

**Sorting & Display** — Sort entries by size or frequency. Toggle line-height display between ratio and pixel values.

## Install

1. Clone this repo
2. Open `chrome://extensions` in Chrome
3. Enable **Developer mode**
4. Click **Load unpacked** and select the project folder

## How It Works

TypeLens injects detection scripts into the active tab using `chrome.scripting.executeScript`. It walks the DOM via `TreeWalker` to find text nodes, resolves their semantic ancestors (h1-h6, p, button, a, etc.), and groups them by computed style properties.

Web fonts are resolved by extracting `@font-face` rules from the page's stylesheets, converting relative URLs to absolute, and injecting them into the popup so previews render with the correct typefaces.

No external dependencies. Pure vanilla JavaScript and Chrome Extension APIs (Manifest V3).

## License

[GPL-3.0](LICENSE)
