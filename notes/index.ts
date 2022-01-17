const cmdPrefix = "!";
const invalidCmdMessage = "§c${cmdName} is not a valid command!";
const ranks = ["§l§7[Member]"];
const prefix = [""];
const botAccountName = "";
const botCommands = [];
const config: {
  [category: string]: { id: string; price: number; data?: number }[];
} = {
  ores: [],
  drops: [],
  blocks: [],
  farming: [],
};

import { World, Commands } from "mojang-minecraft";

function runCommand(cmd: string, dimension = World.getDimension("overworld")) {
  try {
    return {
      result: Commands.run(),
      error: false,
    };
  } catch (err) {
    return {
      result: JSON.parse(err),
      error: true,
    };
  }
}

function getScore(selector: string, id: string) {
  let cmd = runCommand(`scoreboard players test ${selector} ${id} * *`);

  if (cmd.error) return 0;

  let result = cmd.result.statusMessage.match(/(?:\d...)/);
  return result ? parseInt(result[0]) : 0;
}

function addScore(selector: string, id: string, val: number) {
  runCommand(`scoreboard players add ${selector} ${this.id} ${val}`);
}

function sendMsg(selector: string, msg: string) {
  runCommand(
    `tellraw ${selector} {"rawtext":[{"text":${JSON.stringify(msg)}}]}`
  );
}

function sellCategory(selector: string, category: string) {
  let items = config[category];
  if (!items) return;

  const multiplier = getScore(selector, "multiplier") ?? 1;

  let total = 0;
  let oreCount = 0;
  for (let itemEntry of items) {
    const result = runCommand(
      `clear ${selector} ${itemEntry.id} ${
        itemEntry.data !== undefined ? itemEntry.data : -1
      }`
    );
    if (result.error) continue;
    const count: number = parseInt(
      result.result.statusMessage.split(", removing ")[1].replace(" items", "")
    );

    oreCount += count;
    total += itemEntry.price * count;
  }
  total *= multiplier;

  sendMsg(
    selector,
    `§6You Sold: §d${oreCount}x §lItems§r\n§7You just made: §l§a$${total}\n§r(Multiplier §7x${multiplier}§r)`
  );
  addScore(selector, "money", total);
}

World.events.beforeChat.subscribe((evd) => {
  evd.cancel = true;

  const plrName = evd.sender.nameTag;
  const fPlrName = `"${plrName}"`;
  const msg = evd.message as string;

  if (msg.startsWith(cmdPrefix)) {
    let args = msg.split(" ");
    let cmdName = args[0].slice(prefix.length);
    args = args.slice(1);
    switch (args[0]) {
      case "sell":
        {
          sellCategory(fPlrName, args[1]);
        }
        break;
      default:
        if (botCommands.includes(cmdName)) {
          sendMsg(
            `"${botAccountName}"`,
            JSON.stringify({
              type: "chatMessage",
              name: plrName,
              message: msg,
            })
          );
        } else
          sendMsg(
            fPlrName,
            `${invalidCmdMessage}`.replace(/\$\{cmdName\}/g, cmdName)
          );
    }
    return;
  }

  const hasTag = runCommand(`tag ${fPlrName} remove muted`);
  if (hasTag) {
    runCommand(`tag ${fPlrName} add muted`);
  } else {
    const rankStr = ranks[getScore(fPlrName, "rank")];
    const prefixStr = prefix[getScore(fPlrName, "prefix")];
    sendMsg(
      `@a[name=!${botAccountName}]`,
      `${prefixStr ? `${prefixStr} ` : ""}${rankStr} §r${plrName} §7> §r${msg}`
    );
    sendMsg(
      `"${botAccountName}"`,
      JSON.stringify({
        type: "chatMessage",
        name: plrName,
        message: msg,
      })
    );
  }
});
