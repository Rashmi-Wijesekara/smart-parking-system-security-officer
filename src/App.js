import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

import "./App.css";
import {ProtectedRoute} from './ProtectedRoute'

import Login from "./login/pages/Login";
import PasswordReset from "./password-reset/pages/EmailEnter"
import VerificationCode from "./password-reset/pages/VerificationCode";
import NewPassword from "./password-reset/pages/NewPassword"
import Dashboard from "./dashboard/pages/Dashboard"
import EmployeeData from "./dashboard/pages/EmployeeData"
import ParkingLog from "./dashboard/pages/ParkingLog";
import MyProfile from "./dashboard/pages/MyProfile";
import Logout from "./dashboard/pages/Logout";

import SampleComponent from "./realtime/SampleComponent"

function App() {
	return (

		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>

				<ProtectedRoute
					exact
					path="/dashboard"
					component={Dashboard}
				/>
				<ProtectedRoute
					exact
					path="/employee-data"
					component={EmployeeData}
				/>
				<ProtectedRoute
					exact
					path="/parking-log"
					component={ParkingLog}
				/>
				<ProtectedRoute
					exact
					path="/profile"
					component={MyProfile}
				/>
				<ProtectedRoute
					exact
					path="/logout"
					component={Logout}
				/>
				<Route
					exact
					path="/password-reset"
					component={PasswordReset}
				/>
				<Route
					exact
					path="/verif-code"
					component={VerificationCode}
				/>
				<Route
					exact
					path="/new-password"
					component={NewPassword}
				/>
				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;
