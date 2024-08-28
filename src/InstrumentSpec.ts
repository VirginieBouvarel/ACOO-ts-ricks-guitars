export class InstrumentSpec {
  private properties: Map<string, any>;

  constructor(properties: Map<string, any> | null) {
    this.properties = properties ? new Map<string, any>(properties) : new Map<string, any>();
  }

  getProperty(propertyName: string): object {
    return this.properties.get(propertyName);
  }

  getProperties(): Map<string, any> {
    return this.properties;
  }

  matches(otherSpec: InstrumentSpec): boolean {
    const otherProperties = otherSpec.getProperties();

    for (const propertyName of otherProperties.keys()) {
      const property = this.properties.get(propertyName);
      const otherProperty = otherSpec.getProperty(propertyName);

      if (property !== otherProperty) {
        return false;
      }
    }
    return true;
  }
}