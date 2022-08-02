import React, { useEffect, useState } from "react";
import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg";
import Dashboard__connection from "../../connections/Dashboard-to";

const MainPopup = (props) => {
	const rfidId = props.employeeId;
	const employeeName = props.employeeName;
	const vehicleList = props.vehicleList;
	let selectedVehicle;

	// save the data in the database
	const submitEntry = async () => {
		selectedVehicle =
			document.getElementById("vehicleId").value;

		const data =
			await Dashboard__connection.parkingLogSubmit(
				rfidId,
				employeeName,
				selectedVehicle
			);
		
		if(data === "ok"){
			console.log(data);
		}

		props.openMainPopup(false);
		props.setLoading(true)
	};

	return (
		<div
			className={`flex fixed justify-center align-center inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto h-full w-full`}
		>
			<div
				className={`z-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${props.visible} mx-auto bg-white font-second p-8 rounded-xl shadow-xl max-w-sm`}
			>
				<ProfilePic className="mx-auto w-[140px]" />

				{/* employee id imput */}
				<div className="text-textGrey text-md">
					Employee ID :
				</div>
				<input
					readOnly
					value={rfidId}
					className="bg-textInput w-1/2 rounded-lg my-3 h-10 px-3 py-2"
				/>

				{/* employee name input */}
				<div className="text-textGrey text-md">Name :</div>
				<input
					readOnly
					value={employeeName}
					className="bg-textInput w-full rounded-lg my-3 h-10 px-3 py-2"
				/>

				<div className="grid grid-cols-2">
					{/* ******************* change into a dropdown */}
					{/* vehicle id input */}

					<div className="mt-3">
						<label
							htmlFor="vehicleId"
							className="text-textGrey text-md col-span-3"
						>
							Vehicle ID :
						</label>
						<select
							id="vehicleId"
							name="vehicleId"
							className="bg-textInput w-full rounded-lg my-auto h-10 px-3 py-2"
						>
							{vehicleList.map((vehicle) => {
								return (
									<option key={vehicle} value={vehicle}>
										{vehicle}
									</option>
								);
							})}
						</select>
					</div>

					{/* button */}
					{/* <div className="bg-mainBlue ml-auto mt-auto font-second w-fit text-white py-2 px-6 rounded-xl cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2">
						Add Vehicle
					</div> */}
				</div>

				<div
					onClick={submitEntry}
					className="bg-mainBlue mx-auto font-second text-white py-2 px-6 w-48 text-center rounded-xl mt-10 cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2"
				>
					Confirm
				</div>
			</div>
		</div>
	);
};

export default MainPopup;
