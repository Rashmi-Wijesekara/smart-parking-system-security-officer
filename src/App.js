import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					login page
				</Route>

				<Route path="/dashboard">dashboard page</Route>
        <Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;
