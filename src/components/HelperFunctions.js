/*
* Helper functions for colors
*/
export function getSeed( number ) {
	number += 1138;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
}

export function getRandomColor( seedNumber, scheme, colorSchemes, getSeed ) {
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
	let colorFromScheme = Math.floor( getSeed( seedNumber ) * 
		colorSchemes[ colorScheme ][2].length );

	return colorSchemes[ colorScheme ][2][ colorFromScheme ];
}

export function getDarkColor( scheme, colorSchemes ) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][0][0];
}

export function getLightColor( scheme, colorSchemes) {
	let colorScheme = scheme % colorSchemes.length;
	return colorSchemes[ colorScheme ][1][0];
}







/*
* Navigation helper functions
*/
//Main function at bottom
//Child of handlesEdgeCaseNavigation -third layer into abstraction
const homePageCaseNavigation = (current, next, prev, heuristics)=>{
	if ( !current ) { 
	// home page has no id
		prev = heuristics.length; 
		// previous page button goes to the last page in the web app
		next = 1;
		// next page button goes to the first page in the app 
		// (the one with the entry)
	}
	return [prev, next]
}
//Child of handlesEdgeCaseNavigation -third layer into abstraction
const firstPageCaseNavigation = (current, prev)=>{
	if ( current === 1 ) { 
		//previous page button goes to home page
		prev = "";
	}
	return prev
}
//Child of handlesEdgeCaseNavigation -third layer into abstraction
const lastPageCaseNavigation = (current, next, heuristics) =>{
	if ( current === heuristics.length ) {
		//next page button goes to home pagge
		next = "";
	}
	return next
}
//Second Layer into Abstraction
const handlesEdgeCaseNavigation = (current, prev, next, heuristics)=>{
	[prev, next] = homePageCaseNavigation(current, next, prev, heuristics)
	prev = firstPageCaseNavigation(current, prev)	
	next = lastPageCaseNavigation(current, next, heuristics)
	return [prev, next]
}
//Second Layer into Abstraction
const handlesStandardCaseNavigation= (id)=>{
	let current = parseInt( id );
	let next = current + 1;
	let prev = current - 1;
	return [current, prev, next]
}
//Main Function of Use
export const determineNextPrevNavigation = (id, heuristics)=>{
	let current, prev, next; //page indecies (integers) 
	[current, prev, next] = handlesStandardCaseNavigation(id);
	[prev, next] = handlesEdgeCaseNavigation(current, prev, next, heuristics);
	return [prev, next]
}

/* 
* HeuristicScene Helper Methods 
*/
export const getCurrentNextHeuristicScene = (id, heuristics) => {
	let current = parseInt( id );
	let next = 1;
	if ( !isNaN(current) ) {
		next = current + 1;
	}
	if (current === heuristics.length ) {
		next = "";
	return next
	}
}
export const determineCurrentHeuristicAndHeuristic = (id, heuristics) => {
	// Show homepage or heuristic 
	// where heuristic is one of the quotes from the top.
	
	let currentHeuristic = 1;
	// the quote (heuristic) we use mathces the index of 
	// the page upon which we are with the corresponding quote in 
	// the list of heuristics from the top of the page
	let heuristic = heuristics[currentHeuristic - 1];
	if ( !currentHeuristic ) {
		// the quote we use (heuristic) is 
		// the intro text we defined at the top
		heuristic = intro;
		// the index of the quote text at which we are located
		currentHeuristic = 0; // Must be zero.
	}
	return [currentHeuristic, heuristic]
}