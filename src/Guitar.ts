import { GuitarSpec } from "./GuitarSpec";
import { Instrument } from "./Instrument";

export class Guitar extends Instrument{
  constructor( serialNumber: string, price: number, spec: GuitarSpec ) {
    super(serialNumber, price, spec);
  }
}