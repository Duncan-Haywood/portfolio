import {HEURISTICS, COLOR_SCHEMES} from '../HeuristicScene/Constants.js'
import React from "react";
import { configure, shallow, mount } from "enzyme";
import {Mountain, getMgStyle} from '../HeuristicScene/MountainHeuristic.js'
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });

const tableIndecies = [[""], [1], [HEURISTICS.length]]


describe("Mountains component", () => {
	// let className = "m";
	// let currentHeuristic = 1;
	test("renders shallowly", (currentHeuristic=1, className="m", colorSchemes=COLOR_SCHEMES ) => {
		shallow(<Mountain className={ className }
			currentHeuristic={ currentHeuristic } colorSchemes={ colorSchemes } />)
	})

	test.todo("renders shallowly with a variety of classNames and currentHeuristics")
	test.todo("renders fully")
})

describe("Mountains Helper Functions", () =>{
	const tableGetMgStyle = [
		[{currentHeuristic: undefined},{mgStyle: "NaN%"}],
		[{currentHeuristic: NaN},{mgStyle: "NaN%"}],
		[{currentHeuristic: ""},{mgStyle: "23.11816810582968%"}],
		[{currentHeuristic: 0},{mgStyle: "23.11816810582968%"}],
		[{currentHeuristic: 1},{mgStyle: "18.436509146813478%"}],
		[{currentHeuristic: 2},{mgStyle: "58.96622154785291%"}]
	]
	test.each(tableGetMgStyle)("getMgStyle", (props, expected) => {
		let result = getMgStyle(props.currentHeuristic)
		expect(result).toEqual(expected.mgStyle)
	})
	const tableDisplayMountainBG = [
	[{}, {}]
	]
	test.todo("displayMountainBG")
	test.todo("displayMountainFG")
})