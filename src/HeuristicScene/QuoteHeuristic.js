import { getLightColor, getDarkColor } from './HelperFunctions.js'
import COLOR_SCHEMES from './Constants.js'
import React from 'react'

/**
 * Heuristic Quote
 */
let colorSchemes = COLOR_SCHEMES

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
Quote.defaultProps = { 
	currentHeuristic: undefined, heuristic: undefined, getDarkColor: getDarkColor, getLightColor: getLightColor, colorSchemes: colorSchemes 
}