import { world } from "mojang-minecraft";
import MCFunction, { InternalCommand } from "..";

const commands: {
  [cmd: string]: MCFunction;
} = {};

InternalCommand.register(
  "chatcommand",
  {
    register: ["string", "string"],
  },
  (target, args) => {
    const func = MCFunction.get(args[2] as string);
    if (!func) throw new Error("Supplied function does not exist");
    commands[args[1] as string] = func;
  }
);

world.events.beforeChat.subscribe((evd) => {
  const args = evd.message.split(" ");
  const cmd = args[0];
  const func = commands[cmd];
  let vars = {};
  args.slice(1).forEach((v, i) => {
    vars[`arg${i}`] = v;
  });
  if (func) {
    evd.cancel = true;
    func.run(evd.sender, vars);
  }
});
