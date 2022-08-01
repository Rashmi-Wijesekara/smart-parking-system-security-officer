import React, { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import VehicleHandle from "../../shared/components/VehicleHandlePopup";

const EmployeeSearchForm = (props) => {
	const [openAddVehicle, setOpenAddVehicle] =
		useState(false);
	const [openRemoveVehicle, setOpenRemoveVehicle] =
		useState(false);

	const [vehicleId, setVehicleId] = useState("");

	const [add__vehicleId, setAdd__VehicleId] = useState("");
	const [add__employeeId, setAdd__EmployeeId] =
		useState("");
	const [remove__employeeId, setRemove__EmployeeId] =
		useState("");
	const [remove__vehicleId, setRemove__VehicleId] =
		useState("");

	//vehicle id input field is updated
	const handleTextInputChange = (event) => {
		setVehicleId(event.target.value);
	};

	const searchClickHandler = () => {
		// send the inputs back to the page
		props.vehicleId(vehicleId);
	};

	// add a new vehicle
	const vehicleAddHandler = () => {
		setOpenAddVehicle(true);
	};

	// remove a vehicle
	const vehicleRemoveHandler = () => {
		setOpenRemoveVehicle(true);
	};

	useEffect(() => {
		if(add__vehicleId !== ""){
			props.addHandler(add__employeeId, add__vehicleId)
			setRemove__EmployeeId("")
			setRemove__VehicleId("")
		}
	}, [add__vehicleId]);

	useEffect(() => {
		if (remove__vehicleId !== "") {
			props.removeHandler(
				remove__employeeId,
				remove__vehicleId
			);
			setAdd__EmployeeId("");
			setAdd__VehicleId("");
		}
	}, [remove__vehicleId]);

	const setAddEmployee = (emid) => {
		console.log(emid);
		setAdd__EmployeeId(emid);
	};
	const setAddVehicle = (veid) => {
		console.log(veid);
		setAdd__VehicleId(veid);
	};
	const setRemoveEmployee = (emid) => {
		console.log(emid);
		setRemove__EmployeeId(emid);
	};
	const setRemoveVehicle = (veid) => {
		console.log(veid);
		setRemove__VehicleId(veid);
	};

	return (
		<div>
			<div className="bg-white font-second p-8 rounded-xl shadow-xl">
				<div className="text-textGrey text-md text-center">
					Vehicle ID :
				</div>

				{/* vehicle id input field */}
				<input
					type="text"
					className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
					onChange={(event) => handleTextInputChange(event)}
				/>

				<div
					className="bg-mainBlue w-full mx-auto text-navbarTextWhite py-2 px-5 rounded-xl items-center gap-2 my-4 flex flex-row cursor-pointer hover:shadow-lg transform duration-300 active:translate-y-2"
					onClick={searchClickHandler}
				>
					<SearchIcon />
					Search
				</div>
			</div>

			{/* add button */}
			<div
				className="bg-mainBlue mx-auto font-second w-fit text-navbarTextWhite py-2 px-10 rounded-xl my-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				onClick={vehicleAddHandler}
			>
				Add a New Vehicle
			</div>

			{/* remove button */}
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
					getAddVeid={setAddVehicle}
					getAddEmid={setAddEmployee}
				/>
			)}
			{openRemoveVehicle && (
				<VehicleHandle
					btnName="Remove Vehicle"
					closeRemoveVehicle={setOpenRemoveVehicle}
					removeAddVeid={setRemoveVehicle}
					removeAddEmid={setRemoveEmployee}
				/>
			)}
		</div>
	);
};
export default EmployeeSearchForm;
