import { getSeed, getRandomColor } from '../HeuristicScene/HelperFunctions.js'
describe("HelperFunctions colors", () => {
	describe("getSeed", () => {
		const tableGetSeed = [
			[{number: 0},{seed: 0.3853}],
			[{number: 1},{seed: 0.3072}],
			[{number: 10},{seed: 0.1297}],
		] 
		test.each(tableGetSeed)("getSeed: %j => %j", (props, expected) => {
			let result = getSeed({number: props.number})
			expect(result).toBeCloseTo(expected.seed, 3) //three decimal place equality
		})
		test("getSeed: {number: NaN} => {seed: NaN}", () => {
			let result = getSeed({number: NaN})
			expect(result).toBeNaN() //three decimal place equality
		})
	})
	describe("getRandomColor", () => {
		const tableGetRandomColor = [
			[{seedNumber: 0.5, schemeIndex: 1},{randomColor: undefined}]
		]
		test.each(tableGetRandomColor)("getRandomColor: %j => %j", (props, expected) => {
			let result = getRandomColor(props);
			expect(result).toEqual(expected.randomColor)
		})

	})

	test.todo("getDarkColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][0][0];
	}*/

	test.todo("getLightColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][1][0];
	}*/

})