import React, { useState, useEffect } from "react";

const Form = (props) => {

	const [input1, setInput1] = useState("")
	const [input2, setInput2] = useState("")

	// input fields are updated
	const handleTextInputChange = (event, id) => {
		if(id=== 1)
		{
			setInput1(event.target.value)
		}
		else if(id=== 2)
		{
			setInput2(event.target.value)
		}
	}

	// submit the form back to the parent component
	const formSubmit = () => {
		if(props.inputNames.length === 2){
			props.onSubmit(input1, input2)
			setInput1("")
			setInput2("")
		}else if(props.inputNames.length === 1){
			props.onSubmit(input1)
			setInput1("")
		}
	}

	return (
		<div
			className="bg-white max-w-xl font-second rounded-xl h-fit shadow-lg py-10 
		 transform duration-300 hover:scale-105"
		>
			<div className="px-5 py-3">
				{/* <div className="text-textGrey">
					Security Officer ID
				</div>
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/> */}

				{props.inputNames.map((input) => (
					<div className="" key={input.id}>
						<div className="text-textGrey">{input.name}</div>
						<input
							type={input.type}
							className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
							value={input.id === 1 ? input1 : input2}
							onChange={event=>handleTextInputChange(event, input.id)}
						/>
					</div>
				))}

				{/* forgot password link */}
				{props.forgot === true ? (
					<div
						className="text-right text-textGreyLight text-sm cursor-pointer 
					active:translate-y-2 transform duration-300"
					>
						forgot password?
					</div>
				) : (
					<div></div>
				)}

				<div
					className="bg-mainBlue text-center py-2 mt-5 text-white rounded-lg font-semibold 
				cursor-pointer shadow-lg active:shadow-2xl active:translate-y-2 transform duration-300"
					onClick={formSubmit}
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default Form;
