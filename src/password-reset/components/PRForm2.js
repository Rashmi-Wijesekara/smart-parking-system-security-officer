import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "../../shared/components/Form";

const PRForm1 = (props) => {
	const [error, setError] = useState("");

	let history = useHistory();
	const checkCode = "123";

	const InputNames = [
		{ id: 1, name: "Verification Code", type: "number" },
	];

	const formSubmitHandler = (code) => {
		if (code === checkCode) {
			setError("");

			console.log("yeeeesss")

			history.push({
				pathname: "/verif-code",
				sendProps: { loginStatus: props.loginStatus },
			});
		} else {
			setError("Invalid Code");
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
				btnName="Verify"
				title="Please check your inbox and enter the given verification code"
			/>
		</div>
	);
};

export default PRForm1;
