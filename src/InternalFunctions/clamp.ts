import { InternalFunction } from "..";

InternalFunction.register("clamp", ["number", "number", "number"], (args) => {
  return Math.min(
    Math.max(args[0] as number, args[1] as number),
    args[2] as number
  );
});
