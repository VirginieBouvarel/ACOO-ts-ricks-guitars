import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";

export class GuitarSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;
  private numberStrings: number;

  constructor( builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, numberStrings: number ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
    this.numberStrings = numberStrings;
  }

  getBuilder(): Builder {
    return this.builder;
  }
  getModel(): string {
    return this.model;
  }
  getType(): Type {
    return this.type;
  }
  getBackWood(): Wood {
    return this.backWood;
  }
  getTopWood(): Wood {
    return this.topWood;
  }
  getNumberStrings(): number {
    return this.numberStrings;
  }

  matches(otherSpec: GuitarSpec): boolean {
    if (this.builder !== otherSpec.builder) return false;
    if (this.model !== null && this.model !== "" && this.model.toLowerCase() !== otherSpec.model.toLowerCase()) return false;
    if (this.type !== otherSpec.type) return false;
    if (this.backWood !== otherSpec.backWood) return false;
    if (this.topWood !== otherSpec.topWood) return false;
    if (this.numberStrings !== otherSpec.numberStrings) return false;
    return true;
  }
}