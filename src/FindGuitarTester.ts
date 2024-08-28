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
    properties.set("builder", Builder.FENDER);
    properties.set("model", "Stratocaster");
    properties.set("type", Type.ELECTRIC);
    properties.set("backWood", Wood.ALDER);
    properties.set("topWood", Wood.ALDER);
    properties.set("numberStrings", 6);
    const whatErinLikes = new InstrumentSpec(properties);

    const matchingInstruments: Instrument[] = inventory.search(whatErinLikes);
    console.log(matchingInstruments);

    if (matchingInstruments.length !== 0) {
      console.log(`Erin, you might like this guitars :`);

      for (let i = 0; i <= matchingInstruments.length -1; i++) {
        const currentInstrument = matchingInstruments[i];
        const currentInstrumentSpec = currentInstrument.getSpec();

        console.log(`We have a ${currentInstrumentSpec.getProperty("builder")} ${currentInstrumentSpec.getProperty("model")} ${currentInstrumentSpec.getProperty("type")} ${currentInstrumentSpec.getProperty("instrumentType")}, 
        with ${currentInstrumentSpec.getProperty("numberStrings")} strings, made of
        ${currentInstrumentSpec.getProperty("backWood")} for back and sides, and
        ${currentInstrumentSpec.getProperty("topWood")} for top.
        You can have it for only $${currentInstrument.getPrice()}!
        ----`);
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

    properties.set("model", "OM-28");
    properties.set("backWood", Wood.BRAZILIAN_ROSEWOOD);
    inventory.addInstrument("76531", 6295.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.GIBSON);
    properties.set("model", "Les Paul");
    properties.set("type", Type.ELECTRIC);
    properties.set("backWood", Wood.MAHOGANY);
    properties.set("topWood", Wood.MAHOGANY);
    inventory.addInstrument("70108276", 2295.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.GIBSON);
    properties.set("model", "SG '61 Reissue");
    inventory.addInstrument("82765501", 1890.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.MARTIN);
    properties.set("model", "D-28");
    properties.set("type", Type.ACOUSTIC);
    properties.set("backWood", Wood.BRAZILIAN_ROSEWOOD);
    properties.set("topWood", Wood.ADIRONDACK);
    inventory.addInstrument("77023", 6275.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.OLSON);
    properties.set("model", "SJ");
    properties.set("backWood", Wood.INDIAN_ROSEWOOD);
    properties.set("topWood", Wood.CEDAR);
    properties.set("numberStrings", 12);
    inventory.addInstrument("1092", 12_995.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.RYAN);
    properties.set("model", "Cathedral");
    properties.set("backWood", Wood.COCOBOLO);
    properties.set("topWood", Wood.CEDAR);
    inventory.addInstrument("566-62", 8999.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.PRS);
    properties.set("model", "Dave Navarro Signature");
    properties.set("type", Type.ELECTRIC);
    properties.set("backWood", Wood.MAHOGANY);
    properties.set("topWood", Wood.MAPLE);
    properties.set("numberStrings", 6);
    inventory.addInstrument("6 29584", 2100.95, new InstrumentSpec(properties));
  }
}