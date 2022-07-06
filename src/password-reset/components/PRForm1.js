import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import Form from "../../shared/components/Form";

const PRForm1 = () => {
	const [error, setError] = useState("");

	let history = useHistory();
	const checkMail = "zzz"

	const InputNames = [
		{ id: 1, name: "E-mail", type: "email" }
	];

	const formSubmitHandler = (email) => {
		if(email === checkMail){
			setError("");
			history.push("/verif-code")
		}else {
			setError("Invalid Email Address")
		}
	}

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
				btnName="Enter"
				title="Please enter your valid email address"
			/>
		</div>
	);
};

export default PRForm1;
