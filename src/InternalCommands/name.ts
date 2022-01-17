import { InternalCommand, Utils } from "..";

InternalCommand.register(
  "name",
  {
    get: ["string"],
    set: ["string", "string"],
  },
  (target, args) => {
    const ents = Utils.entsSelect(args[1] as string, target);
    if (ents.length < 1) {
      throw new Error("No targets matched selector");
    }

    switch (args[0]) {
      case "get": {
        if (ents.length > 1) {
          throw new Error("Cannot get more than one entity's name at a time");
        }
        return ents[0].nameTag;
      }
      case "set": {
        ents.forEach((v) => {
          v.nameTag = args[2] as string;
        });
        break;
      }
      default: {
      }
    }
  }
);
