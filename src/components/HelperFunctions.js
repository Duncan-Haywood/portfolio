/*
* HeuristicSceneHelperMethods
*/

displayHeuristicScene.defaultProps =  {
				id, currentHeuristic, playWaterDrop, heuristic, handleClick, colorSchemes
}
function displayHeuristicScene (props) {
	return(
		<>
	{/*Navigation and quotes*/}
	<h1>A space of peace and art.</h1>
	<Sounds />
	<Navigation id={ id } 
		currentHeuristic={ currentHeuristic } 
		playAudio={ this.playWaterDrop }/>
	<h2>{ currentHeuristic === 0 ? '' : currentHeuristic }</h2>
	<Quote currentHeuristic={ currentHeuristic } 
		heuristic={ heuristic } />
		{/*background*/}
	<section className="heuristic" onClick={ this.handleClick }>
		<Sky className="heuristic__primary" 
			currentHeuristic={ currentHeuristic } colorSchemes={colorSchemes} />
		<Sky className="heuristic__clone" 
			currentHeuristic={ currentHeuristic } colorSchemes={colorSchemes} />
		<Mountain className="m" 
			currentHeuristic={ currentHeuristic } colorSchemes={colorSchemes} />
		<Mountain className="m__clone" 
			currentHeuristic={ currentHeuristic } colorSchemes={colorSchemes} />
	</section>
</>
	)
}


/*
* Sky helper Functions.
*/

getSeeds.defaultProps = {
	getSeed, currentHeuristic
}
function getSeeds(props){
	let s1 = props.getSeed( props.getSeed( props.currentHeuristic ) * i );
	let s2 = props.getSeed( props.getSeed( props.currentHeuristic ) * i + 1 );
	let s3 = props.getSeed( props.getSeed( props.currentHeuristic ) * i + 2 );
	let s4 = Math.round( props.getSeed( props.getSeed( props.currentHeuristic ) * i + 3 ) * 10 );
	return [s1, s2, s3, s4]
}
addItemsSky.defaultProps = {
	items, i, s1, s2, s3, s4, getRandomColor, colorSchemes, getSeed, scaleMultiplier, numItems, currentHeuristic
}
function addItemSky( props ){
	items.push(
		<span key={ i } style={{
			backgroundColor: props.getRandomColor( i + 1 * props.currentHeuristic, 
				props.currentHeuristic, props.colorSchemes, props.getSeed),
			left: ( 100 / numItems ) * i + "%",
			top: 100 * s1 + "%",
			transform: 
				'translate(-50%, -50%)'
				+ 'translateZ(' + s4 + 'px)'
				+ 'rotate(' + s2 * 360 + 'deg)'
				+ 'scale(' + s3 * scaleMultiplier + ')',
			opacity: s1,
		}} />
	);
	return items;
}
addItemsSky.defaultProps= {}
function addItemsSky(props){
	for (var i = 1; i <= numItems; i++) {
		let s1, s2, s3, s4;
		
		[s1, s2, s3, s4] = getSeeds(getSeed=props.getSeed, currentHeuristic=props.currentHeuristic)
		items = addItemSky()
		
	}
	return items
}






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
diplayNavigationArrowButton.deffaultProps{
	getDarkColor, currentHeuristic, colorSchemes, getLightColor, playAudio, prev, next }
}
function diplayNavigationArrowButton(props){
	return(
				<div className="heuristics__navigation-next-prev"
			style={{
				backgroundColor: props.getDarkColor( props.currentHeuristic, props.colorSchemes ),
				color: props.getLightColor( props.currentHeuristic, props.colorSchemes ),
			}}>
			<Link to={"/" + prev} onClick={props.playAudio}>
				<svg xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24">
					<path d="M14 20l-8-8 8-8 1.414 1.414L8.828 
						12l6.586 6.586"/>
				</svg> 
				Previous
				</Link>
			<Link to={"/" + next} onClick={props.playAudio}> 
				<svg xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24">
					<path d="M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 
						6.586"/>
				</svg> 
				Next
				</Link>
		</div>
	)
}



export const homePageCaseNavigation = (current, next, prev, heuristics)=>{
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
export const firstPageCaseNavigation = (current, prev)=>{
	if ( current === 1 ) { 
		//previous page button goes to home page
		prev = "";
	}
	return prev
}
//Child of handlesEdgeCaseNavigation -third layer into abstraction
export const lastPageCaseNavigation = (current, next, heuristics) =>{
	if ( current === heuristics.length ) {
		//next page button goes to home pagge
		next = "";
	}
	return next
}
//Second Layer into Abstraction
export const handlesEdgeCaseNavigation = (current, prev, next, heuristics)=>{
	[prev, next] = homePageCaseNavigation(current, next, prev, heuristics)
	prev = firstPageCaseNavigation(current, prev)	
	next = lastPageCaseNavigation(current, next, heuristics)
	return [prev, next]
}
//Second Layer into Abstraction
export const handlesStandardCaseNavigation= (id)=>{
	let current = parseInt( id );
	let next = current + 1;
	let prev = current - 1;
	return [current, prev, next]
}
//Main Function of Use
export const determineNextPrevNavigation = (id, heuristics)=>{ // id is the id the router passes to the function
	let current, prev, next; //page indecies (integers) 
	[current, prev, next] = handlesStandardCaseNavigation(id);
	[prev, next] = handlesEdgeCaseNavigation(current, prev, next, heuristics);
	return [prev, next]
}

/* 
* HeuristicScene Helper Methods 
*/
export const getCurrentNextHeuristicScene = (id, heuristics) => {
	let current = id;
	let next = 1;
	// current is a number
	if ( !isNaN(current) ) {
		next = current + 1;
	}
	//case of lastPageCaseNavigation()
	if (current === heuristics.length ) {
		// next is the home page
		next = "";
	}
	return next;
}
export const determineCurrentHeuristicAndHeuristic = (id, heuristics, intro) => {
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