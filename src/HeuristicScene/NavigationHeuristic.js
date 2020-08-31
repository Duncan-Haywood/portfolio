/**
 * Navigation
 */


 Navigation.defaultProps = { 
 	currentHeuristic, id, playAudio, heuristics, getLightColor, getDarkColor, colorSchemes, diplayNavigationCircleButtons, diplayNavigationArrowButton
 }
export function Navigation( props ) {
	// id is the page number in the web app
	let [prev, next] = determineNextPrevNavigation(props.id, props.heuristics)
	navigationComponent = <>
			{/*comment: 
			* this section represents the circle buttons
			*/}
			diplayNavigationCircleButtons()

			{/*comment: 
			* this section represents the arrow buttons 
			* for next and previous
			*/}
			diplayNavigationArrowButton()
		</>
	
	return (navigationComponent);
		
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


diplayNavigationCircleButtons.defaultProps = {
	id, playAudio, heuristics 
}
function diplayNavigationCircleButtons(props){
				return(
					<ul className="heuristics__navigation">
				<li className={ !props.id ? 'is-active is-home' : 'is-home' } >
				<Link to="/" onClick={props.playAudio}>Home</Link></li>
				{heuristics.map((value, index) => {
					let i = parseInt(index) + 1;
					return <li className={ props.id === i ? 'is-active' : '' } 
						key={index}>
					<Link to={"/" + i} onClick={props.playAudio}>{i}</Link></li>
				})}
			</ul>
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


