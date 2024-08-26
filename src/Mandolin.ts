import { MandolinSpec } from "./MandolinSpec";
import { Instrument } from "./Instrument";

export class Mandolin extends Instrument{
  constructor( serialNumber: string, price: number, spec: MandolinSpec ) {
    super(serialNumber, price, spec);
  }
}