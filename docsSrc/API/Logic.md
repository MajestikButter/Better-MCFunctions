---
title: API - Logic
---

# Logic

Reference for all logic handling systems, including math, operators, and comparisons

## Comparisons

### `equals(val0: any, val1: any): boolean`

- Returns true if the arguments match

### `not(val0: boolean): boolean`

- Returns the inverse of the boolean
- ex) true returns false, false returns true

### `greaterThan(val0: number, val1: number): boolean`

- Returns true if val0 is greater than val1

### `greaterThanEqual(val0: number, val1: number): boolean`

- Returns true if val0 is greater than or equal to val1

### `lessThan(val0: number, val1: number): boolean`

- Returns true if val0 is less than val1

### `lessThanEqual(val0: number, val1: number): boolean`

- Returns true if val0 is less than or equal to val1

## Math

### `floor(val: number): number`

- Returns the floored version of the number

### `round(val: number): number`

- Returns the rounded version of the number

### `ceil(val: number): number`

- Returns the ceiled version of the number

### `trunc(val: number): number`

- Returns the trunced version of the number

### `clamp(val: number, min: number, max: number): number`

- Returns the clamped version of the number between the minimum and maximum values (inclusive)

### `min(...vals: number[]): number`

- Returns the smallest number of the arguments

### `max(...vals: number[]): number`

- Returns the largest number of the arguments

## Operators

| Operator | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| +        | Adds the number on the right to the number on the left                              |
| -        | Subtracts the number on the right from the number on the left                       |
| \*       | Multiplies the number on the left by the number on the right                        |
| /        | Divides the number on the left by the number on the right                           |
| %        | Divides the number on the left by the number on the right and returns the remainder |
