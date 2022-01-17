# Commands

## Score

`score get <selector> <objective> : number`

- Returns player score on objective

`score has <selector> <objective> : boolean`

- Returns whether player has score on objective

## Inventory

`inventory get id <slot> <selector> : string`

- Returns the identifier of the item at the specified slot

`inventory get amount <slot> <selector> : number`

- Returns the amount of items at the specified slot

`inventory get amount <slot> <selector> <itemId> [itemDataValue] : number`

- Returns the amount of items at the specified slot

`inventory has <slot> <selector> : boolean`

- Returns whether the slot has an item

`inventory has <slot> <selector> <itemId> [itemDataValue] : boolean`

- Returns whether the slot has a specific item

## Chat Commands

`chatcommand register <commandName> <functionName> : void`

- Registers a chat command

## Functions

`mcfunction <selector> <functionName> <...arguments: any[]> : any`

# Logic

## Comparisons

`equals(val0: any, val1: any): boolean`

- Returns true if the arguments match

`not(val0: boolean): boolean`

- Returns the inverse of the boolean
- ex) true returns false, false returns true

`greaterThan(val0: number, val1: number): boolean`

- Returns true if val0 is greater than val1

`greaterThanEqual(val0: number, val1: number): boolean`

- Returns true if val0 is greater than or equal to val1

`lessThan(val0: number, val1: number): boolean`

- Returns true if val0 is less than val1

`lessThanEqual(val0: number, val1: number): boolean`

- Returns true if val0 is less than or equal to val1

## Math

`floor(val: number): number`

- Returns the floored version of the number

`round(val: number): number`

- Returns the rounded version of the number

`ceil(val: number): number`

- Returns the ceiled version of the number

`clamp(val: number, min: number, max: number): number`

- Returns the clamped version of the number between the minimum and maximum values (inclusive)

`min(...vals: number[]): number`

- Returns the smallest number of the arguments

`max(...vals: number[]): number`

- Returns the largest number of the arguments

## Operators

| Operator | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| +        | Adds the number on the right to the number on the left                              |
| -        | Subtracts the number on the right from the number on the left                       |
| \*       | Multiplies the number on the left by the number on the right                        |
| /        | Divides the number on the left by the number on the right                           |
| %        | Divides the number on the left by the number on the right and returns the remainder |
