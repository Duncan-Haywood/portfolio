import React from 'react';
import { HEURISTICS, COLOR_SCHEMES } from './Constants.js'
import { playClickFxAudio } from './SoundHeuristic.js'
import { getDarkColor, getLightColor } from './HelperFunctions.js'
import {A} from 'hookrouter'
/**
 * Navigation
 */
let [heuristics, colorSchemes] = [HEURISTICS, COLOR_SCHEMES]
 
export function Navigation( props ) {
	// id is the page number in the web app
	let [prev, next] = determineNextPrevNavigation(props.id, props.currentHeuristic)
	let circleButtons = diplayNavigationCircleButtons()
	let arrowButtons = diplayNavigationArrowButton({prev: prev,next: next, currentHeuristic: props.currentHeuristic})

	let navigationComponent = <>
			{/*comment: 
			* this section represents the circle buttons
			*/}
			{circleButtons}

			{/*comment: 
			* this section represents the arrow buttons 
			* for next and previous
			*/}
			{arrowButtons}
		</>
	return (navigationComponent);
		
}
Navigation.defaultProps = { 
 	currentHeuristic: undefined, id: undefined, diplayNavigationCircleButtons: diplayNavigationCircleButtons, diplayNavigationArrowButton: diplayNavigationArrowButton
 }


/*
* Navigation helper functions
*/
//Main function at bottom
//Child of handlesEdgeCaseNavigation -third layer into abstraction
function diplayNavigationArrowButton(props){
	let prevArrowButton = displayPrevNavigationArrowButton(props);
	let nextArrowButton = displayNextNavigationArrowButton(props)
	let arrowButtons = <div className="heuristics__navigation-next-prev"
			style={{
				backgroundColor: props.getDarkColor( props.currentHeuristic, props.colorSchemes ),
				color: props.getLightColor( props.currentHeuristic, props.colorSchemes ),
			}}>
			{prevArrowButton}
			{nextArrowButton}
		</div>
	return( arrowButtons )
}
diplayNavigationArrowButton.defaultProps = {
	prev: undefined, next: undefined, currentHeuristic: undefined, getDarkColor: getDarkColor, colorSchemes: colorSchemes, getLightColor: getLightColor, playClickFxAudio: playClickFxAudio
}
function displayPrevNavigationArrowButton(props){
	let prevArrowButton = 
		<A href={"/" + props.prev} onClick={props.playClickFxAudio}>
			<svg xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 24 24">
				<path d="M14 20l-8-8 8-8 1.414 1.414L8.828 
					12l6.586 6.586"/>
			</svg> 
			Previous
		</A>
	return(prevArrowButton)
}
displayPrevNavigationArrowButton.defaultProps = {
	prev: undefined, playClickFxAudio: playClickFxAudio
}
function displayNextNavigationArrowButton(props){
	let nextArrowButton = <A href={"/" + props.next} onClick={props.playClickFxAudio}> 
				<svg xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24">
					<path d="M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 
						6.586"/>
				</svg> 
				Next
				</A>
	return(nextArrowButton)
}
displayPrevNavigationArrowButton.defaultProps = {
	next: undefined, playClickFxAudio: playClickFxAudio
}

function diplayNavigationCircleButtons(id){
				return(
					<ul className="heuristics__navigation">
				<li className={ !id ? 'is-active is-home' : 'is-home' } >
				<A href="/" onClick={playClickFxAudio}>Home</A></li>
				{heuristics.map((value, index) => {
					let i = parseInt(index) + 1;
					return <li className={ id === i ? 'is-active' : '' } 
						key={index}>
					<A href={"/" + i} onClick={playClickFxAudio}>{i}</A></li>
				})}
			</ul>
					)
			}
/*diplayNavigationCircleButtons.defaultProps = {
	id: undefined, heuristics: heuristics, playClickFxAudio: playClickFxAudio 
}*/

export const homePageCaseNavigation = (props)=>{
	let [prev, next] = [props.prev, props.next]
	if ( !props.current ) { 
	// home page has no id
		prev = heuristics.length; 
		// previous page button goes to the last page in the web app
		next = 1;
		// next page button goes to the first page in the app 
		// (the one with the entry)
	}
	return [prev, next]
}
homePageCaseNavigation.defaultProps = {
	current: undefined, next: undefined, prev: undefined, heuristics: heuristics
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
export const lastPageCaseNavigation = (props) =>{
	let next = props.next;
	if ( props.current === heuristics.length ) {
		//next page button goes to home page
		next = "";
	}
	return next
}
lastPageCaseNavigation.defaultProps = {
	current: undefined, next: undefined, heuristics: heuristics
}


//Second Layer into Abstraction
export const handlesEdgeCaseNavigation = (props)=>{
	let prev, next;
	[prev, next] = homePageCaseNavigation({"current": props.current, "next": props.next, "prev": props.prev})
	prev = firstPageCaseNavigation({"current": props.current, "prev": prev})	
	next = lastPageCaseNavigation({"current": props.current, "next": next})
	return [prev, next]
}
handlesEdgeCaseNavigation.defaultProps = {
	"current": undefined, "prev": undefined, "next": undefined, heuristics: heuristics
}


//Second Layer into Abstraction
export function handlesStandardCaseNavigation(props){
	let current = parseInt( props.id );
	let next = current + 1;
	let prev = current - 1;
	return [current, prev, next]
}
handlesStandardCaseNavigation.defaultProps = {
	id: undefined
}


//Main Function of Use
export function determineNextPrevNavigation(props){ // id is the id the router passes to the function
	let current, prev, next; //page indecies (integers) 
	[current, prev, next] = handlesStandardCaseNavigation({id: props.id});
	[prev, next] = handlesEdgeCaseNavigation({current: current, prev: prev, next: next});
	return [prev, next]
}
determineNextPrevNavigation.defaultProps = {
	id: undefined, heuristics: heuristics
}


