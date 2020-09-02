import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS} from '../HeuristicScene/Constants.js'
import {Sky, getPerspectiveAlgo, displaySky, addMultiItemsSky, getMultiSeeds, addItemSky} from '../HeuristicScene/SkyHeuristic.js'

configure({ adapter: new Adapter() });


const tableSkyTest = [
	{className: "", currentHeuristic: ""},
	{className: "", currentHeuristic: 1},
	{className: "", currentHeuristic: HEURISTICS.length},
]

describe("Sky component", () => {
	// let className = "heuristic__primary";
	// let currentHeuristic = 1;
	test.each(tableSkyTest)("renders shallowly", (props) => {
		shallow(<Sky className={ props.className }
			currentHeuristic={ props.currentHeuristic } />)
	})

	test.todo("renders shallowly with a variety of classNames and currentHeuristics")
	test.todo("renders fully")
})

describe("Sky Helper Functions", () => {

	test.todo("getPerspectiveAlgo")
	test.todo("displaySky")
	test.todo("addMultiItemsSky")
	test.todo("getMultiSeeds")
	test.todo("addItemSky")
})