import { InternalCommand } from "..";

InternalCommand.register(
  "return",
  ["boolean", "any..."],
  (target, args) => args[0]
);
