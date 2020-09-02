import {HEURISTICS, COLOR_SCHEMES} from '../HeuristicScene/Constants.js'
import React from "react";
import { configure, shallow, mount } from "enzyme";
import {Mountain} from '../HeuristicScene/MountainHeuristic.js'
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
		[{currentHeuristic: undefined},{mgStylye: NaN}],
		[{currentHeuristic: 1},{mgStylye: NaN}],
		[{currentHeuristic: ""},{mgStylye: NaN}],
	]
	test.todo("getMgStyle")
	const tableDisplayMountainBG = [
	[{}, {}]
	]
	test.todo("displayMountainBG")
	test.todo("displayMountainFG")
})