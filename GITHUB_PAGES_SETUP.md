# 🌐 Publishing Your Portfolio to GitHub Pages

Your portfolio website is built with clean, zero-dependency HTML5, CSS3, and ES6+ JavaScript. It is ready to be hosted on **GitHub Pages** immediately.

---

## 🚀 Option 1: Standard GitHub Pages Deployment (Recommended — 3 Clicks)

1. **Commit and Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "feat: add interactive portfolio website for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages in your Repository Settings**:
   - Go to your repository on GitHub: `https://github.com/yb0203/job-prep` (or your user site repo `https://github.com/yb0203/yb0203.github.io`).
   - Click on the **Settings** tab (gear icon at the top).
   - In the left sidebar under *Code and automation*, click **Pages**.
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` (or `master`) and folder `/(root)`.
     - Click **Save**.

3. **Your Site is Live!**
   - GitHub will trigger a deployment workflow. In 30–60 seconds, your site will be live at:
     - **`https://yb0203.github.io/job-prep/`** (if in `job-prep` repo)
     - Or **`https://yb0203.github.io/`** (if in a repo named `yb0203.github.io`)

---

## 🌟 Option 2: Hosting at Root Domain (`yb0203.github.io`)

If you want your portfolio to be accessible directly at `https://yb0203.github.io` (without the `/job-prep/` subpath):
1. Create a public GitHub repository named **`yb0203.github.io`**.
2. Copy `index.html`, `404.html`, `.nojekyll`, and the `assets/` directory into that repository.
3. Push to `main`. GitHub Pages will automatically deploy it at `https://yb0203.github.io`.

---

## 🎨 Local Testing & Preview

To preview the website locally on your machine at any time:
- Simply double click [index.html](file:///Users/yashvi/Documents/job-prep/index.html) to open in your browser, or run a simple local web server:
  ```bash
  # Using Python (standard on Mac):
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

---

## ✨ Features Included

- 🌓 **Dynamic Theme Switcher**: Modern Dark (Default) and Light themes with local storage persistence.
- 🎯 **Role Lens Switcher**: Instantly re-contextualizes highlights for **Founder's Office & Strategy** vs. **AI & Technical PM**.
- 🚀 **Interactive 0-to-1 Project Showcase**: Detailed architecture modals for *Legal Owl*, *GitaBae*, *Vibe Check*, *Kotak Platforms*, and *Madison AI OS*.
- ⚡ **Simulated Agent & MCP Terminal**: Live interactive terminal with commands like `pitch --founders-office`, `court-scout --status`, `git-vibe --summarize`, and `eval-safety --banking`.
- 📄 **In-Browser Resume Viewer**: Full styled resume modal with one-click print-to-PDF.
- 📱 **100% Mobile Responsive & Accessible**: WCAG AA color contrast, fluid layout, and glassmorphic cards.
