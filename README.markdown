# ZEPPO :crystal_ball: :guitar:

![GitHub CI](https://github.com/angeldollface/zeppo/actions/workflows/deno.yml/badge.svg)

***Convert between numbers of different bases.*** :crystal_ball: :guitar:

## ABOUT :books:

Roughly a year ago, I set myself the challenge of implementing a set of functions that could convert between numbers of different bases. I implemented this in Dart and decided to re-write this implementation in Javascript. The Dart implementation can be found [here](https://github.com/angeldollface/harpo). The bases this library handles are: base 10, base 2, and base 16.

## USAGE :hammer:

### APIs

*Zeppo* offers the following functions:

- `letterIndex(letter)`: Gets the index of a letter in the alphabet. Returns zero if the letter isn't in the alphabet.
- `getLetterFromIndex(index)`: Gets the letter from a supplied index. Returns an empty string if a letter cannot be found.
- `binToDec(binaryNumber)`: Converts a base 2 number to a base 10 number.
- `decToBin(decimalNumber)`: Converts a base 10 number to a base 2 number.
- `hexToDec(hexNumber)`: Converts a base 16 number to a base 10 number.
- `isBin(expr)`: Checks whether the supplied string is a binary number or not.
- `isInt(expr)`: Checks whether the supplied string is an integer or not.
- `isHex(expr)`: Checks whether the supplied string is a hexadecimal number or not.

### Use *Zeppo* in a Deno project :t-rex:

- 1.) Create a Typescript file.

- 2.) To use *Zeppo* in a Deno project, add this line of code to your Typescript file(s) (`functionName` represents any of the function signatures above.):

```Typescript
import { functionName } from 'https://deno.land/x/zeppo/mod.ts';
```

- 3.) You can now use any of the function signatures above.

- 4.) You can run the Typescript file with Deno using this command (`your_script.ts` represents your Typescript file.):

```bash
deno run your_script.ts
```

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Upload to NPM.

### Version 1.1.0

- New license file.
- Better documentation.

### Version 1.2.0

- Updated documentation.
- Added a function to check whether a string is a binary number or not.

### Version 1.3.0

- Updated documentation.
- Added a function to check whether a string is an integer or not.

### Version 1.4.0

- Updated documentation.
- Updated, published, and uploaded under my new name.

### Version 1.5.0

- Fixed some administrative issues.
- Fixed some formatting issues.

### Version 1.6.0

- Updated `export` statement.
- Updated documentation for Typescript.

### Version 1.7.0

- Added support for Deno.

### Version 1.8.0

- Removed the `reverseArray` function.
- Removed the `testAll` function.
- Added unit tests with Deno.
- Added a function to check whether a string is a hexadecimal number or not.
- Rewrote the project in Typescript.
- Migrated this project from Node.js to Deno.
- Relicensed the project under the [DSL v1](https://github.com/angeldollface/doll-software-license).

## NOTE :scroll:

- *Zeppo :crystal_ball: :guitar:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the [DSL v1](https://github.com/angeldollface/doll-software-license).
