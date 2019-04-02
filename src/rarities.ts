import {DDFile} from './dd_file';
import {Game} from './game_model';
import {Content, ContentTable} from './content';

const paths = require('./paths');
const suffixes = require('./file_suffixes');
const fileAccess = require('./file_access');

export class Rarity implements Content {
  library: Library;
  source: SourcePath;
  id: string;
  awardCategory: string;

  constructor(library: Library,
              source: SourcePath,
              id: string,
              awardCategory: string) {
    this.library = library;
    this.source = source;
    this.id = id;
    this.awardCategory = awardCategory;
  }
}

export class Rarities extends ContentTable<Rarity> {
  game: Game;
  contents: Array<Rarity>;

  constructor() {
    super('rarities');
  }

  buildContent(library: Library, source: SourcePath, entry: any): Rarity {
    const content = new Rarity(library, source, entry.id, entry.award_category);
    return content;
  }

  getFiles(): DDFile[] {
    const path = paths.TRINKETS_PATH;
    const suffix = suffixes.TRINKET_RARITIES;
    const files: DDFile[] = fileAccess.getDDFilesInDirWithSuffix(path, suffix);
    return files;
  }
}
