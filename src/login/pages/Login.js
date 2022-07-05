import React from "react";

import { ReactComponent as LoginImage } from "../../assets/images/login.svg";
import LoginForm from "../components/LoginForm"

const Login = () => {
	return (
		<div className="bg-background w-xl h-screen">
			<div className="mx-auto">
				<LoginImage className="w-full pt-10" />
				<div className="font-main font-semibold text-center my-5">
					<div className="text-[35px]">Security Officer - Login</div>
					<div className="text-[20px] mt-2">Smart Parking System</div>
				</div>
				<LoginForm/>
			</div>
		</div>
	);
};

export default Login;
