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
    let alphabetString: string = 'abcdefghijklmnopqrstuvwxyz';
    let letterList: Array<string> = alphabetString.split('');
    for (let i: number = 0; i < letterList.length; i++){
        if (letter === letterList[i]){
            result = i + 1;
        }
        else {}
    }
    return result;
}

// Gets the letter from a supplied index.
// Returns an empty string if a letter cannot be found.
export function getLetterFromIndex(index: number): string{
    let result: string = '';
    let alphabetString: string = 'abcdefghijklmnopqrstuvwxyz';
    let letterList: Array<string> = alphabetString.split('');
    for (let i: number = 0; i < letterList.length; i++){
        let actualIndex = index - 1;
        if (actualIndex === i){
            result = letterList[i];
        }
        else {}
    }
    return result;
}

// Checks whether the supplied number is 
// a binary number and returns a boolean based on this.
export function isBin(expr: string): boolean {
  let charList: Array<string> = ['1','0'];
  let exprCharList: Array<string> = expr.split('');
  let result: boolean = true;
  for (let i: number = 0; i < exprCharList.length; i++){
    if (exprCharList[i] === charList[0]
      || exprCharList[i] === charList[1]) {}
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
	let alphabet: Array<string> = "123456789ABCDEF".split('');
	let numChars: Array<string> = hexNum.split('');
	for (let i: number = 0; i < numChars.length; i++){
		let numChar: string = numChars[i];
		if (alphabet.includes(numChar) === true){}
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
