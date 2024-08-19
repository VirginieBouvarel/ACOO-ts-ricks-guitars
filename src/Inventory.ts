import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";

import { Guitar } from "./Guitar";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ): void {
    const newGuitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
    this.guitars.push(newGuitar);
  }

  getGuitar(serialNumber: string): Guitar| null {
    for (let i = 0; i <= this.guitars.length; i++) {
      const currentGuitar = this.guitars[i];
      if (currentGuitar.getSerialNumber() === serialNumber) return currentGuitar;
    }
    return null;
  }

  search(searchGuitar: Guitar): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i <= this.guitars.length -1; i++) {
      const currentGuitar: Guitar = this.guitars[i];

      const builder: string = searchGuitar.getBuilder();
      if (builder !== null && builder !== '' && builder !== currentGuitar.getBuilder()) continue;

      const model: string = searchGuitar.getModel().toLowerCase();
      if (model !== null && model !== '' && model !== currentGuitar.getModel().toLowerCase()) continue;

      const type: string = searchGuitar.getType();
      if (type !== null && type !== '' && type !== currentGuitar.getType()) continue;

      const backWood: string = searchGuitar.getBackWood();
      if (backWood !== null && backWood !== '' && backWood !== currentGuitar.getBackWood()) continue;

      const topWood: string = searchGuitar.getTopWood();
      if (topWood !== null && topWood !== '' && topWood !== currentGuitar.getTopWood()) continue;

      matchingGuitars.push(currentGuitar);
    }

    return matchingGuitars;
  }
}