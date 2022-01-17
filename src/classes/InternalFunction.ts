import { funcCallback, intFuncArg, validTypes } from "../types";

export class InternalFunction {
  private static functions: {
    [id: string]: InternalFunction;
  } = {};

  static register(id: string, args: intFuncArg[], func: funcCallback) {
    this.functions[id] = new this(args, func);
  }

  static get(id: string) {
    return this.functions[id];
  }

  args: intFuncArg[];
  func: funcCallback;

  constructor(args: intFuncArg[], func: funcCallback) {
    this.args = args;
    this.func = func;
  }

  run(args: validTypes[]) {
    return this.func(args);
  }
}
