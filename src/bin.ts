/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Converts a base 2 number to a base 10 number.
export function binToDec(binaryNumber: string): string {
  const origDigitsList: Array<string> = binaryNumber.split('');
  const digitsList: Array<string> = origDigitsList.reverse();
  const lenDigitsList: number = digitsList.length;
  let decimalSum: number = 0;
  for (let i: number = 0; i < lenDigitsList; i++) {
    if (digitsList[i] == '1') {
      const toAdd: number = Math.pow(2, i);
      decimalSum = decimalSum + toAdd;
    } 
    else {
      // Do nothing.
    }
  }
  return decimalSum.toString();
}

// Converts a base 10 number to a base 2 number.
export function decToBin(decimalNumber: number): string {
  const endChars: Array<string> = [];
  let dec: number = decimalNumber;
  const initItem: number = dec % 2;
  const startDigit: string = initItem.toString();
  endChars.push(startDigit);
  while (Math.floor(dec / 2) != 0) {
    dec = Math.floor(dec / 2);
    const itemOneToAdd: number = dec % 2;
    const itemTwoToAdd: string = itemOneToAdd.toString();
    endChars.push(itemTwoToAdd);
  }
  const reversedChars: Array<string> = endChars.reverse();
  const result: string = reversedChars.join('');
  return result;
}


// Exporting all functions.
export default {
  decToBin,
  binToDec
};
