import {DDFile} from './dd_file';
import {Game} from './game_model';

export abstract class ContentTable<T> {
  game: Game;
  contents: Array<T>;

  constructor(jsonListName: string) {
    this.contents = [];

    const files = this.getFiles();

    for(let file of files) {
      const fileObject = <any>file.readFileAsObject();
      const entries: RarityEntryJson[] = fileObject[jsonListName];
      for(let entry of entries) {
        // const buffs = this.game.Rarities.getFromId(trinketEntry.rarity);

        const content = this.buildContent(file.library, file.source, entry);
        this.contents.push(content);
      }
    }
  }

  abstract buildContent(library: Library, source: SourcePath, entry: any): T

  abstract getFiles(): DDFile[]
}

export abstract class Content {
  library: Library;
  source: SourcePath;
  id: string;
}
