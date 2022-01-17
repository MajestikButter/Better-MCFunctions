import { InternalCommand, Utils } from "..";

InternalCommand.register("issuccess", ["string"], (target, args, argStr) => {
  const cmd = args[0] as string;
  try {
    Utils.cmdRunner(
      target,
      cmd,
      args.splice(1),
      argStr.slice(cmd.length).trimStart()
    );
    return true;
  } catch {
    return false;
  }
});
