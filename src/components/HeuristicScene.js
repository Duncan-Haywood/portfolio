import React from 'react';
import { Link } from "react-router-dom";
import {INTRO, HEURISTICS, COLOR_SCHEMES} from '../constants'
import UIfx from 'uifx'
import waterDropAudio from '../sounds/water-drop-click-production.mp3'
import chimesAudio from '../sounds/deep-chimes.mp3'
import {Howl} from 'howler'
import { determineNextPrevNavigation, determineCurrentHeuristicAndHeuristic, getCurrentNextHeuristicScene, getSeed, getRandomColor, getDarkColor, getLightColor  } from './HelperFunctions.js'
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
export function Navigation( { currentHeuristic, id, playAudio } ) {
	// id is the page number in the web app
	// currentHeuristic is ???
	let [prev, next] = determineNextPrevNavigation(id, heuristics)
	return (
		<>
			{/*comment: 
			* this section represents the circle buttons
			*/}
			<ul className="heuristics__navigation">
				<li className={ !id ? 'is-active is-home' : 'is-home' } >
				<Link to="/" onClick={playAudio}>Home</Link></li>
				{heuristics.map((value, index) => {
					let i = parseInt(index) + 1;
					return <li className={ id === i ? 'is-active' : '' } 
						key={index}>
					<Link to={"/" + i} onClick={playAudio}>{i}</Link></li>
				})}
			</ul>

			{/*comment: 
			* this section represents the arrow buttons 
			* for next and previous
			*/}
			<div className="heuristics__navigation-next-prev"
				style={{
					backgroundColor: getDarkColor( currentHeuristic, colorSchemes ),
					color: getLightColor( currentHeuristic, colorSchemes ),
				}}>
				<Link to={"/" + prev} onClick={playAudio}>
					<svg xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24">
						<path d="M14 20l-8-8 8-8 1.414 1.414L8.828 
							12l6.586 6.586"/>
					</svg> 
					Previous
					</Link>
				<Link to={"/" + next} onClick={playAudio}> 
					<svg xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24">
						<path d="M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 
							6.586"/>
					</svg> 
					Next
					</Link>
			</div>
		</>
	);
}


/**
 * Heuristic Quote
 */

export function Quote( { currentHeuristic, heuristic } ) {
	return (
		<div className="heuristic__quote"
			style={{
				backgroundColor: getDarkColor( currentHeuristic, colorSchemes ),
				color: getLightColor( currentHeuristic, colorSchemes ),
			}}>
			{ heuristic }
		</div>
	);
}


/**
 * Sky
 */

export function Sky( { className, currentHeuristic } ) {
	// Output elements to transform.
	let items = [];
	let numItems = 10;
	let scaleMultiplier = 6;
	for (var i = 1; i <= numItems; i++) {
		let s1 = getSeed( getSeed( currentHeuristic ) * i );
		let s2 = getSeed( getSeed( currentHeuristic ) * i + 1 );
		let s3 = getSeed( getSeed( currentHeuristic ) * i + 2 );
		let s4 = Math.round( getSeed( getSeed( currentHeuristic ) * i + 3 ) * 10 );
		items.push(
			<span key={ i } style={{
				backgroundColor: getRandomColor( i + 1 * currentHeuristic, 
					currentHeuristic, colorSchemes, getSeed),
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
	}

	let perspectiveAlgo = Math.round( getSeed( currentHeuristic ) * 5 + 20 );

	return (
		<div className={ className }
			style={{
				backgroundColor: getRandomColor( currentHeuristic, 
					currentHeuristic, colorSchemes, getSeed ),
				perspective: perspectiveAlgo + 'px'
				}}>
			{ items }
		</div>
	);
}


/**
 * Mountain
 */

export function Mountain( { className, currentHeuristic } ) {
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
		// let id = this.props.match.params.id
		next = getCurrentNextHeuristicScene( this.props.match.params.id , heuristics )

		// This should navigate to the next item.
		this.props.history.push( '/' + next );

	}

	render() {
		// let id = parseInt( this.props.match.params.id );
		let currentHeuristic, heuristic;
		[currentHeuristic, heuristic] = determineCurrentHeuristicAndHeuristic(this.props.match.params.id, heuristics, intro)
		

		// Render.
		return (
			<>
				{/*Navigation and quotes*/}
				<h1>A space of peace and art.</h1>
				<Sounds />
				<Navigation id={ this.props.match.params.id } 
					currentHeuristic={ currentHeuristic } 
					playAudio={ this.playWaterDrop }/>
				<h2>{ currentHeuristic === 0 ? '' : currentHeuristic }</h2>
				<Quote currentHeuristic={ currentHeuristic } 
					heuristic={ heuristic } />
					{/*background*/}
				<section className="heuristic" onClick={ this.handleClick }>
					<Sky className="heuristic__primary" 
						currentHeuristic={ currentHeuristic } />
					<Sky className="heuristic__clone" 
						currentHeuristic={ currentHeuristic } />
					<Mountain className="m" 
						currentHeuristic={ currentHeuristic } />
					<Mountain className="m__clone" 
						currentHeuristic={ currentHeuristic } />
				</section>
			</>
		);
	}
}