import { InternalFunction } from "..";

InternalFunction.register("not", ["boolean"], (args) => {
  return !args[0];
});
