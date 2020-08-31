

/**
 * Sky
 */

export function Sky( props ) {
	// Output elements to transform.
	//TODO: what are items?
	let items = [];
	let numItems = 10;
	//TODO: what does this do?
	let scaleMultiplier = 6;
	items = addMultiItemsSky(props)

	let perspectiveAlgo = Math.round( props.getSeed( props.currentHeuristic ) * 5 + 20 );
	sky = displaySky(props)
	return (
		sky
	);
}
Sky.defaultProps = { 
 	className, currentHeuristic, getSeed, getRandomColor, id, colorSchemes
 }


/*
* Sky helper Functions.
*/
export function displaySky(props){
	backgroundColor = props.getRandomColor( props.currentHeuristic, 
					props.currentHeuristic, props.colorSchemes, props.getSeed )
	perspective = props.perspectiveAlgo + 'px'
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
	className: undefined, perspectiveAlgo: undefined, currentHeuristic: undefined, items: undefined, getRandomColor: getRandomColor, colorSchemes: colorSchemes, getSeed: getSeed 
}




function getMultiSeeds(props){
	let s1 = props.getSeed( props.getSeed( props.currentHeuristic ) * props.i );
	let s2 = props.getSeed( props.getSeed( props.currentHeuristic ) * props.i + 1 );
	let s3 = props.getSeed( props.getSeed( props.currentHeuristic ) * props.i + 2 );
	let s4 = Math.round( props.getSeed( props.getSeed( props.currentHeuristic ) * props.i + 3 ) * 10 );
	return [s1, s2, s3, s4]
}
getSeeds.defaultProps = {
	i: undefined, getSeed: getSeed, currentHeuristic: currentHeuristic
}




function addItemSky( props ){
	items.push(
		<span key={ props.i } style={{
			backgroundColor: props.getRandomColor( props.i + 1 * props.currentHeuristic, 
				props.currentHeuristic, props.colorSchemes, props.getSeed),
			left: ( 100 / props.numItems ) * props.i + "%",
			top: 100 * props.s1 + "%",
			transform: 
				'translate(-50%, -50%)'
				+ 'translateZ(' + props.s4 + 'px)'
				+ 'rotate(' + props.s2 * 360 + 'deg)'
				+ 'scale(' + props.s3 * props.scaleMultiplier + ')',
			opacity: props.s1,
		}} />
	);
	return items;
}
addItemSky.defaultProps = {
	items: undefined, i: undefined, s1: undefined, s2: undefined, s3: undefined, s4: undefined, currentHeuristic: undefined, getRandomColor: getRandomColor, colorSchemes: colorSchemes, getSeed: getSeed, scaleMultiplier: scaleMultiplier
}




function addMutliItemsSky(props){
	for (var i = 1; i <= numItems; i++) {
		let s1, s2, s3, s4;
		
		[s1, s2, s3, s4] = getMultiSeeds(i)
		items = addItemSky(i , s1, s2, s3, s4, items, currentHeuristic)
		
	}
	return items
}
addMultiItemsSky.defaultProps= {
	items: undefined, currentHeuristic: undefined, getMultiSeeds: getMultiSeeds, addItemSky: addItemSky, 
}