import { InternalCommand, Utils } from "..";

InternalCommand.register("repeat", ["number", "any..."], (target, args) => {
  for (let i = 0; i < args[0]; i++) {
    try {
      Utils.cmdRunner(
        target,
        args[1] as string,
        args.slice(2),
        args.slice(2).join(" ")
      );
    } catch {}
  }
});
