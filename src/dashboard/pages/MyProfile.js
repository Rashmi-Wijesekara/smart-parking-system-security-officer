import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../shared/components/Navbar";

const MyProfile = () => {
	return (
		<div className="flex flex-row">
			<Navbar path="/profile" />
			<div className="bg-background flex-grow">
				<div className="w-fit m-auto">my profile</div>
				<NavLink
					to={{
						pathname: "/password-reset",
						sendProps: { loginStatus: true },
					}}
				>
					<div className="bg-red-300 w-fit py-2 px-4 mx-auto mt-10 rounded-xl cursor-pointer text-white">
						pswd reset
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default MyProfile;
