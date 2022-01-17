---
title: Introduction - Getting Started
---

# Internal Commands

Internal commands are used to implement new functionality within the command system. These return results and provide access to normally inaccessible systems.

```
name set @s "Hello World"
```

# Variables

Variables can be used to store the result of an internal command.

```
$myName = name get @s
```

# Insert Blocks

Insert blocks allow you to perform functions and insert variables into command arguments.

```
$myName = name get @s
say my name is %{$myName}
```