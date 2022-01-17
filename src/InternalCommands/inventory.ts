import { Entity, EntityInventoryComponent } from "mojang-minecraft";
import { InternalCommand, Utils } from "..";

InternalCommand.register(
  "inventory",
  {
    get: {
      id: ["number", "string"],
      amount: [
        ["number", "string"],
        ["number", "string", "string", "number?"],
      ],
    },
    has: [
      ["number", "string"],
      ["number", "string", "string", "number?"],
    ],
  },
  (target, args, argStr) => {
    const getEnt = (sel: string) => {
      const ents = Utils.entsSelect(sel, target);
      if (ents.length < 1) {
        throw new Error("No targets matched selector");
      }
      if (ents.length > 1) {
        throw new Error(
          "Cannot check more than one entity's inventory at a time"
        );
      }
      return ents[0];
    };

    const getInv = (ent: Entity) => {
      const inv = ent.getComponent("inventory") as EntityInventoryComponent;
      if (!inv) {
        throw new Error("Targetted entity does not have an inventory");
      }
      return inv;
    };

    switch (args[0]) {
      case "get": {
        const entity = getEnt(args[3] as string);
        const inv = getInv(entity);
        let itemId = args[4] as string;
        if (itemId)
          itemId = itemId.includes(":") ? itemId : `minecraft:${itemId}`;

        if (args[2] > inv.inventorySize || args[2] < -1) {
          throw new Error("Inventory does not contain this slot");
        }
        if (args[1] >= 0) {
          const item = inv.container.getItem(args[2] as number);
          if (!item) return;
          switch (args[1]) {
            case "id": {
              return item.id;
            }
            case "amount": {
              return itemId !== undefined && itemId === item.id
                ? item.amount
                : 0;
            }
          }
        } else {
          if (args[1] === "id") {
            throw new Error("Cannot search entire inventory for item ids");
          }

          let amount = 0;
          for (let i = 0; i < inv.container.size; i++) {
            const item = inv.container.getItem(i);
            if (!item) continue;

            if (itemId !== undefined) {
              if (item.id === itemId) amount += item.amount;
            } else amount += item.amount;
          }
          return amount;
        }
      }
      case "has": {
        const entity = getEnt(args[2] as string);
        const inv = getInv(entity);
        let itemId = args[3] as string;
        if (itemId)
          itemId = itemId.includes(":") ? itemId : `minecraft:${itemId}`;

        if (args[1] > inv.inventorySize || args[1] < -1) {
          throw new Error("Inventory does not contain this slot");
        }
        if (args[1] >= 0) {
          const item = inv.container.getItem(args[1] as number);
          if (!item) return false;
          if (args[4] !== undefined)
            return item.id === itemId && item.data === args[4];
          else if (itemId) return item.id === itemId;
          else true;
        } else {
          if (!itemId)
            throw new Error("Cannot check inventory for unspecified item");
          for (let i = 0; i < inv.container.size; i++) {
            const item = inv.container.getItem(i);
            if (!item) continue;
            if (
              args[4] !== undefined &&
              item.id === itemId &&
              item.data === args[4]
            ) {
              return true;
            } else if (item.id === itemId) return true;
          }
          return false;
        }
      }
    }
  }
);
