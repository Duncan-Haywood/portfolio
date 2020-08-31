/**
 * Portfolio App Dev
 */
import React from 'react';
import './App.scss';
import { HeuristicScene } from './HeuristicScene';

/**
 * Render the Heuristics App
 */


function App (props) {
	// The basename attribute makes it run in a subfolder.
	routes = props.HeuristicSceneRoutes()
	const routeResult = props.useRoutes(routes);
	return (
		//TODO: <Router basename={'/'}>
		// </Router>
		{routeResult}
	)
}
App.defaultProps = {
	HeuristicSceneRoutes: HeuristicSceneRoutes, useRoutes: useRoutes
}
export default App;



/*
* ------------------------------------------------------
*/

/*
* App Helper Methods
*/




export function getHeuristicSceneRoutes(props) {
  routes = {
	  '/order/:direction(asc|desc)': ({direction}) => <props.ComponentWithRegex direction={direction} />, 
	  '/:id': ({id}) => <props.HeuristicScene userId={id} />,
	  '': () => <props.HeuristicScene />
  }
  return(routes)
}
Routes.defaultProps = {
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
