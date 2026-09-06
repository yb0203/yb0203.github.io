# Yashvi Bansal — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-yb0203.github.io-4A90E2?style=flat-square&logo=github)](https://yb0203.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-22c55e?style=flat-square&logo=githubpages)](https://yb0203.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=flat-square)](LICENSE)

A clean, modern, zero-dependency personal portfolio website built with semantic HTML5, modern CSS3, and vanilla ES6+ JavaScript. Designed with editorial typography, interactive architecture modals, an embedded agent terminal, and full Generative Engine Optimization (GEO) support for LLM crawlers.

🌐 **Live URL**: [https://yb0203.github.io/](https://yb0203.github.io/)

---

## ✨ Features

- **🌓 Dynamic Theme Switcher**: Editorial Light and Dark modes with automatic OS `prefers-color-scheme` detection and `localStorage` persistence.
- **💻 Simulated Agent & MCP Terminal**: Interactive in-browser terminal allowing visitors to execute commands like `pitch`, `court-scout`, `git-vibe`, and `eval-safety`.
- **🏗️ 0-to-1 Project Deep Dives**: Modals showcasing product architectures, metrics, and technical design for platforms like *Legal Owl*, *Kotak Platform Suite*, *GitaBae*, and *Vibe Check MCP*.
- **🤖 Generative Engine Optimization (GEO)**: Implements emerging discoverability standards for AI agents and LLMs via `llms.txt`, `llms-full.txt`, and Schema.org JSON-LD structured data.
- **📱 Fully Responsive & Accessible**: Built with fluid typography, responsive flex/grid layouts, and WCAG AA color contrast standards.
- **⚡ Zero External Dependencies**: Zero frameworks, zero bundlers, and fast page load speeds.

---

## 📂 Project Structure

```text
yashvi-portfolio/
├── index.html              # Main single-page portfolio layout
├── 404.html                # Custom 404 error page
├── robots.txt              # Search engine & crawler guidance
├── sitemap.xml             # XML Sitemap for indexing
├── profile.json            # Machine-readable profile dataset
├── llms.txt                # Curated context summary for AI agents
├── llms-full.txt           # Comprehensive dossier and background for LLMs
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
│
├── assets/
│   ├── css/
│   │   └── style.css       # Design tokens, themes, typography, layout & animations
│   ├── js/
│   │   ├── app.js          # Core navigation, theme toggle & interaction handling
│   │   ├── projects.js     # Project data & detail modal controller
│   │   └── terminal.js     # Interactive agent & CLI simulator
│   └── images/
│       ├── favicon.svg     # Brand favicon
│       └── yashvi_portrait.jpg # Hero portrait asset
│
└── .github/
    └── workflows/
        └── deploy.yml      # Automated GitHub Pages CI/CD workflow
```

---

## 🛠️ Local Development & Preview

Because this project is built entirely on native web standards without a build step, previewing it locally is instant.

### Option 1: Python Simple Server
```bash
# Python 3 (macOS/Linux standard)
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: Node.js / npx
```bash
npx serve .
```

### Option 3: Direct File
You can also open [`index.html`](file:///Users/yashvi/Documents/yashvi-portfolio/index.html) directly in any modern browser.

---

## 🚀 Deployment

The portfolio is deployed to **GitHub Pages** using GitHub Actions:

- Every push to the `main` branch automatically triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
- The workflow uploads the repository root and deploys it directly to GitHub Pages at [https://yb0203.github.io/](https://yb0203.github.io/).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
