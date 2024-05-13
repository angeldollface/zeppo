/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import * as zeppo from './mod.ts';
import { assertEquals } from "@std/assert";

Deno.test(
	"Testing the \"letterIndex\" function.",
	() => {
		assertEquals(zeppo.letterIndex("c"),(3));
	}
);

Deno.test(
	"Testing the \"getLetterFromIndex\" function.",
	() => {
		assertEquals(zeppo.getLetterFromIndex(3),"c");
	}
);

Deno.test(
	"Testing the \"binToDec\" function.",
	() => {
		assertEquals(zeppo.binToDec("10101"),"21");
	}
);

Deno.test(
	"Testing the \"decToBin\" function.",
	() => {
		assertEquals(zeppo.decToBin(21),"10101");
	}
);

Deno.test(
	"Testing the \"hexToDec\" function.",
	() => {
		assertEquals(zeppo.hexToDec("FF7BAC"),"16743340");
	}
);

Deno.test(
	"Testing the \"isBin\" function. (true case)",
	() => {
		assertEquals(zeppo.isBin("101"),true);
	}
);

Deno.test(
	"Testing the \"isBin\" function. (false case)",
	() => {
		assertEquals(zeppo.isBin("101A"),false);
	}
);

Deno.test(
	"Testing the \"isInt\" function. (false case)",
	() => {
		assertEquals(zeppo.isInt("AC"),false);
	}
);

Deno.test(
	"Testing the \"isInt\" function. (true case)",
	() => {
		assertEquals(zeppo.isInt("10"),true);
	}
);

Deno.test(
	"Testing the \"isHex\" function. (true case)",
	() => {
		assertEquals(zeppo.isHex("FF7BAC"),true);
	}
);

Deno.test(
	"Testing the \"isHex\" function. (false case)",
	() => {
		assertEquals(zeppo.isHex("FF7BAX"), false);
	}
);
