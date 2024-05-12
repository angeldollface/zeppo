/*
ZEPPO.JS by Alexander Abraham,
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAll = exports.isInt = exports.isBin = exports.hexToDec = exports.decToBin = exports.binToDec = exports.getLetterFromIndex = exports.letterIndex = void 0;
// Gets the index of a letter in the alphabet.
// Returns zero if the letter isn't in the 
// alphabet.
function letterIndex(letter) {
    let result = 0;
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let letterList = alphabetString.split('');
    for (let i = 0; i < letterList.length; i++) {
        if (letter === letterList[i]) {
            result = i + 1;
        }
        else { }
    }
    return result;
}
exports.letterIndex = letterIndex;
// Gets the letter from a supplied index.
// Returns an empty string if a letter cannot be found.
function getLetterFromIndex(index) {
    let result = '';
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let letterList = alphabetString.split('');
    for (let i = 0; i < letterList.length; i++) {
        let actualIndex = index - 1;
        if (actualIndex === i) {
            result = letterList[i];
        }
        else { }
    }
    return result;
}
exports.getLetterFromIndex = getLetterFromIndex;
// Converts a base 2 number to a base 10 number.
function binToDec(binaryNumber) {
    let origDigitsList = binaryNumber.split('');
    let digitsList = origDigitsList.reverse();
    var lenDigitsList = digitsList.length;
    var decimalSum = 0;
    for (let i = 0; i < lenDigitsList; i++) {
        if (digitsList[i] == '1') {
            let toAdd = Math.pow(2, i);
            decimalSum = decimalSum + toAdd;
        }
        else { }
    }
    let result = decimalSum.toString();
    return result;
}
exports.binToDec = binToDec;
// Converts a base 10 number to a base 2 number.
function decToBin(decimalNumber) {
    let endChars = [];
    let dec = decimalNumber;
    let initItem = dec % 2;
    var startDigit = initItem.toString();
    endChars.push(startDigit);
    while (Math.floor(dec / 2) != 0) {
        dec = Math.floor(dec / 2);
        let itemOneToAdd = dec % 2;
        var itemTwoToAdd = itemOneToAdd.toString();
        endChars.push(itemTwoToAdd);
    }
    let reversedChars = endChars.reverse();
    let result = reversedChars.join('');
    return result;
}
exports.decToBin = decToBin;
// Converts a base 16 number to a base 10 number.
function hexToDec(hexNumber) {
    let base = 16;
    let result = 0;
    let digitSetString = '0123456789ABCDEF';
    let digitSet = digitSetString.split('');
    let hexCharsBase = hexNumber.split('');
    let hexChars = hexCharsBase.reverse();
    for (let i = 0; i < hexChars.length; i++) {
        let hexChar = hexChars[i];
        if (digitSet.includes(hexChar) === true) {
            let posMul = digitSet.indexOf(hexChar);
            let posPower = Math.pow(base, i);
            let posProduct = posMul * posPower;
            result = result + posProduct;
        }
        else {
            throw 'Illegal character found!';
        }
    }
    return result.toString();
}
exports.hexToDec = hexToDec;
// Checks whether the supplied number is 
// a binary number and returns a boolean based on this.
function isBin(expr) {
    let charList = ['1', '0'];
    let exprCharList = expr.split('');
    let result = true;
    for (let i = 0; i < exprCharList.length; i++) {
        if (exprCharList[i] === charList[0]
            || exprCharList[i] === charList[1]) { }
        else {
            result = false;
        }
    }
    return result;
}
exports.isBin = isBin;
// A function to check whether a string
// is an integer.
function isInt(expr) {
    let result = false;
    if (!Number.isNaN(expr) === true) { }
    else {
        result = true;
    }
    return result;
}
exports.isInt = isInt;
// Tests all of the above.
function testAll() {
    let testArray = [1, 2, 3, 4];
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
exports.testAll = testAll;
// Exporting all functions.
exports.default = {
    decToBin,
    binToDec,
    letterIndex,
    getLetterFromIndex,
    hexToDec,
    isBin,
    isInt,
    testAll
};
