# ZEPPO :crystal_ball: :guitar:

![GitHub CI](https://github.com/angeldollface/zeppo/actions/workflows/node.yml/badge.svg)

***Convert between numbers of different bases.*** :crystal_ball: :guitar:

## ABOUT :books:

Roughly a year ago, I set myself the challenge of implementing a set of functions that could convert between numbers of different bases. I implemented this in Dart and decided to re-write this implementation in Javascript. The Dart implementation can be found [here](https://github.com/angeldollface/harpo). The bases this library handles are: base 10, base 2, and base 16.

## USAGE :hammer:

### Use *Zeppo* in a Node.js project

To use *Zeppo* in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev zeppo
```

Be sure to also add the `"type":"module"` flag to your project's manifest, `package.json`.

### Use *Zeppo* in a Node.js project with Typescript :gear:

Add a file called `zeppo.d.ts` to your project and put the following code inside it:

```Typescript
declare module 'zeppo';
```

### APIs

*Zeppo* offers the following functions:

- `reverseArray(array)`: Reverses the order of an array and returns the reversed array.
- `letterIndex(letter)`: Gets the index of a letter in the alphabet. Returns zero if the letter isn't in the alphabet.
- `getLetterFromIndex(index)`: Gets the letter from a supplied index. Returns an empty string if a letter cannot be found.
- `binToDec(binaryNumber)`: Converts a base 2 number to a base 10 number.
- `decToBin(decimalNumber)`: Converts a base 10 number to a base 2 number.
- `hexToDec(hexNumber)`: Converts a base 16 number to a base 10 number.
- `isBin(expr)`: Checks whether the supplied string is a binary number or not.
- `isInt(expr)`: Checks whether the supplied string is an integer or not.
- `testAll()`: Tests all of the above.

### Use *Zeppo* in a Deno project :t-rex:

To use *Zeppo* in a Deno project, add this line of code to your Typescript file(s):

```Typescript
import { functionName } from 'https://deno.land/x/zeppo@v.1.7.0/src/index.js';
```

`functionName` represents any of the function signatures above.

### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install *Zeppo*:

```bash
$ npm install --save-dev zeppo
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
// index.js
import * as zeppo from 'zeppo';

function main(){
  var myNum = 21;
  console.log(zeppo.decToBin(myNum));
  // Should output 21.
  console.log(zeppo.binToDec(decToBin(myNum)));
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) Optional: If you're not sure how to use this project, check out the example project.

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

## NOTE :scroll:

- *Zeppo :crystal_ball: :guitar:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
