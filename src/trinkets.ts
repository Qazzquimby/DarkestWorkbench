import {Buff, Dungeon, Game, Hero} from './game_model';
import {DDFile} from './dd_file';
import {Rarity} from './rarities';
import {Content, ContentTable} from './content';

const paths = require('./paths');
const suffixes = require('./file_suffixes');
const fileAccess = require('./file_access');

export class Trinket implements Content {
  library: Library;
  source: SourcePath;
  id: string;
  buffs: Buff[];
  heroClassRequirements: Hero[];
  rarity: Rarity;
  price: number;
  limit: number;
  originDungeon: Dungeon | null;

  constructor(library: Library,
              source: SourcePath,
              id: string,
              buffs: Buff[],
              heroClassRequirements: Hero[],
              rarity: Rarity,
              price: number,
              limit: number,
              originDungeon: Dungeon | null) {
    this.library = library;
    this.source = source;
    this.id = id;
    this.buffs = buffs;
    this.heroClassRequirements = heroClassRequirements;
    this.rarity = rarity;
    this.price = price;
    this.limit = limit;
    this.originDungeon = originDungeon;
  }
}

export class Trinkets extends ContentTable<Trinket> {
  game: Game;
  contents: Array<Trinket>;

  constructor() {
    super('entries');
  }

  buildContent(library: Library, source: SourcePath, entry: any): Trinket {
    const content = new Trinket(library,
        source,
        entry.id,
        [],
        [],
        entry.rarity,
        entry.price,
        entry.limit,
        null);
    return content;
  }

  getFiles(): DDFile[] {
    const path = paths.TRINKETS_PATH;
    const suffix = suffixes.TRINKET_ENTRIES;
    const files: DDFile[] = fileAccess.getDDFilesInDirWithSuffix(path, suffix);
    return files;
  }

}

