import * as helpers from './HelperFunctions.js'
import React from 'react'

/**
 * Heuristic Quote
 */
export function Quote( props ) {
	let darkColor = helpers.getDarkColor({schemeIndex: props.currentHeuristicIndex});
	let lightColor = helpers.getLightColor({schemeIndex: props.currentHeuristicIndex});
	let quoteComponent = <div 
			className="heuristic__quote"
			style={{
				backgroundColor: darkColor,
				color: lightColor,
			}}>
			{ props.heuristic }
		</div>

	return ( quoteComponent);
}
Quote.defaultProps = { 
	currentHeuristicIndex: undefined, heuristic: undefined //, getDarkColor: getDarkColor, getLightColor: getLightColor, colorSchemes: colorSchemes 
}