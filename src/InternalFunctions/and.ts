import { InternalFunction } from "..";

InternalFunction.register("and", ["boolean..."], (args) => {
  return args.every((v) => v);
});
