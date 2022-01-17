import { InternalFunction } from "..";

InternalFunction.register("equals", ["any", "any"], (args) => {
  return args[0] == args[1];
});
