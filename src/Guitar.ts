export class Guitar {
  private serialNumber: string;
  private price: number;
  private builder: string;
  private model: string;
  private type: string;
  private backWood: string;
  private topWood: string;

  constructor( serialNumber: string, price: number, builder: string, model: string, type: string, backWood: string, topWood: string ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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
  getBuilder(): string {
    return this.builder;
  }
  getModel(): string {
    return this.model;
  }
  getType(): string {
    return this.type;
  }
  getBackWood(): string {
    return this.backWood;
  }
  getTopWood(): string {
    return this.topWood;
  }
}