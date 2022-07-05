import React from "react";

const Form = (props) => {
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
					<div className="">
						<div className="text-textGrey">{input}</div>
						<input
							type="text"
							className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
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
				>
					Login
				</div>
			</div>
		</div>
	);
};

export default Form;
