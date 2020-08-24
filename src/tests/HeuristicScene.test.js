import React from "react";
import { configure, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { HeuristicScene, Mountain, Sky, Quote } from '../components/HeuristicScene.js'
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("HelperFunctions Navigation", () => {
	test.todo("has no instantiated tests yet, and we are passing it anyways")
	test.todo("homePageCaseNavigation") /*= (current, next, prev, heuristics)=>{
		if ( !current ) { 
		// home page has no id
			prev = heuristics.length; 
			// previous page button goes to the last page in the web app
			next = 1;
			// next page button goes to the first page in the app 
			// (the one with the entry)
		}
		return [prev, next]
	}*/
	//Child of handlesEdgeCaseNavigation -third layer into abstraction
	test.todo("firstPageCaseNavigation")/* = (current, prev)=>{
		if ( current === 1 ) { 
			//previous page button goes to home page
			prev = "";
		}
		return prev
	}*/
	//Child of handlesEdgeCaseNavigation -third layer into abstraction
	test.todo("lastPageCaseNavigation")/* = (current, next, heuristics) =>{
		if ( current === heuristics.length ) {
			//next page button goes to home pagge
			next = "";
		}
		return next
	}*/
	//Second Layer into Abstraction
	test.todo("handlesEdgeCaseNavigation")/* = (current, prev, next, heuristics)=>{
		[prev, next] = homePageCaseNavigation(current, next, prev, heuristics)
		prev = firstPageCaseNavigation(current, prev)	
		next = lastPageCaseNavigation(current, next, heuristics)
		return [prev, next]
	}*/
	//Second Layer into Abstraction
	test.todo("handlesStandardCaseNavigation")/*= (id)=>{
		let current = parseInt( id );
		let next = current + 1;
		let prev = current - 1;
		return [current, prev, next]
	}*/
	//Main Function of Use
	test.todo("determineNextPrevNavigation")/* = (id, heuristics)=>{
		let current, prev, next; //page indecies (integers) 
		[current, prev, next] = handlesStandardCaseNavigation(id);
		[prev, next] = handlesEdgeCaseNavigation(current, prev, next, heuristics);
		return [prev, next]*/
})
describe("HelperFunctions colors", () => {
	test.todo("seed")
	/*	( number ) {
	number += 1138;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
	}*/

	test.todo("getRandomColor")
	/*( seedNumber, scheme, colorSchemes=colorSchemesConst ) {
	// seedNumber is the number to be randomized.
	// scheme is the scheme from the array of color arrays to use.

	// Note to self: by picking a number between 0 and 1 as the seed, 
	// multiplying by the array length,
	// it means you'll always pick a number in the array.

	// Non-random color scheme.
	// The % modulo operator ensures that the array starts again 
	// from zero when a larger than array.length number is fed.
	// 
	// This makes it cycle through the available color arrays, 
	// one after the other, and cycle when the array ends.
	let colorScheme = scheme % colorSchemes.length;

	// Store random color from that scheme.
	let colorFromScheme = Math.floor( seed( seedNumber ) * 
		colorSchemes[ colorScheme ][2].length );

	return colorSchemes[ colorScheme ][2][ colorFromScheme ];
	}*/

	test.todo("getDarkColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][0][0];
	}*/

	test.todo("getLightColor")/*( scheme, colorSchemes=colorSchemesConst ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][1][0];
	}*/

})
describe("Navigation Component", () => {

	test.todo("renders shallowly")

	test.todo("renders fully")
})
describe("HeuristicScene component", () => {
	// const id = 1
	// test("renders shallowly", () => {
	// 	shallow(<HeuristicScene id/>)
	// });
	test.todo("renders shallowly")
	test.todo("renders fully")

})
describe("Mountains component", () => {
	let className = "m";
	let currentHeuristic = 1;
	test("renders shallowly", (/*className="m", currentHeuristic=1*/) => {
		shallow(<Mountain className="m"
			currentHeuristic="1" />)
	})
	test.todo("renders fully")
})
describe("Sky component", () => {
	test.todo("renders shallowly")
	test.todo("renders fully")
})
describe("Quote component", () => {
	test.todo("renders shallowly")
	test.todo("renders fully")
})
describe("Sounds component -- to be reworked", () => {
	test.todo("renders shallowly")
	test.todo("renders fully")
})

