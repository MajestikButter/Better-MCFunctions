import { InternalFunction } from "..";

InternalFunction.register("greaterThanEqual", ["number", "number"], (args) => {
  return args[0] >= args[1];
});
