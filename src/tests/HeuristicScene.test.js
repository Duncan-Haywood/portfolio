import { configure } from "enzyme";
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

describe("Navigation Component", () => {

	test.todo("renders shallowly")

	test.todo("renders fully")
})
describe("HeuristicScene component", () => {

	test.todo("renders shallowly")
	test.todo("renders fully")

})
// describe("")