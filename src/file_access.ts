'use strict';

import {DDFile} from './dd_file';

const fg = require('fast-glob');
const paths = require('./paths');

export function getDDFilesInDirWithSuffix(
    directory: DirectoryPath, suffix: FileSuffix): DDFile[] {

  const ddFiles: DDFile[] = [];
  for(let source of paths.SOURCES) {
    const globPattern = `${source}/${directory}**/*${suffix}`;
    const filePathsInSource: string[] = fg.sync([globPattern],
        {noext: true});
    for(let filePath of filePathsInSource) {
      const fileName = filePath.replace(`${source}/${directory}/`, '');
      const library = fileName.replace(suffix, '');
      const ddFile = new DDFile(source, directory, library, suffix);
      ddFiles.push(ddFile);
    }
  }

  return ddFiles;
}
