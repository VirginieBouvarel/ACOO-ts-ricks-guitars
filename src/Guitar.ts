import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";
import { GuitarSpec } from "./GuitarSpec";

export class Guitar {
  private serialNumber: string;
  private price: number;
  spec: GuitarSpec;


  constructor( serialNumber: string, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = new GuitarSpec(builder, model, type, backWood, topWood);
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
  getSpec(): GuitarSpec {
    return this.spec;
  }
}