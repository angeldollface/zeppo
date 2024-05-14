/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Gets the index of a letter in the alphabet.
// Returns zero if the letter isn't in the 
// alphabet.
export function letterIndex(letter: string): number{
  let result: number = 0;
  const alphabetString: string = 'abcdefghijklmnopqrstuvwxyz';
  const letterList: Array<string> = alphabetString.split('');
  for (let i: number = 0; i < letterList.length; i++){
    if (letter === letterList[i]){
      result = i + 1;
    }
    else {
      // Do nothing.
    }
  }
  return result;
}

// Gets the letter from a supplied index.
// Returns an empty string if a letter cannot be found.
export function getLetterFromIndex(index: number): string{
  let result: string = '';
  const alphabetString: string = 'abcdefghijklmnopqrstuvwxyz';
  const letterList: Array<string> = alphabetString.split('');
  for (let i: number = 0; i < letterList.length; i++){
    const actualIndex = index - 1;
    if (actualIndex === i){
      result = letterList[i];
    }
    else {
      // Do nothing.
    }
  }
  return result;
}

// Checks whether the supplied number is 
// a binary number and returns a boolean based on this.
export function isBin(expr: string): boolean {
  const charList: Array<string> = ['1','0'];
  const exprCharList: Array<string> = expr.split('');
  let result: boolean = true;
  for (let i: number = 0; i < exprCharList.length; i++){
    if (exprCharList[i] === charList[0]
      || exprCharList[i] === charList[1]) {
        // Do nothing.
      }
    else {
      result = false;
    }
  }
  return result;
}

// A function to check whether a string
// is an integer.
export function isInt(expr: string): boolean {
	return RegExp('[0-9]+').test(expr);
}

// A function to check whether a string
// is a hexadecimal number.
export function isHex(hexNum: string): boolean {
	let result: boolean = true;
	const alphabet: Array<string> = "123456789ABCDEF".split('');
	const numChars: Array<string> = hexNum.split('');
	for (let i: number = 0; i < numChars.length; i++){
		const numChar: string = numChars[i];
		if (alphabet.includes(numChar) === true){
      // Do nothing.
    }
		else {
			result = false;
		}
	}
	return result;
}

// Exporting all functions.
export default {
    letterIndex,
    getLetterFromIndex,
    isBin,
    isInt,
		isHex
};
