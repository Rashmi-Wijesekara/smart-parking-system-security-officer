import React from "react";
import Form from "../../shared/components/Form";

const LoginForm = () => {
	const InputNames = ["Security Officer ID", "Password"];

	return (
		<div className="max-w-xl mx-auto mt-10">
			<Form className="" inputNames={InputNames} forgot={true} />
		</div>
	);
};

export default LoginForm;
