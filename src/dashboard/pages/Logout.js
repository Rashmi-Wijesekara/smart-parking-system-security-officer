import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LogoutImage } from "../../assets/images/logout.svg";
import Navbar from "../../shared/components/Navbar";
import LogoutForm from "../components/LogoutForm";
import auth from "../../shared/Auth";

import Login__connection from "../../connections/Login-to"

const Logout = (props) => {
	// const [error, setError] = useState("");
	let history = useHistory();

	const logoutHandler = async (id, pswd) => {

		const shiftUpdate = await Login__connection.updateShiftLog(id)
		console.log(shiftUpdate)

		if(shiftUpdate === false) {
			console.log("Something went wrong")
		}

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
