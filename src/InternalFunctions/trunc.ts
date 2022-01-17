import { InternalFunction } from "..";

InternalFunction.register("trunc", ["number"], (args) => {
  const arg0 = args[0] as number;
  return Math.trunc(arg0);
});
