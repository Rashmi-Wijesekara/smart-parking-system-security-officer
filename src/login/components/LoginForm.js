import React from "react";
import Form from "../../shared/components/Form";

const LoginForm = () => {
	const InputNames = [
		{ id: 1, name: "Security Officer ID", type: "text" },
		{ id: 2, name: "Password", type: "password"},
	]

	const officerId = "123"
	const password = "zzz"

	const formSubmitHandler = (input1, input2) => {
		if(input1 === officerId && input2 === password) {
			console.log("successfully logged-in")
		}else {
			console.log("wrong id & password")
		}
	}

	return (
		<div className="max-w-xl mx-auto mt-10">
			<Form
				className=""
				inputNames={InputNames}
				forgot={true}
				onSubmit={formSubmitHandler}
			/>
		</div>
	);
};

export default LoginForm;
