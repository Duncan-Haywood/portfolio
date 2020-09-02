import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Quote } from '../HeuristicScene/QuoteHeuristic.js'
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS, INTRO} from '../HeuristicScene/Constants.js'

configure({ adapter: new Adapter() });




const tableQuoteTest = [
	{currentHeuristic: 1, heuristic: HEURISTICS[0]},
	{currentHeuristic: "", heuristic: INTRO},
	{currentHeuristic: 2, heuristic: HEURISTICS[1]},
	{currentHeuristic: HEURISTICS.length, heuristic: HEURISTICS[HEURISTICS.length]},
]


describe("Quote component", () => {
	// let className = "heuristic__primary";
	// let currentHeuristic = 1;
	test.each(tableQuoteTest)("renders shallowly", (props) => {
		shallow(<Quote currentHeuristic={ props.currentHeuristic } 
					heuristic={ props.heuristic } />)
	})
	
	test.todo("renders shallowly with a variety of classNames and currentHeuristics")
	test.todo("renders shallowly")
	test.todo("renders fully")
})
