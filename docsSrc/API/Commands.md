---
title: API - Commands
---

# Commands

Reference for all built-in commands (excluding vanilla minecraft commands)
::: warning
Built-in commands cannot be used with `/execute`
:::

## Score

### `score get <selector> <objective: string> : number`

- Returns the player's score on the objective

```
$score = score has @s money
say I have %{$score} money
```

### `score has <selector> <objective: string> : boolean`

- Returns whether player has a score on the objective

```
$hasScore = score has @s money
if %{$hasScore} say I have a score on the money objective
```

## Name

### `name get <selector> : string`

- Returns the entity's name

```
$name = name get @e[type=vindicator,c=1]
say the nearest vindicator's name is %{$name}
```

### `name set <selector> <name: string> : void`

- Sets the names of the entities provided

```
name set @e[type=vindicator] "Johnny"
```

## Inventory

### `inventory get id <slot: number> <selector> : string`

- Returns the identifier of the item at the specified slot

```

$itemId = inventory get id 0 @s
say I have a %{$itemId} in my first hotbar slot

```

### `inventory get amount <slot: number> <selector> : number`

- Returns the amount of items at the specified slot

```

$items = inventory get amount 0 @s
say I have %{$items} items in my first hotbar slot

```

```

$items = inventory get amount -1 @s
say I have %{$items} items in my inventory

```

### `inventory get amount <slot: number> <selector> <itemId: string> [itemDataValue: number] : number`

- Returns the amount of items of a certain type at the specified slot

```

$sticks = inventory get amount 0 @s stick
say I have %{$sticks} sticks in my first hotbar slot

```

```

$sticks = inventory get amount -1 @s stick
say I have %{$sticks} sticks in my inventory

```

### `inventory has <slot: number> <selector> : boolean`

- Returns whether the slot has an item

```

$hasItem = inventory has 0 @s
if %{$hasItem} say I have an item in my first hotbar slot

```

### `inventory has <slot: number> <selector> <itemId: string> [itemDataValue] : boolean`

- Returns whether the slot has a specific item

```

$hasStick = inventory has 0 @s stick
if %{$hasStick} say I have a stick in my first hotbar slot

```

```

$hasStick = inventory has -1 @s stick
if %{$hasStick} say I have an stick in my inventory

```

## Chat Commands

### `chatcommand register <commandName: string> <functionName: string> : void`

- Registers a chat command

```

chatcommand register !examplecommand exampleFunction

```

## Functions

### `mcfunction <selector> <functionName: string> <...arguments: any[]> : any`

- Calls a defined mcfunction with the provided arguments

```

mcfunction @s exampleFunction 1 2 3 false true "hello world"

```

## Logic

### `if <condition: boolean> <command>` : void

- Runs a command if the condition boolean is true

```

$condition = return true
if %{$condition} say condition passed

```

### `issuccess <command>` : boolean

- Returns true if the provided command runs successfully

```

$success = issuccess testfor @a
if %{$success} say hi

```

### `return <argument: any>` : any

- Returns the supplied argument, useful for variable assignments

```

$x = return 1
$example = return %{$x \* 10}

```

```

```
