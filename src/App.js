import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import Login from "./login/pages/Login";
import PasswordReset from "./password-reset/components/PasswordResetHandler"
import Dashboard from "./dashboard/pages/Dashboard"
import EmployeeData from "./dashboard/pages/EmployeeData"
import ParkingLog from "./dashboard/pages/ParkingLog";
import MyProfile from "./dashboard/pages/MyProfile";
import Logout from "./dashboard/pages/Logout";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>

				<Route path="/dashboard">
					<Dashboard />
				</Route>

				<Route path="/employee-data">
					<EmployeeData />
				</Route>

				<Route path="/parking-log">
					<ParkingLog />
				</Route>

				<Route path="/profile">
					<MyProfile />
				</Route>

				<Route path="/logout">
					<Logout />
				</Route>

				<Route path="/password-reset">
					<PasswordReset />
				</Route>
				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;
