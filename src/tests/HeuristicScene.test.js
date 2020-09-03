import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { HeuristicScene, getCurrentNextHeuristicScene } from '../HeuristicScene'
import * as HelperFunctions from '../HeuristicScene/HelperFunctions.js'
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS} from '../HeuristicScene/Constants.js'

configure({ adapter: new Adapter() });







describe("helperFunctions HeuristicScene", () => {
	describe("getCurrentNextHeuristicScene", () => {
		const tableGetCurrentNextHeuristicScene = [
			[{id: ""},{next: 1}], 
			[{id: 1},{next: 2}],
			[{id: HEURISTICS.length},{next: ""}]
		]

		test.each(tableGetCurrentNextHeuristicScene)("getCurrentNextHeuristicScene %j => %j", (props, expected) => {
			let result = getCurrentNextHeuristicScene({id: props.id})
			expect(result).toEqual(expected.next )
		})
	})
	

	test.todo("displayHeuristicScene")
	test.todo("handleClick")
	test.todo("determineCurrentHeuristicAndHeuristic")
})

describe("HeuristicScene component", () => {
	// const id = 1
	// test("renders shallowly", () => {
	// 	shallow(<HeuristicScene id/>)
	// });
	test.todo("renders shallowly")
	test.todo("renders fully")

})


