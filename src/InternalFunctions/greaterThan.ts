import { InternalFunction } from "..";

InternalFunction.register("greaterThan", ["number", "number"], (args) => {
  return args[0] > args[1];
});
