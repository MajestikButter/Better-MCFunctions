import { Entity } from "mojang-minecraft";
import { Parser } from "./Parser";
import { Utils } from "./Utils";

export class MCFunction {
  private static functions: {
    [id: string]: MCFunction;
  } = {};

  static register(id: string, contents: string) {
    this.functions[id] = new this(contents);
  }

  static get(id: string) {
    return this.functions[id];
  }

  rawContents: string;
  parsed: ReturnType<typeof Parser["parse"]>;

  constructor(contents: string) {
    this.rawContents = contents;
    this.parsed = Parser.parse(contents);
  }

  run(target: Entity, vars = {}) {
    this.parsed.forEach((line) => {
      let vArgs = Parser.insertArgArray(line.args, vars);
      const cmd = vArgs[0] as string;
      vArgs = vArgs.slice(1);
      const argStr = vArgs.join(" ");

      switch (line.type) {
        case "varAssignment": {
          try {
            vars[line.varName] = Utils.cmdRunner(target, cmd, vArgs, argStr);
          } catch {
          }
          break;
        }
        case "command": {
          try {
            Utils.cmdRunner(target, cmd, vArgs, argStr);
          } catch {}
          break;
        }
        default: {
          throw new Error("Unexpected line type");
        }
      }
    });
  }
}
