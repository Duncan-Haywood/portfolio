import React from 'react';
import {INTRO, HEURISTICS, COLOR_SCHEMES} from './Constants'
import {playBackgroundSound, playClickFxAudio} from './SoundHeuristic.js'
import {Navigation} from './NavigationHeuristic.js'
import {Sky} from './SkyHeuristic.js'
import {Mountain} from './MountainHeuristic.js'
import {Quote} from './QuoteHeuristic.js'
import useRedirect from 'hookrouter'

/**
 * Output the Heuristic based on the URL
 */	


export function HeuristicScene (props) {
	let id = parseInt( props.id ); //TODO
	let currentHeuristic, heuristic;
	[currentHeuristic, heuristic] = props.determineCurrentHeuristicAndHeuristic({id: id})
	let heuristicScene=props.displayHeuristicScene({id: id, currentHeuristic: currentHeuristic, heuristic: heuristic} )
	return (
		// Render.
		<heuristicScene />
	);
}
HeuristicScene.defaultProps = {
	id: undefined, determineCurrentHeuristicAndHeuristic: determineCurrentHeuristicAndHeuristic, displayHeuristicScene: displayHeuristicScene, heuristics: HEURISTICS, intro: INTRO,  
}

/*
* -------------------------------------------------------
*/




/*
* Heuristic Scene Helper Functions
*/



export function displayHeuristicScene (props) {
	let heuristicScene = <>
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
	return(heuristicScene)
}
displayHeuristicScene.defaultProps = {
				id: undefined, currentHeuristic: undefined, heuristic: undefined, playClickFxAudio: playClickFxAudio, handleClick: handleClick, colorSchemes: COLOR_SCHEMES, playBackgroundSound: playBackgroundSound, Navigation: Navigation, Quote: Quote, Sky: Sky, Mountain: Mountain
}



export function handleClick(props) {
	props.e.preventDefault()

	props.playWaterDrop()
	let next;
	let id = parseInt(props.id);
	next = props.getCurrentNextHeuristicScene( {id: id} );

	// This should navigate to the next item.
	props.useRedirect( '/'+id, '/'+next )
}		
handleClick.defaultProps = {
	e: undefined, id: undefined, getCurrentNextHeuristicScene: getCurrentNextHeuristicScene, useRedirect: useRedirect, playClickFxAudio: playClickFxAudio
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
	id: undefined, heuristics: HEURISTICS
}


export function determineCurrentHeuristicAndHeuristic(props) {
	// Show homepage or heuristic 
	// where heuristic is one of the quotes from the top.
	
	let currentHeuristic = props.id;
	// the quote (heuristic) we use mathces the index of 
	// the page upon which we are with the corresponding quote in 
	// the list of heuristics from the top of the page
	let heuristic = props.heuristics[currentHeuristic - 1];
	if ( !currentHeuristic ) {
		// the quote we use (heuristic) is 
		// the intro text we defined at the top
		heuristic = props.intro;
		// the index of the quote text at which we are located
		currentHeuristic = 0; // Must be zero.
	}
	return [currentHeuristic, heuristic]
}
determineCurrentHeuristicAndHeuristic.defaultProps = {
	id: undefined, heuristics: HEURISTICS, intro: INTRO
}

