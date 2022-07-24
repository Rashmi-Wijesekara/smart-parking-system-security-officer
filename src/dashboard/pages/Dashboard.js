import React, { useState } from "react";

import Navbar from "../../shared/components/Navbar";
import ParkingSpace from "../components/ParkingSpaceDisplay";
import OfficerIncharge from "../components/OfficerIncharge";
import ParkingSlotsCount from "../components/ParkingSlotsCount";
import ParkingLogTable from "../components/ParkingLogTable";
import MainPopup from "../components/MainPopup";

import { ReactComponent as ConnectIcon } from "../../assets/icons/connect.svg";

const Dashboard = () => {
	const [readerStatus, setReaderStatus] = useState(false);

	const MainPopupOpen = () => {
		console.log("open main popup")
	};

	const readerConnect = () => {
		navigator.usb
			.requestDevice({ filters: [] })
			.then(function (device) {
				console.log(device);
				setReaderStatus(true)
			})
			.then(MainPopupOpen)
			
	};

	return (
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">
					<div className="my-auto ml-80">
						Parking Space Overview
					</div>

					<div
						onClick={readerConnect}
						className={
							"flex mr-16 ml-auto my-auto text-sm font-second w-fit text-white py-2 px-4 rounded-xl cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2 " +
							(readerStatus ? "bg-green-400" : "bg-red-400")
						}
					>
						<ConnectIcon className="fill-white" />
						<div className="my-auto ml-4">
							{readerStatus ? "Reader connected": "Connect Reader"}
						</div>
					</div>
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-2">
						<ParkingSpace sample1={false} sample2={true} />
						<ParkingLogTable />
					</div>
					<div className="flex-col items-center justify-items-center mx-2">
						<OfficerIncharge />
						<ParkingSlotsCount />
					</div>
				</div>
			</div>

			<MainPopup />
		</div>
	);
};

export default Dashboard;
