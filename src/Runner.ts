import { Dimension, Entity, EntityQueryOptions, world } from "mojang-minecraft";
import { Parser } from ".";
import { MCFunction } from "./classes/MCFunction";

interface CMDResult {
  result: {
    [key: string]: any;
  };
  error: boolean;
}

function runCommand(cmd: string, dimension?: Dimension): CMDResult;
function runCommand(cmd: string[], dimension?: Dimension): CMDResult[];
function runCommand(
  cmd: string | string[],
  dimension = world.getDimension("overworld")
) {
  const run = (cmd: string) => {
    try {
      return {
        result: dimension.runCommand(cmd),
        error: false,
      } as CMDResult;
    } catch (err) {
      return {
        result: JSON.parse(err as string),
        error: true,
      } as CMDResult;
    }
  };
  return typeof cmd === "string" ? run(cmd) : cmd.map((v) => run(v));
}

const prefix = "MCFunction";

world.events.tick.subscribe((evd) => {
  const opts = new EntityQueryOptions();
  opts.tags = [`${prefix}.run`];

  const dims = [
    world.getDimension("overworld"),
    world.getDimension("nether"),
    world.getDimension("the end"),
  ];
  const ents: Entity[] = [];
  dims.forEach((v) => ents.push(...v.getEntities(opts)));

  if (!ents.length) return;
  runCommand(`tag @e remove ${prefix}.run`);

  ents.forEach((ent) => {
    const tags = ent.getTags().filter((v) => v.startsWith(`${prefix}:`));
    tags.forEach((tag) => {
      const name = tag.match(/(?<=:).+(?=\[|$)/)[0];
      const func = MCFunction.get(name);
      const args = tag.match(/(?<=\[).+?(?=\])/);
      const vars = {};
      if (args) {
        args[0]
          .split(",")
          .forEach((v, i) => (vars[`arg${i}`] = Parser.parseArg(v)));
      }
      if (func) func.run(ent, vars);
      try {
        ent.removeTag(tag);
      } catch {}
    });
  });
});
