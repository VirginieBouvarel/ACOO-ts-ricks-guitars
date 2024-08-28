import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";
import { Inventory } from "./Inventory";
import { InstrumentSpec } from "./InstrumentSpec";
import { Instrument } from "./Instrument";
import { InstrumentType } from "./enums/InstrumentType";

export class FindGuitarTester {
  main(): void {
    const inventory = new Inventory();
    this.initializeInventory(inventory);
    console.log(inventory);

    const properties = new Map<string, any>();
    properties.set("builder", Builder.GIBSON);
    properties.set("backWood", Wood.MAPLE);
    const whatBryanLikes = new InstrumentSpec(properties);

    const matchingInstruments: Instrument[] = inventory.search(whatBryanLikes);
    console.log(matchingInstruments);

    if (matchingInstruments.length !== 0) {
      console.log(`Bryan, you might like this instruments :`);

      for (let i = 0; i <= matchingInstruments.length -1; i++) {
        const currentInstrument = matchingInstruments[i];
        const currentInstrumentSpec = currentInstrument.getSpec();
        console.log(`We have a ${currentInstrumentSpec.getProperty("instrumentType")} with the following properties:`);

        const currentInstrumentProperties = currentInstrumentSpec.getProperties().keys();
        for (const propertyName of currentInstrumentProperties) {
          if (propertyName !== "instrumentType") {
            console.log(`    ${propertyName} : ${currentInstrumentSpec.getProperty(propertyName)}`);
          }
        }
        console.log(`You can have this ${currentInstrumentSpec.getProperty("instrumentType")} for only $${currentInstrument.getPrice()}!\n----`);
      }
    } else {
      console.log("Sorry, Erin, we have nothing for you.")
    }
  }

  private initializeInventory(inventory: Inventory) {
    let properties: Map<string, any> = new Map<string, any>();
    properties.set("instrumentType", InstrumentType.GUITAR);
    properties.set("builder", Builder.COLLINGS);
    properties.set("model", "CJ");
    properties.set("type", Type.ACOUSTIC);
    properties.set("backWood", Wood.INDIAN_ROSEWOOD);
    properties.set("topWood", Wood.SITKA);
    properties.set("numberStrings", 6);
    inventory.addInstrument("11277", 3999.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.FENDER);
    properties.set("model", "Stratocaster");
    properties.set("type", Type.ELECTRIC);
    properties.set("topWood", Wood.ALDER);
    properties.set("backWood", Wood.ALDER);
    inventory.addInstrument("V95693", 1499.95, new InstrumentSpec(properties));
    inventory.addInstrument("V9512", 1549.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.MARTIN);
    properties.set("model", "D-18");
    properties.set("type", Type.ACOUSTIC);
    properties.set("backWood", Wood.MAHOGANY);
    properties.set("topWood", Wood.ADIRONDACK);
    inventory.addInstrument("122784", 5495.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.GIBSON);
    properties.set("model", "Les Paul");
    properties.set("type", Type.ELECTRIC);
    properties.set("backWood", Wood.MAPLE);
    properties.set("topWood", Wood.MAPLE);
    inventory.addInstrument("70108276", 2295.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.GIBSON);
    properties.set("model", "SG '61 Reissue");
    properties.set("backWood", Wood.MAHOGANY);
    properties.set("topWood", Wood.MAHOGANY);
    inventory.addInstrument("82765501", 1890.95, new InstrumentSpec(properties));

    properties.set("instrumentType", InstrumentType.MANDOLIN);
    properties.set("model", "F-5G");
    properties.set("type", Type.ACOUSTIC);
    properties.set("backWood", Wood.MAPLE);
    properties.set("topWood", Wood.MAPLE);
    properties.delete("numberStrings");
    inventory.addInstrument("9019920", 5495.99, new InstrumentSpec(properties));

    properties.set("instrumentType", InstrumentType.BANJO);
    properties.set("model", "RB-3 Wreath");
    properties.delete("topWood");
    properties.set("numberStrings", 5);
    inventory.addInstrument("8900231", 2945.95, new InstrumentSpec(properties));
  }
}