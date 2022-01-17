import { Entity } from "mojang-minecraft";

export type argTree = argEnum[] | intFuncArg[] | intFuncArg[][] | argEnum;
export type cmdCallback = (
  target: Entity,
  args: validTypes[],
  argStr: string
) => validTypes | void;
export type funcCallback = (args: validTypes[]) => validTypes | void;
export type validTypes = number | string | boolean;
export type funcArgTypes = "number" | "string" | "boolean" | "any";
export type intFuncArg =
  | funcArgTypes
  | `${funcArgTypes}...`
  | `${funcArgTypes}?`;

export interface argEnum {
  [key: string]: argTree;
}
