import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";

export abstract class InstrumentSpec {
  private builder: Builder;
  private model: string;
  private type: Type;
  private backWood: Wood;
  private topWood: Wood;

  constructor( builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood ) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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

  matches(otherSpec: InstrumentSpec): boolean {
    if (this.builder !== otherSpec.builder) return false;
    if (this.model !== null && this.model !== "" && this.model.toLowerCase() !== otherSpec.model.toLowerCase()) return false;
    if (this.type !== otherSpec.type) return false;
    if (this.backWood !== otherSpec.backWood) return false;
    if (this.topWood !== otherSpec.topWood) return false;
    return true;
  }
}