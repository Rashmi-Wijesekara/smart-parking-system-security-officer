import React from "react";
// import { useLocation } from "react-router-dom";

import { ReactComponent as PasswordResetImage1 } from "../../assets/images/password-reset-1.svg";
import Form1 from "../components/PRForm1";
import Navbar from "../../shared/components/Navbar";
import auth from "../../shared/Auth";

const EmailEnter = (props) => {
	// let location = useLocation();
	// const loginStatus = location.sendProps.loginStatus;

	const loginStatus = auth.getSession()

	return loginStatus === false ? (
		<div className="bg-background w-xl h-screen">
			<div className="mx-auto">
				<PasswordResetImage1 className=" mx-auto w-[200px] h-fit py-8" />
				<Form1 loginStatus={loginStatus} />
			</div>
		</div>
	) : (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow pl-[270px]">
				<div className="m-auto">
					<div className="bg-background w-xl h-screen">
						<PasswordResetImage1 className=" mx-auto w-[200px] h-fit py-8" />
						<Form1 loginStatus={loginStatus} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailEnter;
