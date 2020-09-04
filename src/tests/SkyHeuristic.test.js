import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS} from '../HeuristicScene/Constants.js'
import * as sky from '../HeuristicScene/SkyHeuristic.js'

configure({ adapter: new Adapter() });


const tableSkyTest = [
	[{className: "", currentHeuristicIndex: "", id: 1}],
	[{className: "", currentHeuristicIndex: 1, id: 1}],
	[{className: "", currentHeuristicIndex: 2, id: 1}],
	[{className: "", currentHeuristicIndex: HEURISTICS.length, id: 1}],
]

describe("Sky component", () => {
	// let className = "heuristic__primary";
	// let currentHeuristicIndex = 1;
	describe("renders shallowly", () => {
		test.each(tableSkyTest)("renders shallowly %j", (props) => {
			// SkyComponent = Sky(props);
			shallow(<sky.Sky />);
		})
	})
	

	
	test.todo("renders fully")
})

describe("Sky Helper Functions", () => {
	describe("getPerspectiveAlgoNum", () => {
		const tableGetPerspectiveAlgoNum = [
			[{currentHeuristicIndex: 0}, {perspectiveAlgoNum: undefined}],
			[{currentHeuristicIndex: 1}, {perspectiveAlgoNum: undefined}],
			[{currentHeuristicIndex: 2}, {perspectiveAlgoNum: undefined}],
			[{currentHeuristicIndex: HEURISTICS.length}, {perspectiveAlgoNum: undefined}]
		]
		test.each(tableGetPerspectiveAlgoNum)("getPerspectiveAlgoNum %s", (props, expected) => {
			console.log(props)
			let result = sky.getPerspectiveAlgoNum(props);
			expect(result).toEqual(expected.perspectiveAlgoNum);
		})
		test.todo("getPerspectiveAlgoNum %s")
	})
	test.todo("displaySky")
	test.todo("addMultiItemsSky")
	test.todo("getMultiSeeds")
	test.todo("addItemSky")
	test.todo("getItemQualities")
})