import { InternalCommand, Utils } from "..";

InternalCommand.register("if", ["boolean", "any..."], (target, args) => {
  if (args[0]) {
    Utils.cmdRunner(target, args[1] as string, args.slice(2), args.slice(2).join(" "));
  }
});
