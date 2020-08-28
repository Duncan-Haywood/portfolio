import React from 'react';
import { Link } from "react-router-dom";
import {INTRO, HEURISTICS, COLOR_SCHEMES} from '../constants'
import UIfx from 'uifx'
import waterDropAudio from '../sounds/water-drop-click-production.mp3'
import chimesAudio from '../sounds/deep-chimes.mp3'
import {Howl} from 'howler'
import  * as HelperFunctions from './HelperFunctions.js'
/**
 * Global Variables
 */

// See constants/constants.js for the values of constants
const colorSchemes = COLOR_SCHEMES

const intro = INTRO

const heuristics = HEURISTICS



/**
 * Navigation
 */


 Navigation.defaultProps = { 
 	currentHeuristic, id, playAudio, heuristics, getLightColor, getDarkColor, colorSchemes
 }
export function Navigation( props ) {
	// id is the page number in the web app
	let [prev, next] = determineNextPrevNavigation(props.id, props.heuristics)
	return (
		<>
			{/*comment: 
			* this section represents the circle buttons
			*/}
			diplayNavigationCircleButtons(props)

			{/*comment: 
			* this section represents the arrow buttons 
			* for next and previous
			*/}
			arrowButtons = diplayNavigationArrowButton(Error(unimplemented))
		</>
	);
}


/**
 * Heuristic Quote
 */
Quote.defaultProps = { 
	currentHeuristic, heuristic, getDarkColor, getLightColor, currentHeuristic, colorSchemes 
}
export function Quote( props ) {
	return (
		<div className="heuristic__quote"
			style={{
				backgroundColor: props.getDarkColor( props.currentHeuristic, props.colorSchemes ),
				color: props.getLightColor( props.currentHeuristic, props.colorSchemes ),
			}}>
			{ props.heuristic }
		</div>
	);
}


/**
 * Sky
 */
Navigation.defaultProps = { 
 	className, currentHeuristic, getSeed, getRandomColor, id, colorSchemes
 }
export function Sky( props ) {
	// Output elements to transform.
	//TODO: what are items?
	let items = [];
	let numItems = 10;
	//TODO: what does this do?
	let scaleMultiplier = 6;
	items = addItemsSky(Error(Unimplemented))

	let perspectiveAlgo = Math.round( props.getSeed( props.currentHeuristic ) * 5 + 20 );

	return (
		<div className={ props.className }
			style={{
				backgroundColor: props.getRandomColor( props.currentHeuristic, 
					props.currentHeuristic, props.colorSchemes, props.getSeed ),
				perspective: perspectiveAlgo + 'px'
				}}>
			{ items }
		</div>
	);
}


/**
 * Mountain
 */



Mountain.defaultProps= {
	className, getSeed, currentHeuristic, getDarkColor, 
}
export function Mountain( { className, currentHeuristic } ) {
	return (
		<div className={ props.className }>
			<div className="m__group" 
				style={{ bottom: 60 * props.getSeed( props.currentHeuristic ) + "%" }}>
				
				bgMountain= displayMountainBG(props)
				fgMountain = displayMountainFG(props)
				
			</div>
		</div>
	);
}

/**
 * Output the Heuristic based on the URL
 */	

handleClick.defaultProps = {
	e, props, id
}
handleClick(props) {
	props.e.preventDefault()

	props.playWaterDrop()
	let next;
	let id = parseInt(props.id);
	next = getCurrentNextHeuristicScene( id, heuristics );

	// This should navigate to the next item.
	useRedirect( '/'+id, '/'+next )
}		
HeuristicScene.defaultProps = {
	handleClick
}
export function HeuristicScene (props) {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	

	

	render() {
		let id = parseInt( this.props.match.params.id );
		let currentHeuristic, heuristic;
		[currentHeuristic, heuristic] = determineCurrentHeuristicAndHeuristic(id, heuristics, intro)
		// Render.
		return (
			heuristicScene=displayHeuristicScene(Error(unimplemented))
		);
	}
}