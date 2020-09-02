import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { HeuristicScene, getCurrentNextHeuristicScene } from '../HeuristicScene'
import * as HelperFunctions from '../HeuristicScene/HelperFunctions.js'
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS} from '../HeuristicScene/Constants.js'

configure({ adapter: new Adapter() });




const tableGetCurrentNextHeuristicScene = [
["", 1], 
[1, 2], 
[HEURISTICS.length, ""]]


describe("helperFunctions HeuristicScene", () => {
	
	test.each(tableGetCurrentNextHeuristicScene)("getCurrentNextHeuristicScene", (id="", expected=1, heuristics=HEURISTICS ) => {
		let resultNext = getCurrentNextHeuristicScene(id, heuristics)
		let expectedNext = expected
		expect(resultNext).toEqual(expectedNext )
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


