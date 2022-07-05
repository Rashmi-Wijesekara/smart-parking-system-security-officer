import React from "react";
import Form from "../../shared/components/Form";

const LoginForm = () => {
	const InputNames = [
		{ id: 1, name: "Security Officer ID" },
		{ id: 2, name: "Password" },
	];

	return (
		<div className="max-w-xl mx-auto mt-10">
			<Form
				className=""
				inputNames={InputNames}
				forgot={true}
			/>
		</div>
	);
};

export default LoginForm;
