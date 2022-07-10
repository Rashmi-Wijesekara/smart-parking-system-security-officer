import React from 'react';
import { NavLink } from "react-router-dom";

import { ReactComponent as PasswordIcon } from "../../assets/icons/password.svg";

const PasswordResetButton = () => {
	return (
		<NavLink
			to={{
				pathname: "/password-reset",
				sendProps: { loginStatus: true },
			}}
		>
			<div
				className="flex items-center bg-mainBlue font-navbarText w-fit py-3 px-5 mt-10 rounded-xl cursor-pointer text-white
					hover:shadow-lg transform duration-300 active:translate-y-2 mx-auto"
			>
				<PasswordIcon className="mr-2" />
				Password Reset
			</div>
		</NavLink>
	);
}

export default PasswordResetButton