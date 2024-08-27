import { GuitarSpec } from "./GuitarSpec";
import { Guitar } from "./Guitar";
import { Instrument } from "./Instrument";
import { MandolinSpec } from "./MandolinSpec";
import { Mandolin } from "./Mandolin";
import { InstrumentSpec } from "./InstrumentSpec";

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

  search(searchSpec: InstrumentSpec): Instrument[] {
    const matchingInstruments: Instrument[] = [];
    for (let i = 0; i <= this.inventory.length -1; i++) {
      const currentInstrument = this.inventory[i];
      const currentInstrumentSpec = currentInstrument.getSpec();
      if (currentInstrumentSpec.matches(searchSpec)) matchingInstruments.push(currentInstrument);
    }
    return matchingInstruments;
  }
}