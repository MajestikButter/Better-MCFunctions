import { InternalFunction } from "..";

InternalFunction.register("or", ["boolean..."], (args) => {
  return args.some((v) => v);
});
