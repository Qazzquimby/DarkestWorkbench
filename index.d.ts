declare type SourcePath = string;
declare type DirectoryPath = string;
declare type Library = string;
declare type FileSuffix = string;
declare type FilePath = string;

declare interface RarityEntryJson {
  id: string
  buffs: string[]
  hero_class_requirements: string[]
  rarity: string
  price: number
  limit: number
  origin_dungeon: string
}
