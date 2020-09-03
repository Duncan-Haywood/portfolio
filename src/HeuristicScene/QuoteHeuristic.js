import * as helpers from './HelperFunctions.js'
import React from 'react'

/**
 * Heuristic Quote
 */
export function Quote( props ) {
	let darkColor = helpers.getDarkColor({schemeIndex: props.currentHeuristic});
	let lightColor = helpers.getLightColor({schemeIndex: props.currentHeuristic});
	quoteComponent = <div className="heuristic__quote"
			style={{
				backgroundColor: darkColor,
				color: lightColor,
			}}>
			{ props.heuristic }
		</div>

	return ( quoteComponent);
}
Quote.defaultProps = { 
	currentHeuristic: undefined, heuristic: undefined //, getDarkColor: getDarkColor, getLightColor: getLightColor, colorSchemes: colorSchemes 
}