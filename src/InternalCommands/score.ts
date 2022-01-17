import { Dimension, Entity, world } from "mojang-minecraft";
import { InternalCommand, Utils } from "..";

function getScore(
  executor: Entity | Dimension,
  objective: string,
  selector: string
) {
  try {
    let cmd = executor.runCommand(
      `scoreboard players test ${selector} ${objective} * *`
    );
    
    let result = cmd.statusMessage.match(/(?:\d...)/);
    return result ? parseInt(result[0]) : undefined;
  } catch {}
}

InternalCommand.register(
  "score",
  {
    get: ["string", "string"],
    set: ["string", "string"],
  },
  (target, args) => {
    const selector = args[1] as string;
    const ents = Utils.entsSelect(selector, target);

    let executor: Entity | Dimension = ents[0];
    let isName = false;

    if (ents.length < 1 && selector.startsWith("@")) {
      throw new Error("No targets matched selector");
    } else if (ents.length < 1) {
      executor = world.getDimension("overworld");
      isName = true;
    }
    if (ents.length > 1) {
      throw new Error("Cannot check more than one entity's score at a time");
    }

    const score = getScore(executor, selector, isName ? `"${selector}"` : "@s");

    switch (args[0]) {
      case "get": {
        return score;
      }
      case "has": {
        return score !== undefined;
      }
      default: {
      }
    }
  }
);
