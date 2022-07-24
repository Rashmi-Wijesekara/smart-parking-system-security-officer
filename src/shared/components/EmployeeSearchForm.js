import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import VehicleHandle from "../../shared/components/VehicleHandlePopup";

const EmployeeSearchForm = () => {
	const [openAddVehicle, setOpenAddVehicle] =
		useState(false);
	const [openRemoveVehicle, setOpenRemoveVehicle] =
		useState(false);

	const searchClickHandler = () => {
		// send the inputs back to the page
	};

	// add a new vehicle
	const vehicleAddHandler = () => {
		setOpenAddVehicle(true);
	};

	// remove a vehicle
	const vehicleRemoveHandler = () => {
		setOpenRemoveVehicle(true);
	};

	return (
		<div>
			<div className="bg-white font-second p-8 rounded-xl shadow-xl">
				<div className="text-textGrey text-md text-center">
					Vehicle ID :
				</div>
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
				/>

				<div
					className="bg-mainBlue w-full mx-auto text-navbarTextWhite py-2 px-5 rounded-xl items-center gap-2 my-4 flex flex-row cursor-pointer hover:shadow-lg transform duration-300 active:translate-y-2"
					onClick={searchClickHandler}
				>
					<SearchIcon />
					Search
				</div>
			</div>
			<div
				className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				onClick={vehicleAddHandler}
			>
				Add a New Vehicle
			</div>
			<div
				className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				onClick={vehicleRemoveHandler}
			>
				Remove a Vehicle
			</div>
			
			{/* popup windows */}
			{openAddVehicle && (
				<VehicleHandle
					btnName="Add Vehicle"
					closeAddVehicle={setOpenAddVehicle}
				/>
			)}
			{openRemoveVehicle && (
				<VehicleHandle
					btnName="Remove Vehicle"
					closeRemoveVehicle={setOpenRemoveVehicle}
				/>
			)}
		</div>
	);
};
export default EmployeeSearchForm;
