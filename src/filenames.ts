'use strict';

import {DDFile} from './dd_file';

export function getFileName(fileNameBase: string, suffix: FileSuffix) {
  return `${fileNameBase}${suffix}`;
}

export function getDDFile(
    sourcePath: SourcePath,
    directory: DirectoryPath,
    library: Library,
    suffix: FileSuffix): DDFile {
  const file = new DDFile(sourcePath, directory, library, suffix);
  return file;
}
