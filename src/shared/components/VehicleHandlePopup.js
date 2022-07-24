import React from 'react';

const VehicleHandlePopup = (props) => {
	const type = props.btnName

	// add or remove a vehicle
	const saveVehicleUpdate = () => {
		// send data back to the database
	}

	// close the modal when cancel button is clicked
	const closeModalHandler = () => {
		if (type === "Add Vehicle") {
			props.closeAddVehicle(false);
		} else if (type === "Remove Vehicle") {
			props.closeRemoveVehicle(false);
		}
	}

	return (
		<div
			className={`fixed flex justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full`}
			id="my-modal"
		>
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-8 rounded-xl shadow-xl`}
				id="modal"
			>
				<div className="text-textGrey text-md">
					Employee ID :
				</div>
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div className="text-textGrey text-md">
					Vehicle ID :
				</div>
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div
					onClick={saveVehicleUpdate}
					className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-3 px-10 rounded-xl my-5 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					{props.btnName}
				</div>

				<div
					onClick={closeModalHandler}
					className="bg-navbarBgGrey mx-auto font-second w-fit text-navbarLogoText py-2 px-6 rounded-xl my-5 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Cancel
				</div>
			</div>
		</div>
	);
}

export default VehicleHandlePopup