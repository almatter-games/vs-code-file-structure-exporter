# File Structure Exporter

![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/almatter.file-structure-exporter)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/almatter.file-structure-exporter)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/stars/almatter.file-structure-exporter)
![GitHub License](https://img.shields.io/github/license/almatter-games/vs-code-file-structure-exporter)
[![Install from VS Code Marketplace](https://img.shields.io/badge/VSCODE-Install-blue?logo=visualstudiocode&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=almatter.file-structure-exporter)

A Visual Studio Code extension that exports your project’s file and folder structure to a `.txt` file. Useful for documentation, prompts for AI assistants, and general organization.

---

## ✨ Features

- Exports the current project file structure to a `.txt` file.
- Automatically ignores files and folders listed in `.gitignore`.
- Outputs **relative paths** only.
- Adds a button to the status bar for quick export.
- Automatically updates the structure file when files/folders are created, renamed, deleted, or moved (optional).

---

## 🚀 How to Use

1. Open your project in VS Code.
2. Press `Ctrl+Shift+P` and run:  
   **"Export the project file structure"**  
   or click the 📄 button `Export Structure` in the bottom status bar.
3. The file `project_file_structure.txt` will be generated in the project root.

---

## ⚙️ Settings

| Setting                                      | Type    | Default | Description                                                           |
|---------------------------------------------|---------|---------|-----------------------------------------------------------------------|
| `fileStructureExporter.autoGenerateOnChange` | boolean | `true`  | Automatically regenerate the structure when files/folders are edited |

---

## 📦 Output Example

project_file_structure.txt

```txt
  .gitignore
  .next\
  app\
  app\favicon.ico
  app\globals.css
  app\layout.tsx
  app\page.tsx
  eslint.config.mjs
  make_dir_tree.bat
  next.config.ts
  package-lock.json
  package.json
  postcss.config.mjs
  public\
  public\file.svg
  public\globe.svg
  public\next.svg
  public\vercel.svg
  public\window.svg
  README.md
  tailwind.config.ts
  tsconfig.json
```
