'use strict';

import {Trinkets} from './trinkets';
import {Rarities} from './rarities';

export class Buff {
}

export class Hero {
}

export class Dungeon {
}

export class Game {
  rarities: Rarities;
  trinkets: Trinkets;

  constructor() {
    this.rarities = new Rarities();
    this.trinkets = new Trinkets();
  }
}

export const game = new Game();
