import React, {useEffect} from "react";
import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg";

// import * as testing from "../../rfidTest"

const MainPopup = (props) => {

	// select the RFID reader from the alert notification
	// and give permission to use in this website

	// const testingReader = () => {
	// 	navigator.usb
	// 		.requestDevice({ filters: [] })
	// 		.then(function (device) {
	// 			console.log(device);
	// 		});
	// }

	return (
		<div
			className={`hidden fixed justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full`}
			id="my-modal"
		>
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-8 rounded-xl shadow-xl max-w-sm`}
				id="modal"
			>
				<ProfilePic className="mx-auto w-[140px]" />

				{/* employee id imput */}
				<div className="text-textGrey text-md">
					Employee ID :
				</div>
				<input
					type="text"
					className="bg-textInput w-1/2 rounded-lg my-3 h-10 px-3 py-2"
				/>

				{/* employee name input */}
				<div className="text-textGrey text-md">Name :</div>
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 h-10 px-3 py-2"
				/>

				<div className="grid grid-cols-2">
					{/* ******************* change into a dropdown */}
					{/* vehicle id input */}
					<div className="text-textGrey text-md col-span-3 mb-2">
						Vehicle ID :
					</div>
					<input
						type="text"
						className="bg-textInput w-full rounded-lg my-auto h-10 px-3 py-2"
					/>

					<div className="bg-mainBlue ml-auto my-auto font-second w-fit text-white py-2 px-6 rounded-xl cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2">
						Add Vehicle
					</div>
				</div>

				<div
					// onClick={testingReader}
					className="bg-mainBlue mx-auto font-second text-white py-2 px-6 w-48 text-center rounded-xl mt-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Confirm
				</div>
			</div>
		</div>
	);
};

export default MainPopup;
