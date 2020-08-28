import React from 'react';
import { Link } from "react-router-dom";
import {INTRO, HEURISTICS, COLOR_SCHEMES} from '../constants'
import UIfx from 'uifx'
import waterDropAudio from '../sounds/water-drop-click-production.mp3'
import chimesAudio from '../sounds/deep-chimes.mp3'
import {Howl} from 'howler'
import  * as HelperFunctions from './HelperFunctions.js'
/**
 * Global Variables
 */

// See constants/constants.js for the values of constants
const colorSchemes = COLOR_SCHEMES

const intro = INTRO

const heuristics = HEURISTICS

export function Sounds() {
	let chimes = new Howl({
    src: chimesAudio,
    autoplay: true,
    loop: true,
    volume: 0.03
    })
    let playChimes = () => chimes.play()
    playChimes()
	return(
		<></>
	);
}

/**
 * Navigation
 */


 Navigation.defaultProps = { 
 	currentHeuristic, id, playAudio, heuristics, getLightColor, getDarkColor, colorSchemes
 }
export function Navigation( props ) {
	// id is the page number in the web app
	// currentHeuristic is ???
	let [prev, next] = determineNextPrevNavigation(props.id, props.heuristics)
	return (
		<>
			{/*comment: 
			* this section represents the circle buttons
			*/}

			diplayNavigationCircleButtons(props)

			{/*comment: 
			* this section represents the arrow buttons 
			* for next and previous
			*/}
			arrowButtons = diplayNavigationArrowButton(Error(unimplemented))
		</>
	);
}


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


/**
 * Mountain
 */

export function Mountain( { className, currentHeuristic, colorSchemes } ) {
	return (
		<div className={ className }>
			<div className="m__group" 
				style={{ bottom: 60 * getSeed( currentHeuristic ) + "%" }}>
				<svg className="m__group-bg" 
					style={{ fill: getDarkColor( currentHeuristic, colorSchemes ) }} 
						width="100" height="200" viewBox="0 0 100 200">
					<path d="M85 85L75 75 65 65V50L55 40V20L45 
						30v20L35 60 25 70h-5l-5 5v10h25L30 95h-5l-5 
						5h55v-5L65 85h20zm-35 5v5h-5V85h10l-5 5z" />
					<path d="M60 145v-15l15-15v-15H20v10l10 10v10l10 
						10v35l10-10v-10z" />
				</svg>
				{/* comment: svg is scalable vector graphics
				* the <path> tags are used to create 
				* lines, curves and shapes.
				* d is the single property 
				* that defines the shape of a path.
				* d="M50..." means that the path will be moving;
				* the "M" in particular is a "Move To" command 
				* with the following two numbers being 
				* the x,y coordinates the path is moved.
				*/}
				<svg className="m__group-fg" 
					style={{ fill: getLightColor( currentHeuristic, colorSchemes ) }} 
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
			</div>
		</div>
	);
}


/**
 * Output the Heuristic based on the URL
 */			

export class HeuristicScene extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	waterDrop = new UIfx(waterDropAudio);
	playWaterDrop = () => {this.waterDrop.play(0.25)}

	handleClick(e) {
		e.preventDefault()

		this.playWaterDrop()
		let next;
		let id = parseInt(this.props.match.params.id);
		next = getCurrentNextHeuristicScene( id, heuristics );

		// This should navigate to the next item.
		this.props.history.push( '/' + next );

	}

	render() {
		let id = parseInt( this.props.match.params.id );
		let currentHeuristic, heuristic;
		[currentHeuristic, heuristic] = determineCurrentHeuristicAndHeuristic(id, heuristics, intro)
		// Render.
		return (
			heuristicScene=displayHeuristicScene(Error(unimplemented))
		);
	}
}