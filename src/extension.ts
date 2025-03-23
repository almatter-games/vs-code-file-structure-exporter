import * as fs from "fs";
import ignore from "ignore";
import * as path from "path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const generate = () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) {
      vscode.window.showErrorMessage("Nenhum workspace aberto.");
      return;
    }

    const rootPath = workspaceFolders[0].uri.fsPath;
    const outputFilePath = path.join(rootPath, "project_file_structure.txt");
    const shouldInclude = loadGitIgnore(rootPath);

    const structure = getFileStructure(rootPath, shouldInclude, rootPath);
    fs.writeFileSync(outputFilePath, structure.join("\n"), "utf8");
    vscode.window.showInformationMessage("Exported file structure!");
  };

  // Comando manual
  const disposable = vscode.commands.registerCommand(
    "file-structure-exporter.exportStructure",
    () => {
      generate();
    }
  );

  context.subscriptions.push(disposable);

  // Botão na barra inferior
  const statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBar.command = "file-structure-exporter.exportStructure";
  statusBar.text = "$(file) Export Structure";
  statusBar.tooltip = "Export File Structure";
  statusBar.show();
  context.subscriptions.push(statusBar);

  // Observador de alterações no sistema de arquivos
  const config = vscode.workspace.getConfiguration("fileStructureExporter");
  const autoGenerate = config.get<boolean>("autoGenerateOnChange", true);

  if (autoGenerate) {
    const watcher = vscode.workspace.createFileSystemWatcher("**/*");

    watcher.onDidCreate(() => generate());
    watcher.onDidDelete(() => generate());
    context.subscriptions.push(watcher);
  }
}

function loadGitIgnore(basePath: string): (filePath: string) => boolean {
  const ig = ignore();
  const gitignorePath = path.join(basePath, ".gitignore");

  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, "utf8");
    ig.add(content);
  }

  return (filePath: string) => {
    const relative = path.relative(basePath, filePath);
    return !ig.ignores(relative);
  };
}

function getFileStructure(
  dir: string,
  shouldInclude: (filePath: string) => boolean,
  rootPath: string
): string[] {
  let results: string[] = [];

  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (!shouldInclude(filePath)) {
      continue;
    }

    const relativePath = path.relative(rootPath, filePath);

    if (stat.isDirectory()) {
      results.push(`${relativePath}${path.sep}`);
      results.push(...getFileStructure(filePath, shouldInclude, rootPath));
    } else {
      results.push(relativePath);
    }
  }

  return results;
}

export function deactivate() {}
