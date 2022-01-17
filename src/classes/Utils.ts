import { Entity, EntityQueryOptions, world } from "mojang-minecraft";
import { InternalCommand } from ".";
import { validTypes } from "../types";

export class Utils {
  // From:
  // https://stackoverflow.com/a/8809472
  static generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  static entsSelect(selector: string, executor: Entity) {
    const uuid = Utils.generateUUID();
    try {
      executor.runCommand(`tag ${selector} add "query:${uuid}"`);
    } catch {
      try {
        executor.runCommand(`tag @e remove "query:${uuid}"`);
      } catch {}
      return [];
    }

    const opts = new EntityQueryOptions();
    opts.tags = [`query:${uuid}`];

    const dims = [
      world.getDimension("overworld"),
      world.getDimension("nether"),
      world.getDimension("the end"),
    ];
    const ents: Entity[] = [];
    dims.forEach((v) =>
      ents.push(...[...v.getEntities(opts)].filter((e) => e.dimension === v))
    );

    executor.runCommand(`tag @e remove "query:${uuid}"`);
    return ents;
  }

  static cmdRunner(
    executor: Entity,
    cmd: string,
    args: validTypes[],
    argStr: string
  ) {
    const intCmd = InternalCommand.get(cmd);
    const fullCmd = `${cmd} ${args.join(" ")}`;

    if (intCmd) {
      return intCmd.run(executor, args, argStr);
    } else executor.runCommand(fullCmd);
  }
}
