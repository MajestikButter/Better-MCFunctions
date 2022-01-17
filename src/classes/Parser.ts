import { InternalFunction } from ".";
import { validTypes } from "../types";
import { InsertBlock } from "./InsertBlock";

export class Parser {
  static insertArgArray(
    args: (validTypes | InsertBlock)[],
    vars: {
      [varName: string]: validTypes;
    }
  ) {
    return args.map((v) => (v instanceof InsertBlock ? v.run(vars) : v));
  }

  static parseInsertBlock(
    insertStr: string,
    vars: {
      [name: string]: validTypes;
    }
  ) {
    insertStr = insertStr.replace(
      new RegExp(`\\$(${Object.keys(vars).join("|")})(?=$|\\W)`, "g"),
      (subStr, varName) => `${vars[varName]}`
    );

    insertStr = insertStr.replace(
      /(\w+)\s*([\+\*\-\/\%])\s*(\w+)/g,
      (subStr, left, operator, right) => {
        left = this.parseArg(left);
        right = this.parseArg(right);
        switch (operator) {
          case "+": {
            return left + right;
          }
          case "-": {
            return left - right;
          }
          case "*": {
            return left * right;
          }
          case "/": {
            return left / right;
          }
          case "%": {
            return left % right;
          }
          default: {
            return subStr;
          }
        }
      }
    );

    insertStr = insertStr.replace(/\\(.)/g, '$1');

    insertStr = insertStr.replace(/(\w+?)\((.*?)\)/g, (subStr, func, args) => {
      const intFunc = InternalFunction.get(func);
      if (intFunc)
        return `${intFunc.run(args.split(",").map((v) => this.parseArg(v)))}`;
      return subStr;
    });

    return this.parseArg(insertStr);
  }

  static parseArg(arg: string) {
    return arg.match(/[^-.\d]/)
      ? arg === "true"
        ? true
        : arg === "false"
        ? false
        : arg
      : (arg.match(/\./g) ?? []).length > 2
      ? arg
      : parseFloat(arg);
  }

  static parseArgs(str: string) {
    let parsingStr = false;
    let parsedStr = "";

    let insert = false;
    let insertStr = "";

    let curr = "";
    let res: (validTypes | InsertBlock)[] = [];
    let parsingArg = false;

    // Loop through string
    for (let i = 0; i < str.length; i++) {
      const c = str[i];

      if (c !== " ") parsingArg = true;
      if (!parsingArg) continue;

      const escaped = str[i - 1] === "\\";
      curr += c;

      // Parse quoted strings
      if (c === '"' && !escaped) {
        if (parsingStr) {
          // add string to arguments result on close
          res.push(parsedStr.replace(/\\(.)/g, '$1'));

          // reset variables
          parsingStr = false;
          parsedStr = "";
          curr = "";
          parsingArg = false;
        } else {
          if (curr.slice(0, -1)) {
            res.push(curr.slice(0, -1));
            curr = "";
          }
          parsingStr = true;
        }
        continue;
      }
      // throw if quotes never close
      if (parsingStr && i === str.length - 1)
        throw new Error(`Missing closing quote '"' for quoted string`);
      // add to quote string
      if (parsingStr) parsedStr += c;

      if (
        !parsingStr &&
        !insert &&
        c === "{" &&
        str[i - 1] === "%" &&
        str[i - 2] !== "\\"
      ) {
        insert = true;
        if (curr.slice(0, -2)) {
          res.push(curr.slice(0, -2));
          curr = "";
        }
        continue;
      } else if (!parsingStr && insert && c === "}" && !escaped) {
        // add result to arguments on insert close
        res.push(new InsertBlock(insertStr));

        // reset variables
        insert = false;
        insertStr = "";
        curr = "";
        parsingArg = false;
        continue;
      }
      // throw if parenthesis never close
      if (insert && i === str.length - 1)
        throw new Error(`Missing closing parenthesis ')' for insert block`);
      // add to insert string
      if (insert) insertStr += c;

      // parse and add current string to arguments
      if (!insert && !parsingStr && (c === " " || i === str.length - 1)) {
        curr = i === str.length - 1 ? curr : curr.slice(0, -1);
        let newArg = this.parseArg(curr);
        res.push(newArg);
        curr = "";
        parsingArg = false;
      }
    }
    return res;
  }

  static parseLine(line: string) {
    if (line.startsWith("$")) {
      let varName = line.slice(1).split(" ")[0];
      let equalInd = line.indexOf("=");

      if (equalInd < 0) {
        throw new Error(
          "An error occured while parsing an mcfunction, missing '=' in variable assignment"
        );
      }

      const parsed = this.parseArgs(line.slice(equalInd + 1));
      return {
        type: "varAssignment",
        raw: line,
        varName: varName,
        args: parsed,
      } as {
        type: "varAssignment";
        raw: string;
        varName: string;
        args: validTypes[];
      };
    } else {
      const parsed = this.parseArgs(line);
      return {
        type: "command",
        raw: line,
        args: parsed,
      } as {
        type: "command";
        raw: string;
        args: validTypes[];
      };
    }
  }

  static parse(contents: string) {
    // Split lines and filter comments/whitespace
    const lines = contents
      .split("\n")
      .filter((v) => !v.startsWith("#") && v.trim());
    const result: ReturnType<typeof Parser["parseLine"]>[] = [];
    for (let line of lines) {
      result.push(this.parseLine(line.trim()));
    }
    return result;
  }
}
