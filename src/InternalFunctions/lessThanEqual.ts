import { InternalFunction } from "..";

InternalFunction.register("lessThanEqual", ["number", "number"], (args) => {
  return args[0] <= args[1];
});
