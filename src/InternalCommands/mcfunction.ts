import { InternalCommand, MCFunction, Utils } from "..";

InternalCommand.register(
  "mcfunction",
  ["string", "string", "any..."],
  (target, args) => {
    const ents = Utils.entsSelect(args[0] as string, target);

    if (ents.length <= 0) {
      throw new Error("No targets matched selector");
    }

    const func = MCFunction.get(args[1] as string);
    const vars = {};

    args.slice(2).forEach((v, i) => {
      vars[`arg${i}`] = v;
    });

    if (!func) throw new Error("No mcfunction found");

    ents.forEach((ent) => func.run(ent, JSON.parse(JSON.stringify(vars))));
  }
);
