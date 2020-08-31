import React from 'react';
import { Link } from "react-router-dom";
import {INTRO, HEURISTICS, COLOR_SCHEMES} from './constants'
import UIfx from 'uifx'
import waterDropAudio from '../soundFiles/water-drop-click-production.mp3'
import chimesAudio from '../soundFiles/deep-chimes.mp3'
import {Howl} from 'howler'
import  * as HelperFunctions from './HelperFunctions.js'
import playWaterDrop from './SoundHeuristic.js'
/**
 * Global Variables
 */

// See constants/constants.js for the values of constants
const colorSchemes = COLOR_SCHEMES

const intro = INTRO

const heuristics = HEURISTICS

/**
 * Output the Heuristic based on the URL
 */	


export function HeuristicScene (props) {
	let id = parseInt( props.id ); //TODO
		let currentHeuristic, heuristic;
		[currentHeuristic, heuristic] = props.determineCurrentHeuristicAndHeuristic(id, props.heuristics, props.intro)
		heuristicScene=props.displayHeuristicScene(id, currentHeuristic, heuristic )
	return (
		// Render.
		heuristicScene
	);
}
HeuristicScene.defaultProps = {
	handleClick: handleClick, determineCurrentHeuristicAndHeuristic: determineCurrentHeuristicAndHeuristic, displayHeuristicScene: displayHeuristicScene
}

/*
* -------------------------------------------------------
*/




/*
* Heuristic Scene Helper Functions
*/



export function displayHeuristicScene (props) {
	return(
		<>
	{/*Navigation and quotes*/}
	<h1>A space of peace and art.</h1>
	<props.Sounds />
	<props.Navigation id={ props.id } 
		currentHeuristic={ props.currentHeuristic } 
		playAudio={ props.playWaterDrop }/>
	<h2>{ props.currentHeuristic === 0 ? '' : props.currentHeuristic }</h2>
	<props.Quote currentHeuristic={ props.currentHeuristic } 
		heuristic={ props.heuristic } />
		{/*background*/}
	<section className="heuristic" onClick={ this.handleClick }>
		<props.Sky className="heuristic__primary" 
			currentHeuristic={ props.currentHeuristic } colorSchemes={props.colorSchemes} />
		<props.Sky className="heuristic__clone" 
			currentHeuristic={ props.currentHeuristic } colorSchemes={props.colorSchemes} />
		<props.Mountain className="m" 
			currentHeuristic={ props.currentHeuristic } colorSchemes={props.colorSchemes} />
		<props.Mountain className="m__clone" 
			currentHeuristic={ props.currentHeuristic } colorSchemes={props.colorSchemes} />
	</section>
</>
	)
}
displayHeuristicScene.defaultProps = {
				id: undefined, currentHeuristic: undefined, heuristic: undefined, playWaterDrop: playWaterDrop, handleClick: handleClick, colorSchemes: colorSchemes, BackgroundSound: BackgroundSound, Navigation: Navigation, Quote: Quote, Sky: Sky, Mountain: Mountain
}



export function handleClick(props) {
	props.e.preventDefault()

	props.playWaterDrop()
	let next;
	let id = parseInt(props.id);
	next = props.getCurrentNextHeuristicScene( id, heuristics );

	// This should navigate to the next item.
	props.useRedirect( '/'+id, '/'+next )
}		
handleClick.defaultProps = {
	e: undefined, id: undefined, getCurrentNextHeuristicScene: getCurrentNextHeuristicScene, useRedirect: useRedirect, playWaterDrop: playWaterDrop
}


export function getCurrentNextHeuristicScene(props) {
	let current = props.id;
	let next = 1;
	// current is a number
	if ( !isNaN(current) ) {
		next = current + 1;
	}
	//case of lastPageCaseNavigation()
	if (current === props.heuristics.length ) {
		// next is the home page
		next = "";
	}
	return next;
}
getCurrentNextHeuristicScene.defaultProps = {
	id, heuristics: heuristics
}


export function determineCurrentHeuristicAndHeuristic(props) {
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
		props.heuristic = props.intro;
		// the index of the quote text at which we are located
		currentHeuristic = 0; // Must be zero.
	}
	return [currentHeuristic, props.heuristic]
}
determineCurrentHeuristicAndHeuristic.defaultProps = {
	id, heuristics: heuristics, intro: intro
}

