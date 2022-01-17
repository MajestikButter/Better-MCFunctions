import { InternalFunction } from "..";

InternalFunction.register("max", ["number..."], (args) => {
  return Math.max(...(args as number[]));
});
