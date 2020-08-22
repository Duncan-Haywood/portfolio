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

class App extends React.Component {
	ComponentWithRegex({ match }) {
		return (
		<div>
			<h3>Only asc/desc are allowed: {match.params.direction}</h3>
		</div>
		);
	}

	render() {
		// The basename attribute makes it run in a subfolder.
		return (
			<Router basename={'/'}>
				<Route
					path="/order/:direction(asc|desc)"
					component={this.ComponentWithRegex}
				/>
				<Switch>
					<Route exact path="/:id" component={HeuristicScene} />
					<Route exact path="" component={HeuristicScene} />
				</Switch>
			</Router>
		)
	}
}

export default App;
