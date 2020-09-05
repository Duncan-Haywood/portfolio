import {HEURISTICS, COLOR_SCHEMES} from '../HeuristicScene/Constants.js';
import React from "react";
import { configure, shallow, mount } from "enzyme";
import * as mountain from '../HeuristicScene/MountainHeuristic.js';
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

describe("Mountain component", () => {
	const tableMountainTest = [
		[{className: "", currentHeuristicIndex: 0}],
		[{className: "", currentHeuristicIndex: 1}],
		[{className: "", currentHeuristicIndex: 2}],
		[{className: "", currentHeuristicIndex: HEURISTICS.length}],
	]

	describe("Shallow Rendering for Mountain:", () => {
		test.each(tableMountainTest)("renders shallowly %s", (props) => {
		shallow(<mountain.Mountain className={ props.className }
			currentHeuristicIndex={ props.currentHeuristicIndex } />)
		})
	})
	
	describe("Mountain renders without crashing", () => {
		test.each(tableMountainTest)('renders without crashing %s', (props) => {
			const div = document.createElement('div');
			ReactDOM.render(<mountain.Mountain className={props.className} currentHeuristicIndex={ props.currentHeuristicIndex } />, div);
			ReactDOM.unmountComponentAtNode(div);
		})

	})

	describe("Snapshots for Mountain", () => {
		test.each(tableMountainTest)('Snapshot for: %s', (props) => {
			const tree = renderer
		    .create(<mountain.Mountain className={undefined} currentHeuristicIndex={undefined} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
		})
	})
})
 
describe("Mountains Helper Functions", () =>{
	describe("getMgStyle", () =>{
		const tableGetMgStyle = [
			[{currentHeuristicIndex: NaN},{mgStyle: "NaN%"}],
			[{currentHeuristicIndex: ""},{mgStyle: "23.11816810582968%"}],
			[{currentHeuristicIndex: 0},{mgStyle: "23.11816810582968%"}],
			[{currentHeuristicIndex: 1},{mgStyle: "18.436509146813478%"}],
			[{currentHeuristicIndex: 2},{mgStyle: "58.96622154785291%"}]
		]
		test.each(tableGetMgStyle)("getMgStyle: %j", (props, expected) => {
			let result = mountain.getMgStyle(props)
			expect(result).toEqual(expected.mgStyle)
		})
	})
	
	
	const tableDisplayMountain = [
		[{currentHeuristicIndex: 0}],
		[{currentHeuristicIndex: 1}],
		[{currentHeuristicIndex: 2}],
		[{currentHeuristicIndex: 3}],
		[{currentHeuristicIndex: HEURISTICS.length}]
	]
	describe("displayMountainBG", () => {
		describe("Shallow Rendering for displayMountainBG:", () => {
			test.each(tableDisplayMountain)("renders shallowly %s", (props) => {
			shallow(<mountain.displayMountainBG
				currentHeuristicIndex={ props.currentHeuristicIndex } />)
			})
		})
		
		describe("displayMountainBG renders without crashing", () => {
			test.each(tableDisplayMountain)('displayMountainBG renders without crashing: %s', (props) => {
				const div = document.createElement('div');
				ReactDOM.render(<mountain.displayMountainBG currentHeuristicIndex={ props.currentHeuristicIndex } />, div);
				ReactDOM.unmountComponentAtNode(div);
			})

		})

		describe("Snapshots for displayMountainBG", () => {
			test.each(tableDisplayMountain)('Snapshot for: %s', (props) => {
				const tree = renderer
			    .create(<mountain.displayMountainBG currentHeuristicIndex={props.currentHeuristicIndex} />)
				.toJSON();
			expect(tree).toMatchSnapshot();
			})
		})

	})
	describe("displayMountainFG", () => {
		describe("Shallow Rendering for displayMountainFG:", () => {
			test.each(tableDisplayMountain)("renders shallowly %s", (props) => {
			shallow(<mountain.displayMountainFG
				currentHeuristicIndex={ props.currentHeuristicIndex } />)
			})
		})
		
		describe("displayMountainFG renders without crashing", () => {
			test.each(tableDisplayMountain)('displayMountainFG renders without crashing: %s', (props) => {
				const div = document.createElement('div');
				ReactDOM.render(<mountain.displayMountainFG currentHeuristicIndex={ props.currentHeuristicIndex } />, div);
				ReactDOM.unmountComponentAtNode(div);
			})

		})

		describe("Snapshots for displayMountainFG", () => {
			test.each(tableDisplayMountain)('Snapshot for: %s', (props) => {
				const tree = renderer
			    .create(<mountain.displayMountainFG currentHeuristicIndex={props.currentHeuristicIndex} />)
				.toJSON();
			expect(tree).toMatchSnapshot();
			})
		})

	})
	
})