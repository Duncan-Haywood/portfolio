import React from 'react';
import { getSeed, getRandomColor } from './HelperFunctions.js';
import { COLOR_SCHEMES } from './Constants.js';
/**
 * Sky
 */

export function Sky( props ) {
	// Output elements to transform.
	// TODO: what are items?
	let items;
	//TODO: what does this do?
	items = props.addMultiItemsSky(items, props.currentHeuristicIndex)
	let perspectiveAlgo = getPerspectiveAlgo()
	let sky = props.displaySky(props.className, props.currentHeuristicIndex, perspectiveAlgo, items)
	return (
		sky
	);
}
Sky.defaultProps = { 
 	className: undefined, currentHeuristicIndex: undefined, id: undefined, getSeed: getSeed, addMultiItemsSky: addMultiItemsSky, displaySky: displaySky
 }


export function getPerspectiveAlgo(props){
	let perspectiveAlgo = Math.round( props.getSeed( props.currentHeuristicIndex ) * 5 + 20 );
	return perspectiveAlgo;
}
getPerspectiveAlgo.defaultProps = {
	 currentHeuristicIndex: undefined, getSeed: getSeed 
}


/*
* Sky helper Functions.
*/
export function displaySky(props){
	let backgroundColor = props.getRandomColor( {seedNumber: props.currentHeuristicIndex, schemeIndex:
					props.currentHeuristicIndex )
	let perspective = props.perspectiveAlgo + 'px'
	// the component is below
	let sky = 
		<div className={ props.className }
			style={{
				backgroundColor: {backgroundColor},
				perspective: {perspective}
				}}>
			{ props.items }
		</div>

	return(sky)
}
displaySky.defaultProps = {
	className: undefined, perspectiveAlgo: undefined, currentHeuristicIndex: undefined, items: undefined, getRandomColor: getRandomColor, colorSchemes: COLOR_SCHEMES, getSeed: getSeed 
}




export function addMultiItemsSky(props){
	let items = [];
	let numItems = 10;

	for (var i = 1; i <= numItems; i++) {
		let s1, s2, s3, s4;
		
		[s1, s2, s3, s4] = getMultiSeeds({i: i})
		items = props.addItemSky({"i": i , "s1": s1, "s2": s2, "s3": s3, "s4": s4, "item":items, "currentHeuristicIndex": props.currentHeuristicIndex})
		
	}
	return items
}
addMultiItemsSky.defaultProps = {
	currentHeuristicIndex: undefined, getMultiSeeds: getMultiSeeds, addItemSky: addItemSky, 
} 


export function getMultiSeeds(props){
	let s1 = props.getSeed( props.getSeed( props.currentHeuristicIndex ) * props.i );
	let s2 = props.getSeed( props.getSeed( props.currentHeuristicIndex ) * props.i + 1 );
	let s3 = props.getSeed( props.getSeed( props.currentHeuristicIndex ) * props.i + 2 );
	let s4 = Math.round( props.getSeed( props.getSeed( props.currentHeuristicIndex ) * props.i + 3 ) * 10 );
	return [s1, s2, s3, s4]
}
getMultiSeeds.defaultProps = {
	i: undefined, "getSeed": getSeed, currentHeuristicIndex: undefined
} 


export function addItemSky( props ){
	let scaleMultiplier = 6;
	let items = props.items;

	let itemBackgroundColorSeedNumber = props.i + 1 * props.currentHeuristicIndex;
	
	let itemBackgroundColor = getRandomColor( {seedNumber: itemBackgroundColorSeedNumber, schemeIndex: 
				props.currentHeuristicIndex} );

	let itemLeft = ( 100 / props.numItems ) * props.i + "%";
	let itemTop = 100 * props.s1 + "%";
	let itemTransform = 'translate(-50%, -50%)'
				+ 'translateZ(' + props.s4 + 'px)'
				+ 'rotate(' + props.s2 * 360 + 'deg)'
				+ 'scale(' + props.s3 * scaleMultiplier + ')';
	let itemOpacity = props.s1; 

	items.push(
		<span key={ props.i } style={{
			backgroundColor: {itemBackgroundColor},
			left: {itemLeft},
			top: {itemTop},
			transform: {itemTransform},
			opacity: {itemOpacity},
		}} />
	);
	return items;
}
addItemSky.defaultProps = {
	items: undefined, i: undefined, s1: undefined, s2: undefined, s3: undefined, s4: undefined, currentHeuristicIndex: undefined, numItems: undefined, getRandomColor: getRandomColor, colorSchemes: COLOR_SCHEMES, getSeed: getSeed
}
