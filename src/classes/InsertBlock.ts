import { validTypes } from "../types";
import { Parser } from "./Parser";

export class InsertBlock {
  contents: string;

  constructor(contents: string) {
    this.contents = contents;
  }

  run(vars: { [varName: string]: validTypes }) {
    return Parser.parseInsertBlock(this.contents, vars);
  }
}
