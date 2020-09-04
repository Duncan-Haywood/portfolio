import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Quote } from '../HeuristicScene/QuoteHeuristic.js'
import Adapter from "enzyme-adapter-react-16";
import {HEURISTICS, INTRO} from '../HeuristicScene/Constants.js'
import ReactDOM from "react-dom"
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });




const tableQuoteTest = [
	[{currentHeuristicIndex: 1, heuristic: HEURISTICS[0]},{}],
	[{currentHeuristicIndex: "", heuristic: INTRO},{}],
	[{currentHeuristicIndex: 2, heuristic: HEURISTICS[1]},{}],
	[{currentHeuristicIndex: HEURISTICS.length, heuristic: HEURISTICS[HEURISTICS.length-1]},{}]
]


describe("Quote component", () => {
	// let className = "heuristic__primary";
	// let currentHeuristicIndex = 1;
	describe("Quote renders shallowly", () => {
		test.each(tableQuoteTest)("renders shallowly: %s", (props) => {
			shallow(<Quote currentHeuristicIndex={ props.currentHeuristicIndex } heuristic={ props.heuristic } />)
		})
	})
	
	describe("Quote renders without crashing", () => {
		test.each(tableQuoteTest)('renders without crashing %s', (props) => {
			const div = document.createElement('div');
			ReactDOM.render(<Quote currentHeuristicIndex={ props.currentHeuristicIndex } heuristic={ props.heuristic } />, div);
			ReactDOM.unmountComponentAtNode(div);
		})

	})
	describe("Quote snapshots", () => {
		test.each(tableQuoteTest)('Snapshot for: %s', (props) => {
			const tree = renderer
		    .create(<Quote currentHeuristicIndex={ props.currentHeuristicIndex } heuristic={ props.heuristic } />)
			.toJSON();
		expect(tree).toMatchSnapshot();
		})

	})

})
