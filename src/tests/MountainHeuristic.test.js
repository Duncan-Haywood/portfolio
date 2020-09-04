import {HEURISTICS, COLOR_SCHEMES} from '../HeuristicScene/Constants.js'
import React from "react";
import { configure, shallow, mount } from "enzyme";
import {Mountain, getMgStyle} from '../HeuristicScene/MountainHeuristic.js'
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });

const tableIndecies = [[""], [1], [HEURISTICS.length]]


describe("Mountains component", () => {
	// let className = "m";
	// let currentHeuristicIndex = 1;
	test("renders shallowly", (currentHeuristicIndex=1, className="m", colorSchemes=COLOR_SCHEMES ) => {
		shallow(<Mountain className={ className }
			currentHeuristicIndex={ currentHeuristicIndex } colorSchemes={ colorSchemes } />)
	})

	test.todo("renders shallowly with a variety of classNames and currentHeuristicIndexs")
	test.todo("renders fully")
})
 
describe("Mountains Helper Functions", () =>{
	const tableGetMgStyle = [
		[{currentHeuristicIndex: NaN},{mgStyle: "NaN%"}],
		[{currentHeuristicIndex: ""},{mgStyle: "23.11816810582968%"}],
		[{currentHeuristicIndex: 0},{mgStyle: "23.11816810582968%"}],
		[{currentHeuristicIndex: 1},{mgStyle: "18.436509146813478%"}],
		[{currentHeuristicIndex: 2},{mgStyle: "58.96622154785291%"}]
	]
	test.each(tableGetMgStyle)("getMgStyle: %j", (props, expected) => {
		let result = getMgStyle(props)
		expect(result).toEqual(expected.mgStyle)
	})
	const tableDisplayMountainBG = [
	[{}, {}]
	]
	test.todo("displayMountainBG")
	test.todo("displayMountainFG")
})