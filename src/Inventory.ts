import { GuitarSpec } from "./GuitarSpec";
import { Guitar } from "./Guitar";

export class Inventory {
  private guitars: Guitar[];

  constructor() {
    this.guitars = [];
  }

  addGuitar(
    serialNumber: string,
    price: number,
    spec: GuitarSpec,
  ): void {
    const newGuitar = new Guitar(serialNumber, price, spec);
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
      if (currentGuitarSpec.matches(searchSpec)) matchingGuitars.push(currentGuitar);
    }

    return matchingGuitars;
  }
}