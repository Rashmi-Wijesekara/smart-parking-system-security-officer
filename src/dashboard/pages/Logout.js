import React from 'react'

import { ReactComponent as LogoutImage } from "../../assets/images/logout.svg";
import Navbar from "../../shared/components/Navbar";
import LogoutForm from "../components/LogoutForm";

const Logout = () => {
  return (
		<div className="flex flex-row">
			<Navbar path="/logout" />
			<div className="bg-background flex-grow">
				<div className="mx-auto">
					<LogoutImage className=" mx-auto w-[200px] h-fit py-8" />
					
					<LogoutForm />
				</div>
			</div>
		</div>
	);
}

export default Logout