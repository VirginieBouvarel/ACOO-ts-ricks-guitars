import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";
import { InstrumentSpec } from "./InstrumentSpec";

export class GuitarSpec extends InstrumentSpec {
  private numberStrings: number;

  constructor( builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, numberStrings: number ) {
    super(builder, model, type, backWood, topWood);
    this.numberStrings = numberStrings;
  }

  getNumberStrings(): number {
    return this.numberStrings;
  }

  // Override the superclass matches()
  matches(otherSpec: InstrumentSpec): boolean {
    if(!super.matches(otherSpec)) return false;
    if (!(otherSpec instanceof GuitarSpec)) return false;

    if (this.numberStrings !== otherSpec.numberStrings) return false;
    return true;
  }
}