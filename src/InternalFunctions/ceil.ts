import { InternalFunction } from "..";

InternalFunction.register("ceil", ["number"], (args) => {
  const arg0 = args[0] as number;
  return Math.ceil(arg0);
});
