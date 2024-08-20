import { GuitarSpec } from "./GuitarSpec";
import { Guitar } from "./Guitar";
import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";

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

  search(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];

    for (let i = 0; i <= this.guitars.length -1; i++) {
      const currentGuitar: Guitar = this.guitars[i];
      const currentGuitarSpec = currentGuitar.getSpec();

      const builder: string = searchSpec.getBuilder();
      if (builder !== null && builder !== '' && builder !== currentGuitarSpec.getBuilder()) continue;

      const model: string = searchSpec.getModel().toLowerCase();
      if (model !== null && model !== '' && model !== currentGuitarSpec.getModel().toLowerCase()) continue;

      const type: string = searchSpec.getType();
      if (type !== null && type !== '' && type !== currentGuitarSpec.getType()) continue;

      const backWood: string = searchSpec.getBackWood();
      if (backWood !== null && backWood !== '' && backWood !== currentGuitarSpec.getBackWood()) continue;

      const topWood: string = searchSpec.getTopWood();
      if (topWood !== null && topWood !== '' && topWood !== currentGuitarSpec.getTopWood()) continue;

      matchingGuitars.push(currentGuitar);
    }

    return matchingGuitars;
  }
}