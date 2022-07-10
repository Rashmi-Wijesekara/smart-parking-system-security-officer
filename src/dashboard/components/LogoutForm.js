import React, { useState } from "react";

import Form from "../../shared/components/Form";

const LogoutForm = (props) => {
	const [error, setError] = useState("");

	const InputNames = [
		{ id: 1, name: "Security Officer ID", type: "text" },
		{ id: 2, name: "Password", type: "password" },
	];
	const officerId = "123";
	const password = "zzz";

	// check for id and password
	const formSubmitHandler = (input1, input2) => {
		if (input1 === officerId && input2 === password) {
			console.log("successfully logged-out");
			setError("");
			props.logoutHandler(input1, input2);
		} 
		else {
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
				onSubmit={formSubmitHandler}
				title="Please enter your password again to verify log out"
				btnName="Log out"
			/>
		</div>
	);
};

export default LogoutForm;
