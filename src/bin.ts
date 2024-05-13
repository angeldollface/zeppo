/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

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


// Exporting all functions.
export default {
    decToBin,
    binToDec
};
