import {COLOR_SCHEMES} from './Constants.js' 
const colorSchemes = COLOR_SCHEMES;


/*
* HeuristicSceneHelperMethods
*
* Helper functions for colors
*/

export function getSeed( props ) {
	let number = props.number + 1138;
	let seed = Math.sin( number ++ ) * 10000;
	seed = seed - Math.floor( seed );
	return seed;
}
getSeed.defaultProps = {
	number: undefined
}
 

export function getRandomColor( props ) {
	// seedNumber is the number to be randomized.
	// scheme is the scheme from the array of color arrays to use. (an integer)

	// Note to self: by picking a number between 0 and 1 as the seed, 
	// multiplying by the array length,
	// it means you'll always pick a number in the array.

	// Non-random color scheme.
	// The % modulo operator ensures that the array starts again 
	// from zero when a larger than array.length number is fed.
	// 
	// This makes it cycle through the available color arrays, 
	// one after the other, and cycle when the array ends.
	// from the multiple color schemes, which collection of color options are we using: there are 5 options at the time of writing (9/2/2020)
	let colorSchemeIndex = props.schemeIndex % props.colorSchemes.length;

	// Store random color from that scheme.
	let colorFromScheme = Math.floor( getSeed( props.seedNumber ) * 
		props.colorSchemes[ colorSchemeIndex ][2].length );
	// Picks a color from colorSchemes 
	let randomColor = props.colorSchemes[ colorSchemeIndex ][2][ colorFromScheme ];
	return randomColor;
}
getRandomColor.defaultProps = {
	seedNumber: undefined, schemeIndex: undefined, colorSchemes: COLOR_SCHEMES, getSeed: getSeed
}


export function getDarkColor( props ) {
	let colorScheme = props.scheme % colorSchemes.length;
	let darkColor = colorSchemes[ colorScheme ][0][0];
	return darkColor;
}
getDarkColor.defaultProps = {
	scheme: undefined//, colorSchemes: COLOR_SCHEMES
}

export function getLightColor( props ) {
	let colorSchemeIndex = props.schemeIndex % props.colorSchemes.length;
	let lightColor = props.colorSchemes[ colorSchemeIndex ][1][0];
	return lightColor;
}
getLightColor.defaultProps = {
	schemeIndex: undefined, colorSchemes: COLOR_SCHEMES
} 







