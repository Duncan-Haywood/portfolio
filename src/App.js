/**
 * Portfolio App Dev
 */
import React from 'react';
import './App.scss';
import { HeuristicScene } from './HeuristicScene';
import { useRoutes } from 'hookrouter';
/**
 * Render the Heuristics App
 */


export function App (props) {
	// The basename attribute makes it run in a subfolder.
	let routes = props.getAppRoutes({})
	const routeResult = props.useRoutes(routes);
	return (
		//TODO: <Router basename={'/'}>
		// </Router>
		routeResult
	)
}
App.defaultProps = {
	getAppRoutes: getAppRoutes, useRoutes: useRoutes
}


/*
* ------------------------------------------------------
*/

/*
* App Helper Methods
*/




export function getAppRoutes(props) {
  let routes = {
	  '/order/:direction(asc|desc)': ({direction}) => <props.ComponentWithRegex direction={direction} />, 
	  '/:id': ({id}) => <props.HeuristicScene id={id} />,
	  '': () => <props.HeuristicScene />
  }
  return(routes)
}
getAppRoutes.defaultProps = {
	ComponentWithRegex: ComponentWithRegex, HeuristicScene: HeuristicScene
}


export function ComponentWithRegex(props) {
	return (
		<div>
			<h3>Only asc/desc are allowed: {props.direction}</h3>
		</div>
	);
}
ComponentWithRegex.defaultProps = {
	direction: undefined
}
