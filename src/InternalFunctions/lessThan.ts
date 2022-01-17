import { InternalFunction } from "..";

InternalFunction.register("lessThan", ["number", "number"], (args) => {
  return args[0] < args[1];
});
