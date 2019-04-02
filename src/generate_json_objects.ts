'use strict';
const readDdFiles = require('./read_dd_files');
const fs = require('fs');
const paths = require('./paths');
const suffixes = require('./file_suffixes');
const file_access = require('./file_access');

class JsonEnumObject {
  title: string;
  type: string;
  jsonEnum: object;
}

//
// export function generateHeroEnum() {
//   const heroIds = readDdFiles.getHeroIds();
//   makeAndSaveJsonEnum('Hero', 'hero', heroIds);
// }
//
// export function generateRarityEnum() {
//   const rarity = new JsonEnumObject();
//   rarity.title = 'Rarity';
//   rarity.type = 'string';
//   rarity.jsonEnum = getRarities();
//   const rarityJson = JSON.stringify(rarity);
//
//   const filename = 'generated_json_objects/rarity.json';
//   fs.writeFileSync(filename, rarityJson);
// }
//
// function getRarities(): object {
//   const directory = paths.TRINKETS_PATH;
//   const suffix = suffixes.TRINKET_RARITIES;
//   const files = file_access.getDDFilesInDirWithSuffix(directory, suffix);
//
//   for (let file of files) {
//   }
//   //fixme
//   return {};
// }
//
// function makeAndSaveJsonEnum(
//     enumName: string, fileName: string, enumStrings: string[]) {
//   const jsonEnumObject = makeObjectEnum(enumName, enumStrings);
//   saveJsonEnum(jsonEnumObject, fileName);
// }
//
// function makeObjectEnum(enumName: string, enumStrings: string[]) {
//   const jsonEnumObject = new JsonEnumObject();
//   jsonEnumObject.title = enumName;
//   jsonEnumObject.type = 'string';
//   jsonEnumObject.jsonEnum = enumStrings;
//   return jsonEnumObject;
// }

function saveJsonEnum(jsonEnumObject: JsonEnumObject, fileName: string) {
  const jsonEnum = JSON.stringify(jsonEnumObject);
  fs.writeFileSync(fileName, jsonEnum);
}
