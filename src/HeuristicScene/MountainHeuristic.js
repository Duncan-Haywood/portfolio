import {getSeed, getDarkColor, getLightColor} from './HelperFunctions.js'
import React from 'react'

export function Mountain( props ) {
	let mgStyle = getMgStyle({currentHeuristic: props.currentHeuristic})
	let bgMountain= displayMountainBG({currentHeuristic: props.currentHeuristic})
	let fgMountain = displayMountainFG({currentHeuristic: props.currentHeuristic})
	return (
		<div className={ props.className }>
			<div className="m__group" 
				style={{ bottom: {mgStyle} }}>
				{bgMountain}
				{fgMountain}
			</div>
		</div>
	);
}
Mountain.defaultProps= {
	className: undefined, currentHeuristic: undefined, getSeed: getSeed 
}


/*
* Mountain Helper Functions
*/
export function getMgStyle(props){
	let seed = getSeed({number: props.currentHeuristic})
	let mgStyle = 60 * seed + "%";
	return mgStyle;
}
getMgStyle.defaultProps = {
	currentHeuristic: undefined, getSeed: getSeed
}


export function displayMountainBG(props){
	let darkColor = props.getDarkColor( {currentHeuristic: props.currentHeuristic} )
	return(
		<svg className="m__group-bg" 
	style={{ fill: {darkColor} }} 
		width="100" height="200" viewBox="0 0 100 200">
	<path d="M85 85L75 75 65 65V50L55 40V20L45 
		30v20L35 60 25 70h-5l-5 5v10h25L30 95h-5l-5 
		5h55v-5L65 85h20zm-35 5v5h-5V85h10l-5 5z" />
	<path d="M60 145v-15l15-15v-15H20v10l10 10v10l10 
		10v35l10-10v-10z" />
</svg>		)
}
displayMountainBG.defaultProps = {
	currentHeuristic: undefined, getDarkColor: getDarkColor
}



export function displayMountainFG(props){
	let lightColor = props.getLightColor( {currentHeuristic: props.currentHeuristic} )
	return(
<svg className="m__group-fg" 
	style={{ fill: {lightColor} }} 
		width="100" height="200" viewBox="0 0 100 200">
	<path opacity=".3" 
		d="M50 145h10v-15H50v15zm15-45v15h10v-15H65zm-35 
			30h10v-10H30v10z" />
		}
	<path fill="black" opacity=".1" 
		d="M40 155h10l10-10H50l-10 10zm10-15l-10-10H30l10 
			10h10zm-10-20l-10-10H20l10 10h10zm25-5l-15 
			15h10l15-15H65z" />
	<path opacity=".6" 
		d="M65 50L55 40H45l10 10h10zm10 25H55l10 
			10h20L75 75z" />
	<path opacity=".4" 
		d="M45 50L25 70h10l20-20z" />
	<path opacity=".2" 
		d="M25 85h10V70H25v15zm30-35v25h10V50H55z" />
</svg>
)
}
displayMountainFG.defaultProps = {
	currentHeuristic: undefined, getLightColor: getLightColor
}