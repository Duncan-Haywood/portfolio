import {HEURISTICS} from '../HeuristicScene/Constants'
import { Navigation, homePageCaseNavigation, firstPageCaseNavigation, handlesEdgeCaseNavigation, lastPageCaseNavigation, determineNextPrevNavigation, handlesStandardCaseNavigation} from '../HeuristicScene/NavigationHeuristic.js'


describe("Navigation Component", () => {

	test.todo("renders shallowly")

	test.todo("renders fully")
})


describe("HelperFunctions Navigation", () => {
	test.todo("has few instantiated tests yet, and we are passing it anyways")
	test.todo("diplayNavigationArrowButton")
	test.todo("diplayNavigationCircleButtons")
	

	let tableHomePageCaseNavigation = [
		[{current: "", prev: NaN, next: NaN}, {prev: HEURISTICS.length, next: 1}],
		[{current: "", prev: HEURISTICS.length, next: 1}, {prev: HEURISTICS.length, next: 1}],
		[{current: "", prev: undefined, next: undefined}, {prev: HEURISTICS.length, next: 1}],
		[{current: 2, prev: 1, next: 3}, {prev: 1, next: 3}],
		[{current: 1, prev: 0, next: 2}, {prev: 0, next: 2}], 
		[{current: 1, prev: undefined, next: 2}, {prev: undefined, next: undefined}],
		[{current: 1, prev: NaN, next: 2}, {prev: NaN, next: 2}],
		[{current: HEURISTICS.length, prev: HEURISTICS.length-1, next: HEURISTICS.length+1}, {prev: HEURISTICS.length-1, next: HEURISTICS.length+1}] 
	]

	test.each(tableHomePageCaseNavigation)("homePageCaseNavigation", (props, expected) => {
		let result = homePageCaseNavigation(props)
		expect(result).toEqual(expected)
	})

	/*, (current="", next=1, prev=HEURISTICS.length)=>{

		expect()
	})*/
	/*, (current="", next=, prev, heuristics)=>{
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
	let tableFirstPageCaseNavigation = [
	[{current: "", prev: NaN}, {prev: NaN}],
	[{current: "", prev: HEURISTICS.length}, HEURISTICS.length],
	[{current: 2, prev: 1}, 1],
	[{current: 1, prev: 0}, ""], 
	[{current: 1, prev: undefined}, ""],
	[{current: 1, prev: NaN}, ""],
	[{current: HEURISTICS.length, prev: HEURISTICS.length-1}, HEURISTICS.length-1] 
	]

	test.each(tableFirstPageCaseNavigation)("firstPageCaseNavigation", (props, expected) => {
		let result = firstPageCaseNavigation(props.current, props.prev)
		expect(result).toEqual(expected)
	})



	//Child of handlesEdgeCaseNavigation -third layer into abstraction
	let tableLastPageCaseNavigation = [
	[{current: "", next: 1}, 1],
	[{current: 1, next: 2}, 2],
	[{current: HEURISTICS.length, next: HEURISTICS.length+1}, ""] 
	]

	test.each(tableLastPageCaseNavigation)("lastPageCaseNavigation", (props, expected) => {
		let result = lastPageCaseNavigation(props.current, props.next)
		expect(result).toEqual(expected)
	})/* = (current, next) =>{
		if ( current === heuristics.length ) {
			//next page button goes to home pagge
			next = "";
		}
		return next
	}*/
	//Second Layer into Abstraction
	let tableHandlesEdgeCaseNavigation = [
		[{current: "", prev: NaN, next: NaN}, {prev: HEURISTICS.length, next: 1}],
		[{current: "", prev: HEURISTICS.length, next: 1}, {prev: HEURISTICS.length, next: 1}],
		[{current: "", prev: undefined, next: undefined}, {prev: HEURISTICS.length, next: 1}],
		[{current: 2, prev: 1, next: 3}, {prev: 1, next: 3}],
		[{current: 1, prev: 0, next: 2}, {prev: 0, next: 2}], 
		[{current: 1, prev: undefined, next: 2}, {prev: "", next: 2}],
		[{current: 1, prev: NaN, next: 2}, {prev: "", next: 2}],
		[{current: HEURISTICS.length, prev: HEURISTICS.length-1, next: HEURISTICS.length+1}, {prev: HEURISTICS.length-1, next: ""}] 
	];
	test.each("handlesEdgeCaseNavigation", (props, expected) => {
		result = handlesEdgeCaseNavigation(props)
		expect(result).toEqual(expected)
	})/* = (current, prev, next, heuristics)=>{
		[prev, next] = homePageCaseNavigation(current, next, prev, heuristics)
		prev = firstPageCaseNavigation(current, prev)	
		next = lastPageCaseNavigation(current, next, heuristics)
		return [prev, next]
	}*/
	//for following table: id, expected=[current, prev, next]
	const tableHandlesStandardCaseNavigation = [
	[{id: ""}, [NaN,NaN,NaN]],
	[{id: 1}, [1,0,2]],
	[{id: 2}, [2,1,3]],
	[{id: HEURISTICS.length}, [HEURISTICS.length, HEURISTICS.length-1,HEURISTICS.length+1]]]
	
	test.each(tableHandlesStandardCaseNavigation)("handlesStandardCaseNavigation", (props, expected)=>{
		const returnedCurrentPrevNext = handlesStandardCaseNavigation(id);
		const expectedCurrentPrevNext = expected;
		expect(returnedCurrentPrevNext).toEqual(expectedCurrentPrevNext);
	});
	
	// for each testing table, [props, expectedOutput=[prev,next]]
	const tableDetermineNextPrevNavigation = [
	[{"id": ""}, [HEURISTICS.length,1]],
	[{"id": 1}, ["",2]],
	[{"id": 2}, [1,3]],
	[{"id": HEURISTICS.length}, [HEURISTICS.length-1,""]]]

	//Main Function of Use
	test.each(tableDetermineNextPrevNavigation)("determineNextPrevNavigation", (props, expected)=>{
		const returnedPrevNext = determineNextPrevNavigation(props.id)
		const expectedPrevNext = expected;
		expect(returnedPrevNext).toEqual(expectedPrevNext);
	})
})

