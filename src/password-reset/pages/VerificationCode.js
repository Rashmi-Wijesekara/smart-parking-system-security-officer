import React from 'react'
import { useLocation } from "react-router-dom";

import { ReactComponent as PasswordResetImage2 } from "../../assets/images/password-reset-2.svg";
import Navbar from "../../shared/components/Navbar";
import Form2 from "../components/PRForm2";

const VerificationCode = (props) => {
  let location = useLocation();
	const loginStatus = location.sendProps.loginStatus;

  return loginStatus === false ? (
		<div className="bg-background w-xl h-screen">
			<div className="mx-auto">
				<PasswordResetImage2 className=" mx-auto w-[200px] h-fit py-8" />
				<Form2 loginStatus={loginStatus} />
			</div>
		</div>
	) : (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow">
				<div className="m-auto">
					<div className="bg-background w-xl h-screen">
						<PasswordResetImage2 className=" mx-auto w-[200px] h-fit py-8" />
						<Form2 loginStatus={loginStatus} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default VerificationCode