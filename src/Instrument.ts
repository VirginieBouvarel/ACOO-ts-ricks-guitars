import { InstrumentSpec } from "./InstrumentSpec";

export class Instrument {
  private serialNumber: string;
  private price: number;
  spec: InstrumentSpec;

  constructor( serialNumber: string, price: number, spec: InstrumentSpec ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
  }

  getSerialNumber(): string {
    return this.serialNumber;
  }
  getPrice(): number {
    return this.price;
  }
  setPrice(newPrice: number): void {
    this.price = newPrice;
  }
  getSpec(): InstrumentSpec {
    return this.spec;
  }
}