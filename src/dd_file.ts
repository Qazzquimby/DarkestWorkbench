const fs = require('fs');

export class DDFile {
  source: SourcePath;
  directory: DirectoryPath;
  library: Library;
  suffix: FileSuffix;

  constructor(
      source: SourcePath,
      directory: DirectoryPath,
      library: Library,
      suffix: FileSuffix) {
    this.source = source;
    this.directory = directory;
    this.library = library;
    this.suffix = suffix;
  }

  public readFileAsObject(): object {
    const fileContents = this.readFile();
    const object = JSON.parse(fileContents);
    return object;
  }

  public readFile(): string {
    const path = this.getPath();
    const fileContents = fs.readFileSync(path, 'utf8');
    return fileContents;
  }

  public writeFile(contents: string) {
    const path = this.getPath();
    fs.writeFileSync(path, contents);
  }

  private getPath() {
    const path: string = `${this.source}/${this.directory}/${this.library}${this.suffix}`;
    return path;
  }
}
