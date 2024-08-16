import { Guitar } from "./Guitar";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
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

  search(searchGuitar: Guitar): Guitar | null {
    for (let i = 0; i <= this.guitars.length -1; i++) {
      const currentGuitar: Guitar = this.guitars[i];
      // Ignore serial number since that's unique
      // Ignore price since that's unique
      const builder: string = searchGuitar.getBuilder();
      if (builder !== null && builder !== '' && builder !== currentGuitar.getBuilder()) continue;

      const model: string = searchGuitar.getModel();
      if (model !== null && model !== '' && model !== currentGuitar.getModel()) continue;

      const type: string = searchGuitar.getType();
      if (type !== null && type !== '' && type !== currentGuitar.getType()) continue;

      const backWood: string = searchGuitar.getBackWood();
      if (backWood !== null && backWood !== '' && backWood !== currentGuitar.getBackWood()) continue;

      const topWood: string = searchGuitar.getTopWood();
      if (topWood !== null && topWood !== '' && topWood !== currentGuitar.getTopWood()) continue;

      return currentGuitar;
    }
    return null;
  }
}