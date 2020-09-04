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
	let currentHeuristicIndexIndex, heuristic;
	currentHeuristicIndexIndex = determinecurrentHeuristicIndexIndex({id: props.id})
	heuristic = determineHeuristic({currentHeuristicIndexIndex: currentHeuristicIndexIndex})
	let HeuristicSceneComponent = displayHeuristicScene({id: props.id, currentHeuristicIndexIndex: currentHeuristicIndexIndex, heuristic: heuristic} )
	return (
		// Render.
		<HeuristicSceneComponent />
	);
}
HeuristicScene.defaultProps = {
	id: undefined, determinecurrentHeuristicIndexIndex: determinecurrentHeuristicIndexIndex, determineHeuristic: determineHeuristic, displayHeuristicScene: displayHeuristicScene, heuristics: HEURISTICS, intro: INTRO,  
}

/*
* -------------------------------------------------------
*/




/*
* Heuristic Scene Helper Functions
*/



export function displayHeuristicScene (props) {
	let HeuristicSceneBackground = displayHeuristicSceneBackground({currentHeuristicIndexIndex: props.currentHeuristicIndexIndex})
	let HeuristicSceneContent = displayHeuristicSceneContent({id: props.id, currentHeuristicIndexIndex: props.currentHeuristicIndexIndex, heuristic: props.heuristic})

	let heuristicScene = <>
	{/*Navigation and quotes*/}
	{HeuristicSceneContent}
	{/*background*/}
	{HeuristicSceneBackground}
</>
	return(heuristicScene)
}
displayHeuristicScene.defaultProps = {
				id: undefined, currentHeuristicIndexIndex: undefined, heuristic: undefined
}
export function displayHeuristicSceneContent(props){
	let HeuristicSceneContent = <>
		<h1>A space of peace and art.</h1>
		<props.Sounds />
		<props.Navigation id={ props.id } 
			currentHeuristicIndex={ props.currentHeuristicIndexIndex } 
			playAudio={ props.playClickFxAudio }/>
		<h2>{ props.currentHeuristicIndex === 0 ? '' : props.currentHeuristicIndexIndex }</h2>
		<props.Quote currentHeuristicIndex={ props.currentHeuristicIndexIndex } 
			heuristic={ props.heuristic } />
	</>
	return HeuristicSceneContent;}
HeuristicSceneContent.defaultProps = {
	id: undefined, currentHeuristicIndexIndex: undefined, heuristic: undefined, playClickFxAudio: playClickFxAudio
}


export function displayHeuristicSceneBackground(props){
	let HeuristicSceneBackground = <section 
	className="heuristic" onClick={ handleClick }>
		<props.Sky className="heuristic__primary" 
			currentHeuristicIndex={ props.currentHeuristicIndexIndex } colorSchemes={props.colorSchemes} />
		<props.Sky className="heuristic__clone" 
			currentHeuristicIndex={ props.currentHeuristicIndexIndex } colorSchemes={props.colorSchemes} />
		<props.Mountain className="m" 
			currentHeuristicIndex={ props.currentHeuristicIndexIndex } colorSchemes={props.colorSchemes} />
		<props.Mountain className="m__clone" 
			currentHeuristicIndexIndex={ props.currentHeuristicIndexIndex } colorSchemes={props.colorSchemes} />
	</section>

	return HeuristicSceneBackground
}
displayHeuristicSceneBackground.defaultProps = {
	currentHeuristicIndexIndex: undefined, colorSchemes: COLOR_SCHEMES, handleClick: handleClick, Sky: Sky, Mountain: Mountain
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


export function determinecurrentHeuristicIndexIndex(props) {
	// Show homepage or heuristic 
	// where heuristic is one of the quotes from the top.
	
	let currentHeuristicIndexIndex = props.id;
	// the quote (heuristic) we use mathces the index of 
	// the page upon which we are with the corresponding quote in 
	// the list of heuristics from the top of the page
	if ( !currentHeuristicIndexIndex ) {
		// the quote we use (heuristic) is 
		// the intro text we defined at the top
		// the index of the quote text at which we are located
		currentHeuristicIndexIndex = 0; // Must be zero.
	}
	return [currentHeuristicIndexIndex, heuristic]
}
determinecurrentHeuristicIndexAndHeuristic.defaultProps = {
	id: undefined
}

export function determineHeuristic(props) {
	// Show homepage or heuristic 
	// where heuristic is one of the quotes from the top.
	

	// the quote (heuristic) we use mathces the index of 
	// the page upon which we are with the corresponding quote in 
	// the list of heuristics from the top of the page
	let heuristic = props.heuristics[currentHeuristicIndexIndex - 1];
	if ( !currentHeuristicIndexIndex ) {
		// the quote we use (heuristic) is 
		// the intro text we defined at the top
		heuristic = props.intro;
	}
	return [currentHeuristicIndexIndex, heuristic]
}
determinecurrentHeuristicIndexAndHeuristic.defaultProps = {
	currentHeuristicIndexIndex: undefined, heuristics: HEURISTICS, intro: INTRO
}

