import React from "react";
// import { useLocation } from "react-router-dom";

import { ReactComponent as PasswordResetImage3 } from "../../assets/images/password-reset-3.svg";
import Navbar from "../../shared/components/Navbar";
import Form3 from "../components/PRForm3";
import auth from "../../shared/Auth";

const NewPassword = (props) => {
	// let location = useLocation();
	// const loginStatus = location.sendProps.loginStatus;

	const loginStatus = auth.getSession()

	return loginStatus === false ? (
		<div className="bg-background w-xl h-screen">
			<div className="mx-auto">
				<PasswordResetImage3 className=" mx-auto w-[200px] h-fit py-8" />
				<Form3 loginStatus={loginStatus} />
			</div>
		</div>
	) : (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow pl-[270px]">
				<div className="m-auto">
					<div className="bg-background w-xl h-screen">
						<PasswordResetImage3 className=" mx-auto w-[200px] h-fit py-8" />
						<Form3 loginStatus={loginStatus} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPassword;
