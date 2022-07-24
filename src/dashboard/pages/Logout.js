import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LogoutImage } from "../../assets/images/logout.svg";
import Navbar from "../../shared/components/Navbar";
import LogoutForm from "../components/LogoutForm";
import auth from "../../shared/Auth";

const Logout = (props) => {
	let history = useHistory();

	const logoutHandler = (id, pswd) => {
		auth.logout(() => {
			history.push("/");
		});
	};

	return (
		<div className="flex flex-row">
			<Navbar path="/logout" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="mx-auto">
					<LogoutImage className=" mx-auto w-[200px] h-fit py-8" />

					<LogoutForm logoutHandler={logoutHandler} />
				</div>
			</div>
		</div>
	);
};

export default Logout;
