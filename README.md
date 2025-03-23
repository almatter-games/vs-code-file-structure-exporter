# File Structure Exporter

![Marketplace](https://vsmarketplacebadge.apphb.com/version/almatter-games.file-structure-exporter.svg)
![Installs](https://vsmarketplacebadge.apphb.com/installs/almatter-games.file-structure-exporter.svg)

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
   or click the 📄 icon in the bottom status bar.
3. The file `estrutura_projeto.txt` will be generated in the project root.

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
