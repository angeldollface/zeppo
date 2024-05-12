/*
ZEPPO.JS by Alexander Abraham, 
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

// Converts a base 2 number to a base 10 number.
export function binToDec(binaryNumber: string): string {
    let origDigitsList: Array<string> = binaryNumber.split('');
    let digitsList: Array<string> = origDigitsList.reverse();
    var lenDigitsList: number = digitsList.length;
    var decimalSum: number = 0;
    for (let i: number = 0; i < lenDigitsList; i++) {
      if (digitsList[i] == '1') {
        let toAdd: number = Math.pow(2, i);
        decimalSum = decimalSum + toAdd;
      } else {}
    }
    let result = decimalSum.toString();
    return result;
}

// Converts a base 10 number to a base 2 number.
export function decToBin(decimalNumber: number): string {
    let endChars: Array<string> = [];
    let dec: number = decimalNumber;
    let initItem: number = dec % 2;
    var startDigit: string = initItem.toString();
    endChars.push(startDigit);
    while (Math.floor(dec / 2) != 0) {
      dec = Math.floor(dec / 2);
      let itemOneToAdd: number = dec % 2;
      var itemTwoToAdd: string = itemOneToAdd.toString();
      endChars.push(itemTwoToAdd);
    }
    let reversedChars: Array<string> = endChars.reverse();
    let result: string = reversedChars.join('');
    return result;
}

// Converts a base 16 number to a base 10 number.
export function hexToDec(hexNumber: string): string {
    let base: number = 16;
    let result: number = 0;
    let digitSetString: string = '0123456789ABCDEF';
    let digitSet: Array<string> = digitSetString.split('');
    let hexCharsBase: Array<string> = hexNumber.split('');
    let hexChars: Array<string> = hexCharsBase.reverse();
    for (let i: number = 0; i < hexChars.length; i++) {
      let hexChar: string = hexChars[i];
      if (digitSet.includes(hexChar) === true) {
        let posMul: number = digitSet.indexOf(hexChar);
        let posPower: number = Math.pow(base, i);
        let posProduct: number = posMul * posPower;
        result = result + posProduct;
      } else {
        throw 'Illegal character found!';
      }
    }
    return result.toString();
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
  let result: boolean = false;
  if (!Number.isNaN(expr) === true) {}
  else {
      result = true;
  }
  return result;
}

// Tests all of the above.
export function testAll(){
  let testArray = [1,2,3,4];
  let testLetter = 'b';
  console.log(letterIndex(testLetter));
  console.log(getLetterFromIndex(letterIndex(testLetter)));
  let binaryNum = '10101';
  console.log(binToDec(binaryNum));
  console.log(decToBin(21));
  let testHexNum = 'FF7BAC';
  let testBinNum = '1010101';
  let impostorBin = '1010101A';
  let testInt = '10';
  let impostorInt = 'AB';
  console.log(hexToDec(testHexNum));
  console.log(isBin(testBinNum));
  console.log(isBin(impostorBin));
  console.log(isInt(testInt));
  console.log(isInt(impostorInt));
}

// Exporting all functions.
export default {
    decToBin,
    binToDec,
    letterIndex,
    getLetterFromIndex,
    hexToDec,
    isBin,
    isInt,
    testAll
};
