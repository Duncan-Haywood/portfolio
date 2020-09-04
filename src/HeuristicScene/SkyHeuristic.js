import React from 'react';
import * as helpers from './HelperFunctions.js';
/**
 * Sky
 */

export function Sky( props ) {
	// TODO: what are items?
	let items;
	items = addMultiItemsSky({items: items, currentHeuristicIndex: props.currentHeuristicIndex})
	let perspectiveAlgoNum = getPerspectiveAlgoNum()
	let SkyComponent = displaySky({classname: props.className, currentHeuristicIndex: props.currentHeuristicIndex, perspectiveAlgoNum: perspectiveAlgoNum, items: items})
	return (
		SkyComponent
	);
}
Sky.defaultProps = { 
 	className: undefined, currentHeuristicIndex: undefined, id: undefined
 }





/*
* Sky helper Functions.
*/
export function displaySky(props){
	let backgroundColor = helpers.getRandomColor( {seedNumber: props.currentHeuristicIndex, schemeIndex:
					props.currentHeuristicIndex } )
	let perspective = props.perspectiveAlgo + 'px'
	// the component is below
	let SkyComponent = 
		<div className={ props.className }
			style={{
				backgroundColor: {backgroundColor},
				perspective: {perspective}
				}}>
			{ props.items }
		</div>

	return(SkyComponent)
}
displaySky.defaultProps = {
	className: undefined, perspectiveAlgo: undefined, currentHeuristicIndex: undefined, items: undefined
}




export function addMultiItemsSky(props){
	let items = props.items;
	let numItems = 10;

	for (var i = 1; i <= numItems; i++) {
		let s1, s2, s3, s4;
		
		[s1, s2, s3, s4] = getMultiSeeds({i: i})
		items = addItemSky({i: i , s1: s1, s2: s2, s3: s3, s4: s4, item: items, currentHeuristicIndex: props.currentHeuristicIndex})
		
	}
	return items
}
addMultiItemsSky.defaultProps = {
	currentHeuristicIndex: undefined, items: undefined//, getMultiSeeds: getMultiSeeds, addItemSky: addItemSky, 
} 


export function getMultiSeeds(props){
	let s1 = helpers.getSeed({number: helpers.getSeed({number: props.currentHeuristicIndex}) * props.i });
	let s2 = helpers.getSeed({number: helpers.getSeed({number: props.currentHeuristicIndex }) * props.i + 1 });
	let s3 = helpers.getSeed({number: helpers.getSeed({number: props.currentHeuristicIndex}) * props.i + 2 });
	let s4 = Math.round( helpers.getSeed({number: helpers.getSeed({number: props.currentHeuristicIndex }) * props.i + 3 }) * 10 );
	return [s1, s2, s3, s4]
}
getMultiSeeds.defaultProps = {
	i: undefined, currentHeuristicIndex: undefined//, getSeed: getSeed,
} 


export function addItemSky( props ){
	let scaleMultiplier = 6;
	let itemQualityProps = Object.assign({}, props, {scaleMultiplier: scaleMultiplier})
	let itemQualities = getItemQualities(itemQualityProps);
	items.push(
		<span key={ props.i } style={{
			backgroundColor: itemQualities.itemBackgroundColor,
			left: itemQualities.itemLeft,
			top: itemQualities.itemTop,
			transform: itemQualities.itemTransform,
			opacity: itemQualities.itemOpacity,
		}} />
	);
	return items;
}
addItemSky.defaultProps = {
	items: undefined, i: undefined, s1: undefined, s2: undefined, s3: undefined, s4: undefined, currentHeuristicIndex: undefined, numItems: undefined
}

export function getItemQualities(props) {
	let itemBackgroundColorSeedNumber = props.i + 1 * props.currentHeuristicIndex;
	
	let itemBackgroundColor = helpers.getRandomColor( {seedNumber: itemBackgroundColorSeedNumber, schemeIndex: props.currentHeuristicIndex} );

	let itemLeft = ( 100 / props.numItems ) * props.i + "%";
	let itemTop = 100 * props.s1 + "%";
	let itemTransform = 'translate(-50%, -50%)'
				+ 'translateZ(' + props.s4 + 'px)'
				+ 'rotate(' + props.s2 * 360 + 'deg)'
				+ 'scale(' + props.s3 * props.scaleMultiplier + ')';
	let itemOpacity = props.s1; 

	let itemQualities = {itemBackgroundColorSeedNumber: itemBackgroundColorSeedNumber, itemBackgroundColor: itemBackgroundColor, itemLeft: itemLeft, itemTop: itemTop, itemTransform: itemTransform, itemOpacity: itemOpacity}
	return itemQualities
}
getItemQualities.defaultProps = {
	items: undefined, i: undefined, s1: undefined, s2: undefined, s3: undefined, s4: undefined, currentHeuristicIndex: undefined, numItems: undefined, scaleMultiplier: undefined
}
	
export function getPerspectiveAlgoNum(props){
	let perspectiveAlgoNum = Math.round( helpers.getSeed({seedNumber: props.currentHeuristicIndex }) * 5 + 20 );
	return perspectiveAlgoNum;
}
getPerspectiveAlgoNum.defaultProps = {
	 currentHeuristicIndex: undefined//, getSeed: getSeed 
}