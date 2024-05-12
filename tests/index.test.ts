/*
ZEPPO.JS by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import * as zeppo from '../src/index';

describe(
	"Testing the \"letterIndex\" function.",
	() => {
		test(
			"\"c\" should have index 3.", () => {
				expect(zeppo.letterIndex("c")).toBe(3);
			}
		);
	}
);

describe(
	"Testing the \"getLetterFromIndex\" function.",
	() => {
		test(
			"3 should yield \"c\".", () => {
				expect(zeppo.getLetterFromIndex(3)).toBe("c");
			}
		);
	}
);

describe(
	"Testing the \"binToDec\" function.",
	() => {
		test(
			"10101 should yield 21.", () => {
				expect(zeppo.binToDec("10101")).toBe("21");
			}
		);
	}
);

describe(
	"Testing the \"decToBin\" function.",
	() => {
		test(
			"21 should yield 10101.", () => {
				expect(zeppo.decToBin(21)).toBe("10101");
			}
		);
	}
);

describe(
	"Testing the \"hexToDec\" function.",
	() => {
		test(
			"FF7BAC should yield 16743340.", () => {
				expect(zeppo.hexToDec("FF7BAC")).toBe("16743340");
			}
		);
	}
);

describe(
	"Testing the \"isBin\" function. (true case)",
	() => {
		test(
			"101 should yield true.", () => {
				expect(zeppo.isBin("101")).toBe(true);
			}
		);
	}
);

describe(
	"Testing the \"isBin\" function. (false case)",
	() => {
		test(
			"101A should yield false.", () => {
				expect(zeppo.isBin("101A")).toBe(false);
			}
		);
	}
);

describe(
	"Testing the \"isInt\" function. (false case)",
	() => {
		test(
			"AC should yield false.", () => {
				expect(zeppo.isInt("AC")).toBe(false);
			}
		);
	}
);

describe(
	"Testing the \"isInt\" function. (true case)",
	() => {
		test(
			"10 should yield true.", () => {
				expect(zeppo.isInt("10")).toBe(true);
			}
		);
	}
);

describe(
	"Testing the \"isHex\" function. (true case)",
	() => {
		test(
			"FF7BAC should yield true.", () => {
				expect(zeppo.isHex("FF7BAC")).toBe(true);
			}
		);
	}
);

describe(
	"Testing the \"isHex\" function. (false case)",
	() => {
		test(
			"FF7BAX should yield false.", () => {
				expect(zeppo.isHex("FF7BAX")).toBe(false);
			}
		);
	}
);
