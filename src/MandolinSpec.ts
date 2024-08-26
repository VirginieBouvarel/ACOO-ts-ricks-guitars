import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";
import { Style } from "./enums/Style";
import { InstrumentSpec } from "./InstrumentSpec";


export abstract class MandolinSpec  extends InstrumentSpec {
  private style: Style;

  constructor( builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, style: Style ) {
    super(builder, model, type, backWood, topWood);
    this.style = style;
  }

    // Override the superclass matches()
    matches(otherSpec: InstrumentSpec): boolean {
      if(!super.matches(otherSpec)) return false;
      if (!(otherSpec instanceof MandolinSpec)) return false;
  
      if (this.style !== otherSpec.style) return false;
      return true;
    }
}