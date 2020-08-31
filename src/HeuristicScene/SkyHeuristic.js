

/**
 * Sky
 */
Navigation.defaultProps = { 
 	className, currentHeuristic, getSeed, getRandomColor, id, colorSchemes
 }
export function Sky( props ) {
	// Output elements to transform.
	//TODO: what are items?
	let items = [];
	let numItems = 10;
	//TODO: what does this do?
	let scaleMultiplier = 6;
	items = addItemsSky(Error(Unimplemented))

	let perspectiveAlgo = Math.round( props.getSeed( props.currentHeuristic ) * 5 + 20 );

	return (
		<div className={ props.className }
			style={{
				backgroundColor: props.getRandomColor( props.currentHeuristic, 
					props.currentHeuristic, props.colorSchemes, props.getSeed ),
				perspective: perspectiveAlgo + 'px'
				}}>
			{ items }
		</div>
	);
}

/*
* Sky helper Functions.
*/


getSeeds.defaultProps = {
	getSeed, currentHeuristic
}
function getSeeds(props){
	let s1 = props.getSeed( props.getSeed( props.currentHeuristic ) * i );
	let s2 = props.getSeed( props.getSeed( props.currentHeuristic ) * i + 1 );
	let s3 = props.getSeed( props.getSeed( props.currentHeuristic ) * i + 2 );
	let s4 = Math.round( props.getSeed( props.getSeed( props.currentHeuristic ) * i + 3 ) * 10 );
	return [s1, s2, s3, s4]
}

/*
* 
*/

addItemsSky.defaultProps = {
	items, i, s1, s2, s3, s4, getRandomColor, colorSchemes, getSeed, scaleMultiplier, numItems, currentHeuristic
}
function addItemSky( props ){
	items.push(
		<span key={ i } style={{
			backgroundColor: props.getRandomColor( i + 1 * props.currentHeuristic, 
				props.currentHeuristic, props.colorSchemes, props.getSeed),
			left: ( 100 / numItems ) * i + "%",
			top: 100 * s1 + "%",
			transform: 
				'translate(-50%, -50%)'
				+ 'translateZ(' + s4 + 'px)'
				+ 'rotate(' + s2 * 360 + 'deg)'
				+ 'scale(' + s3 * scaleMultiplier + ')',
			opacity: s1,
		}} />
	);
	return items;
}


addItemsSky.defaultProps= {
	getSeed, currentHeuristic, addItemSky, 
}
function addItemsSky(props){
	for (var i = 1; i <= numItems; i++) {
		let s1, s2, s3, s4;
		
		[s1, s2, s3, s4] = getSeeds(getSeed=props.getSeed, currentHeuristic=props.currentHeuristic)
		items = addItemSky()
		
	}
	return items
}