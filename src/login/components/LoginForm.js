import React, { useState } from "react";
import Form from "../../shared/components/Form";

import Login__connection from "../../connections/Login-to";

const LoginForm = (props) => {
	const [error, setError] = useState("");

	const InputNames = [
		{ id: 1, name: "Security Officer ID", type: "text" },
		{ id: 2, name: "Password", type: "password" },
	];

	// check for id and password
	const formSubmitHandler = async (input1, input2) => {
		const officer = await Login__connection.getLoginData(
			input1
		);
		console.log("officer =>")
		console.log(officer);

		if (!officer) {
			console.log("wrong id & password");
			setError("Invalid ID & Password");
		}
		if (input2 === officer.password) {
			console.log("successfully logged-in");
			setError("");

			const shiftLog =
				await Login__connection.createShiftLog(input1);

			console.log("shift log =>")
			console.log(shiftLog);

			props.loginHandler(input1, input2, officer);
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
				forgot={true}
				onSubmit={formSubmitHandler}
				forgotPathTo={"/password-reset"}
				btnName="Login"
				loginStatus={false}
			/>
		</div>
	);
};

export default LoginForm;
