


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
