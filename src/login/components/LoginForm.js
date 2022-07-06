import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../shared/components/Form";

const LoginForm = (props) => {
	const [error, setError] = useState("");

	const InputNames = [
		{ id: 1, name: "Security Officer ID", type: "text" },
		{ id: 2, name: "Password", type: "password" },
	];
	const officerId = "123";
	const password = "zzz";
	let history = useHistory();

	// check for id and password
	const formSubmitHandler = (input1, input2) => {
		if (input1 === officerId && input2 === password) {
			console.log("successfully logged-in");
			setError("");

			// redirect to the dashboard
			history.push("/dashboard");
		} else {
			console.log("wrong id & password");
			setError("Invalid ID & Password");
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
