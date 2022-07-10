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
				<ProtectedRoute
					exact
					path="/password-reset"
					component={PasswordReset}
				/>
				<ProtectedRoute
					exact
					path="/verif-code"
					component={VerificationCode}
				/>
				<Route path="/error">404 not found</Route>
				<Redirect to="/error" />
			</Switch>
		</Router>
	);
}

export default App;
