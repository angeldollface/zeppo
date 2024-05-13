/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

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

// Exporting the "hexToDec"
// function.
export default hexToDec;
