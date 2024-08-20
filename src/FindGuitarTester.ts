import { Builder } from "./enums/Builder";
import { Type } from "./enums/Type";
import { Wood } from "./enums/Wood";

import { Guitar } from "./Guitar";
import { Inventory } from "./Inventory";
import { GuitarSpec } from "./GuitarSpec";

export class FindGuitarTester {
  main(): void {
    const inventory = new Inventory();
    this.initializeInventory(inventory);
    console.log(inventory);

    const whatErinLikes = new GuitarSpec(Builder.FENDER, "Stratocaster", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6);
    const matchingGuitars = inventory.search(whatErinLikes);

    if (matchingGuitars.length !== 0) {
      console.log(`Erin, you might like this guitars :`);
      
      for (let i = 0; i <= matchingGuitars.length -1; i++) {
        const currentGuitar: Guitar = matchingGuitars[i];
        const currentGuitarSpec = currentGuitar.getSpec();

        console.log(`We have a ${currentGuitarSpec.getBuilder()} ${currentGuitarSpec.getModel()} ${currentGuitarSpec.getType()} guitar, 
        with ${currentGuitarSpec.getNumberStrings()} strings, made of
        ${currentGuitarSpec.getBackWood()} for back and sides, and
        ${currentGuitarSpec.getTopWood()} for top.
        You can have it for only $${currentGuitar.getPrice()}!
        ----`);
      }
    } else {
      console.log("Sorry, Erin, we have nothing for you.")
    }
  }

  private initializeInventory(inventory: Inventory) {
    inventory.addGuitar("11277", 3999.95, new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC,
      Wood.INDIAN_ROSEWOOD, Wood.SITKA, 6));
    inventory.addGuitar("V95693", 1499.95, new GuitarSpec(Builder.FENDER, "Stratocaster", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6));
    inventory.addGuitar("V9512", 1549.95, new GuitarSpec(Builder.FENDER, "Stratocaster", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, 6));
    inventory.addGuitar("122784", 5495.95, new GuitarSpec(Builder.MARTIN, "D-18", Type.ACOUSTIC,Wood.MAHOGANY, Wood.ADIRONDACK, 6));
    inventory.addGuitar("76531", 6295.95, new GuitarSpec(Builder.MARTIN, "OM-28", Type.ACOUSTIC,Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addGuitar("70108276", 2295.95, new GuitarSpec(Builder.GIBSON, "Les Paul", Type.ELECTRIC, Wood.MAHOGANY, Wood.MAPLE, 6));
    inventory.addGuitar("82765501", 1890.95, new GuitarSpec(Builder.GIBSON, "SG '61 Reissue", Type.ELECTRIC, Wood.MAHOGANY, Wood.MAHOGANY, 6));
    inventory.addGuitar("77023", 6275.95, new GuitarSpec(Builder.MARTIN, "D-28", Type.ACOUSTIC, Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addGuitar("1092", 12_995.95, new GuitarSpec(Builder.OLSON, "SJ", Type.ACOUSTIC, Wood.INDIAN_ROSEWOOD, Wood.CEDAR, 12));
    inventory.addGuitar("566-62", 8999.95, new GuitarSpec(Builder.RYAN, "Cathedral", Type.ACOUSTIC,Wood.COCOBOLO, Wood.CEDAR, 12));
    inventory.addGuitar("6 29584", 2100.95, new GuitarSpec(Builder.PRS, "Dave Navarro Signature",Type.ELECTRIC, Wood.MAHOGANY, Wood.MAPLE, 6));
  }
}