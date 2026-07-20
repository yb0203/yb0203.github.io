# Open Source Software (OSS) Workspace

Welcome to my open-source exploration and contribution workspace. This repository acts as a central hub for studying, testing, and contributing to high-quality open-source projects that I intend to use in my own development.

---

## 🛠 Active Projects

### 1. [Zed / GPUI](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/zed)
*   **Description**: A high-performance, multiplayer code editor (`zed`) and its underlying GPU-accelerated 2D UI framework for Rust (`gpui`).
*   **Key Learnings**:
    *   **Mac compilation bypass**: When building on macOS without the full Xcode (having only Command Line Tools), compile-time Metal shader compilation fails. Bypass this by compiling with runtime shaders:
        ```bash
        cargo run -p gpui --example hello_world --features gpui_platform/runtime_shaders
        ```
*   **Examples of Interest**:
    *   [hello_world.rs](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/zed/crates/gpui/examples/hello_world.rs) — Basic window creation and layout.
    *   [input.rs](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/zed/crates/gpui/examples/input.rs) — Text handling and keyboard focus.
    *   [uniform_list.rs](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/zed/crates/gpui/examples/uniform_list.rs) — High-performance virtualized lists.

### 2. [Loungy](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/loungy)
*   **Description**: A fast, native application launcher built using GPUI. Excellent reference for a complete standalone GPUI desktop application (calculator, clipboard/process manager, menus).
*   **Note**: Loungy is currently not in active development by its original author, but serves as a gold standard example of custom GPUI app design.

### 3. [gpui-component](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/oss/gpui-component)
*   **Description**: A rich community-made library of 60+ UI controls (buttons, resizable panels, markdown rendering, code editor widgets) designed for building custom GPUI desktop applications.

---

## 🔍 Other Projects to Explore

These are candidate projects within the Rust and desktop utility ecosystems that I can use in my own tools or contribute to:

### GPUI Ecosystem
*   **[Hunk](https://github.com/zed-industries/awesome-gpui)**: A performant, cross-platform diff viewer.

### General Rust & Developer Utilities
*   **[Tauri](https://github.com/tauri-apps/tauri)**: Build cross-platform desktop applications using web technologies for the UI and Rust for the backend. Highly mature and actively used.
*   **[Ratatui](https://github.com/ratatui/ratatui)**: A library for building rich Terminal User Interfaces (TUIs). Extremely active community with excellent documentation and beginner-friendly issues.
*   **[rust-analyzer](https://github.com/rust-lang/rust-analyzer)**: Modular compiler frontend for IDEs. Great for understanding language servers.
*   **[Typst](https://github.com/typst/typst)**: A markup-based typesetting system. An extremely popular, large-scale Rust project with active feature development.

---

## 📈 Contribution Checklist & Progress Log

- [x] Clone and set up the `zed` repository.
- [x] Build and run the `hello_world` example using runtime shaders.
- [x] Clone `loungy` and `gpui-component` repositories for reference and study.
- [ ] Explore other GPUI examples (`input`, `uniform_list`).
- [ ] Research issues/contributions guidelines in target repositories.
- [ ] Create a small custom project using one of these tools.
