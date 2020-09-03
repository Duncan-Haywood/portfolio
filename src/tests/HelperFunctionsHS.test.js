import * as consts from '../HeuristicScene/HelperFunctions.js'
describe("HelperFunctions colors", () => {
	describe("getSeed", () => {
		const tableGetSeed = [
			[{number: 0},{seed: 0.3853}],
			[{number: 1},{seed: 0.3072}],
			[{number: 10},{seed: 0.1297}],
		] 
		test.each(tableGetSeed)("getSeed: %j => %j", (props, expected) => {
			let result = consts.getSeed({number: props.number})
			// three decimal place equality
		})
		test("getSeed: {number: NaN} => {seed: NaN}", () => {
			let result = consts.getSeed({number: NaN})
			expect(result).toBeNaN() //three decimal place equality
		})
	}) 
	describe("getRandomColor", () => {
		const tableGetRandomColor = [
			[{seedNumber: 1, schemeIndex: 1},{randomColor: undefined}]
		]
		test.each(tableGetRandomColor)("getRandomColor: %j => %j", (props, expected) => {
			let result = consts.getRandomColor(props);
			expect(result).toEqual(expected.randomColor)
		})
		test.todo("getRandomColor")

	})
	describe("getDarkColor", () => {
		const tableGetDarkColor = [
			[{schemeIndex: 0}, {lightColor: '#aa3f00'}],
			[{schemeIndex: 1}, {lightColor: '#2d7a00'}],
			[{schemeIndex: 2}, {lightColor: '#ff9f60'}],
			[{schemeIndex: 3}, {lightColor: '#1115ff'}],
			[{schemeIndex: 4}, {lightColor: '#6a26ff'}],
			[{schemeIndex: 5}, {lightColor: '#470064'}]
		]

		test.each(tableGetDarkColor)("getDarkColor: %j => %j", (props, expected) => {
			let result = consts.getDarkColor(props);
			expect(result).toEqual(expected.darkColor)
		})

	})  
	
	describe("getLightColor", () => {
		const tableGetLightColor = [
			[{schemeIndex: 0}, {lightColor: '#faffc4'}],
			[{schemeIndex: 1}, {lightColor: '#efffc2'}],
			[{schemeIndex: 2}, {lightColor: '#00113c'}],
			[{schemeIndex: 3}, {lightColor: '#fffab9'}],
			[{schemeIndex: 4}, {lightColor: '#bcfffe'}],
			[{schemeIndex: 5}, {lightColor: '#ecffc7'}]
		]

		test.each(tableGetLightColor)("getLightColor: %j => %j", (props, expected) => {
			let result = consts.getLightColor(props);
			expect(result).toEqual(expected.lightColor)
		})
	})
}) 