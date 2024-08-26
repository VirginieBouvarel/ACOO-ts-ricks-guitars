import { GuitarSpec } from "./GuitarSpec";
import { Guitar } from "./Guitar";
import { Instrument } from "./Instrument";
import { MandolinSpec } from "./MandolinSpec";
import { Mandolin } from "./Mandolin";

export class Inventory {
  private inventory: Instrument[];

  constructor() {
    this.inventory = [];
  }

  addInstrument(
    serialNumber: string,
    price: number,
    spec: GuitarSpec | MandolinSpec,
  ): void {
    if (spec instanceof GuitarSpec) {
      this.inventory.push(new Guitar(serialNumber, price, spec));
    } else if (spec instanceof MandolinSpec) {
      this.inventory.push(new Mandolin(serialNumber, price, spec));
    }
  }

  getInstrument(serialNumber: string): Instrument | null {
    for (let i = 0; i <= this.inventory.length; i++) {
      const currentInstrument = this.inventory[i];
      if (currentInstrument.getSerialNumber() === serialNumber) return currentInstrument;
    }
    return null;
  }

  searchGuitar(searchSpec: GuitarSpec): Guitar[] {
    const matchingGuitars: Guitar[] = [];
    for (let i = 0; i <= this.inventory.length -1; i++) {
      const currentGuitar: Guitar = this.inventory[i];
      const currentGuitarSpec = currentGuitar.getSpec() as GuitarSpec;
      if (currentGuitarSpec.matches(searchSpec)) matchingGuitars.push(currentGuitar);
    }
    return matchingGuitars;
  }

  searchMandolin(searchSpec: MandolinSpec): Mandolin[] {
    const matchingMandolins: Mandolin[] = [];
    for (let i = 0; i <= this.inventory.length -1; i++) {
      const currentMandolin: Guitar = this.inventory[i];
      const currentMandolinSpec = currentMandolin.getSpec();
      if (currentMandolinSpec.matches(searchSpec)) matchingMandolins.push(currentMandolin);
    }
    return matchingMandolins;
  }
}