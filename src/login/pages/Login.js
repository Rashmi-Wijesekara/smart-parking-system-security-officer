import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LoginImage } from "../../assets/images/login.svg";
import LoginForm from "../components/LoginForm"
import auth from "../../shared/Auth";

const Login = () => {
	let history = useHistory();

	const loginHandler = (id, pswd, officer) => {
		auth.login(() => {
			history.push("/dashboard")
		}, id, pswd, officer)
	}	

	return (
		<div className="bg-background w-xl h-screen">
			<div className="mx-auto">
				<LoginImage className=" mx-auto w-[200px] h-fit py-8" />
				<div className="font-main font-semibold text-center my-5">
					<div className="text-2xl">Security Officer - Login</div>
					<div className="text-sm mt-2">Smart Parking System</div>
				</div>
				<LoginForm loginHandler={loginHandler}/>
			</div>
		</div>
	);
};

export default Login;
