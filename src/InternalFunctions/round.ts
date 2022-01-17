import { InternalFunction } from "..";

InternalFunction.register("round", ["number"], (args) => {
  const arg0 = args[0] as number;
  return Math.round(arg0);
});
