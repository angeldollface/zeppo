/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Importing
// the functions
// for handling
// hexadecimal numbers.
export {
	hexToDec
} from './src/hex.ts';

// Importing
// the functions
// for handling
// binary numbers.
export {
	binToDec,
	decToBin
} from './src/bin.ts';

// Importing utility
// functions for
// this module.
export {
	letterIndex,
	isBin,
	isHex,
	isInt,
	getLetterFromIndex
} from './src/utils.ts';
