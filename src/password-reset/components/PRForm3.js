import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../shared/components/Form";
import auth from "../../shared/Auth";

const PRForm3 = (props) => {
	const [error, setError] = useState("");
	let history = useHistory();

	const InputNames = [
		{ id: 1, name: "Password", type: "password" },
		{ id: 2, name: "Confirm Password", type: "password"}
	];

	const formSubmitHandler = (password, confirmedPassword) => {
		if (password === confirmedPassword){
			setError("");
			auth.deleteSession()
			const {id,currentPswd} = auth.getLoginData()
			auth.saveLoginData(id, password)
			history.push({
				pathname: "/",
				// sendProps: { loginStatus: props.loginStatus },
			});
		} else {
			setError("Password and the confirmed password should be the same");
		}
	};

	return (
		<div className="max-w-xl mx-auto mt-5">
			{error && (
				<div className="bg-red-400 rounded-lg text-textInput my-3 text-center font-semibold font-second">
					{error}
				</div>
			)}
			<Form
				inputNames={InputNames}
				onSubmit={formSubmitHandler}
				btnName="Reset Password"
				title="Please enter your new password"
			/>
		</div>
	);
};

export default PRForm3;
