"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zeppo_1 = __importDefault(require("zeppo"));
function main() {
    let myNum = 21;
    console.log(zeppo_1.default.decToBin(myNum));
    // Should output 21.
    console.log(zeppo_1.default.binToDec(decToBin(myNum)));
}
main();
