immport {getSeed } from '../HeuristicScene/HelperFunctions.js'
describe("HelperFunctions colors", () => {
	const tableGetSeed = [
		[{number: 0},{seed: 0.3853}],
		[{number: 1},{seed: 0.3072}],
		[{number: 10},{seed: 0.1297}],
		[{number: NaN}, {seed: NaN}],
		[{number: undefined}, {seed: NaN}]
	]
	test.each(tableGetSeed)("getSeed", (number) => {
		result = getSeed(number)
		expect(result).toEqual(expected.seed)
	})
	/*	( number ) {
	number += 1138;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
	}*/
	/*tableGetRandomColor = [
	[{ seedNumber: 0, scheme:  },{}]
	];*/
	test.todo("getRandomColor")

	/*( seedNumber, scheme, colorSchemes=colorSchemesConst ) {
	// seedNumber is the number to be randomized.
	// scheme is the scheme from the array of color arrays to use.

	// Note to self: by picking a number between 0 and 1 as the seed, 
	// multiplying by the array length,
	// it means you'll always pick a number in the array.

	// Non-random color scheme.
	// The % modulo operator ensures that the array starts again 
	// from zero when a larger than array.length number is fed.
	// 
	// This makes it cycle through the available color arrays, 
	// one after the other, and cycle when the array ends.
	let colorScheme = scheme % colorSchemes.length;

	// Store random color from that scheme.
	let colorFromScheme = Math.floor( seed( seedNumber ) * 
		colorSchemes[ colorScheme ][2].length );

	return colorSchemes[ colorScheme ][2][ colorFromScheme ];
	}*/

	test.todo("getDarkColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][0][0];
	}*/

	test.todo("getLightColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][1][0];
	}*/

})