import { Entity } from "mojang-minecraft";
import { argTree, cmdCallback, validTypes } from "../types";

export class InternalCommand {
  private static commands: {
    [id: string]: InternalCommand;
  } = {};

  static register(id: string, argTree: argTree, func: cmdCallback) {
    this.commands[id] = new this(argTree, func);
  }

  static get(id: string) {
    return this.commands[id];
  }

  argTree: argTree;
  func: cmdCallback;

  constructor(argTree: argTree, func: cmdCallback) {
    this.argTree = argTree;
    this.func = func;
  }

  private verifyArgs(args: validTypes[], path: number[]) {
    // const getTo = (l: number, c: argTree) => {
    //   if (path[l + 1]) getTo(l + 1, c);
    //   return c[path[l]];
    // };
    // let curr = this.argTree;
    // if (path.length) curr = getTo(0, this.argTree);
    // const keys = Object.keys(curr);
    // for (let i = 0; i < keys.length; i++) {
    //   let k = keys[i];
    //   let v = curr[k];
    //   console.log(v);
    // }
    // if (Array.isArray(curr)) {
    // }
  }

  run(executor: Entity, args: validTypes[], argStr: string) {
    // this.verifyArgs(args, []);
    return this.func(executor, args, argStr);
  }
}