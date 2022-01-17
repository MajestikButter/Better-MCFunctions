import { InternalFunction } from "..";

InternalFunction.register("floor", ["number"], (args) => {
  const arg0 = args[0] as number;
  return Math.floor(arg0);
});
