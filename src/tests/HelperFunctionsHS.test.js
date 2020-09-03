import * as helpers from '../HeuristicScene/HelperFunctions.js'
describe("HelperFunctions colors", () => {
	describe("getSeed", () => {
		const tableGetSeed = [
			[{number: 0},{seed: 0.3853}],
			[{number: 1},{seed: 0.3072}],
			[{number: 10},{seed: 0.1297}],
		] 
		test.each(tableGetSeed)("getSeed: %j => %j", (props, expected) => {
			let result = helpers.getSeed({number: props.number})
			// three decimal place equality
		})
		test("getSeed: {number: NaN} => {seed: NaN}", () => {
			let result = helpers.getSeed({number: NaN})
			expect(result).toBeNaN() //three decimal place equality
		})
	}) 
	describe("getRandomColor", () => {
		const tableGetRandomColor = [
			[{seedNumber: 0, schemeIndex: 0},{randomColor: "#eb9b00"}],
			[{seedNumber: 0, schemeIndex: 1},{randomColor: "#a8ab00"}],
			[{seedNumber: 12, schemeIndex: 12},{randomColor: "#b30074"}],
			[{seedNumber: 20, schemeIndex: 20},{randomColor: "#ff9a03"}],
			[{seedNumber: 21, schemeIndex: 3},{randomColor: "#fffab9"}],
			[{seedNumber:2, schemeIndex: 1},{randomColor: "#e3ff94"}],
			[{seedNumber: 5, schemeIndex: 5},{randomColor: "#ecffc7"}]
		]
		test.each(tableGetRandomColor)("getRandomColor: %j => %j", (props, expected) => {
			let result = helpers.getRandomColor(props);
			expect(result).toEqual(expected.randomColor)
		})
	}) 
	describe("getDarkColor", () => {
		const tableGetDarkColor = [
			[{schemeIndex: 0}, {darkColor: '#aa3f00'}],
			[{schemeIndex: 1}, {darkColor: '#2d7a00'}],
			[{schemeIndex: 2}, {darkColor: '#ff9f60'}],
			[{schemeIndex: 3}, {darkColor: '#1115ff'}],
			[{schemeIndex: 4}, {darkColor: '#6a26ff'}],
			[{schemeIndex: 5}, {darkColor: '#470064'}]
		]

		test.each(tableGetDarkColor)("getDarkColor: %j => %j", (props, expected) => {
			let result = helpers.getDarkColor(props);
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
			let result = helpers.getLightColor(props);
			expect(result).toEqual(expected.lightColor)
		})
	})
}) 