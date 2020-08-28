/**
 * TSH App Dev
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import { HeuristicScene } from './components/HeuristicScene.js';

/**
 * Render the Heuristics App
 */

const routes = {
  '/order/:direction(asc|desc)' ({direction}) => <ComponentWithRegex diereciton={direction}/>
  '/:id': ({id}) => <HeuristicScene userId={id} />
  '': () => <HeuristicScene />

}

ComponentWithRegex.defaultProps = {
	direction
}
function ComponentWithRegex(props) {
	return (
		<div>
			<h3>Only asc/desc are allowed: {props.direction}</h3>
		</div>
	);
}

App.defaultProps = {
	ComponentWithRegex, HeuristicScene
}
function App (props) {
	// The basename attribute makes it run in a subfolder.
	return (
		//TODO: Hooks for Routes
		<Router basename={'/'}>
			<Route
				path="/order/:direction(asc|desc)"
				component={props.ComponentWithRegex}
			/>
			<Switch>
				<Route exact path="/:id" component={props.HeuristicScene} />
				<Route exact path="" component={props.HeuristicScene} />
			</Switch>
		</Router>
	)
}

export default App;
