import { InternalFunction } from "..";

InternalFunction.register("min", ["number..."], (args) => {
  return Math.min(...(args as number[]));
});
