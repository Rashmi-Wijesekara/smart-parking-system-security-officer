import React, { useState, useEffect } from "react";
import * as $ from "jquery";

import Navbar from "../../shared/components/Navbar";
import ParkingSpace from "../components/ParkingSpaceDisplay";
import OfficerIncharge from "../components/OfficerIncharge";
import ParkingSlotsCount from "../components/ParkingSlotsCount";
import ParkingLogTable from "../components/ParkingLogTable";
import MainPopup from "../components/MainPopup";

import { ReactComponent as ConnectIcon } from "../../assets/icons/connect.svg";
import * as sampleData from "../../sampleData";

import Auth from "../../shared/Auth";

import Dashboard__connection from "../../connections/Dashboard-to";

const Dashboard = () => {
	const officer = Auth.getOfficerFullData();

	// still loading the page or not (fetching data finished or not)
	const [loading, setLoading] = useState(true);
	const [inCharge, setInCharge] = useState();
	const [latestParkingLog, setLatestParkingLog] =
		useState();

	// reader device paired or not
	const [readerStatus, setReaderStatus] = useState(false);

	const [openMainPopup, setOpenMainPopup] = useState(false);
	const [rfid, setRfid] = useState("");
	const [employeeName, setEmployeeName] = useState("");

	// get the employee data from the sample database
	const employeeData = sampleData.employeeData;

	const MainPopupOpen = () => {
		console.log("opened");
		setOpenMainPopup(true);
	};

	// ****************************************************************
	useEffect(() => {
		// security officer in-charge
		const getInCharge = async () => {
			const data =
				await Dashboard__connection.officerInCharge(
					officer.id
				);

			if (!data) {
				throw new Error("no any shift logs found today");
			}
			await setInCharge(data);
		};

		// ************************************************
		// latest parking logs
		const getLatestParkingLog = async () => {
			const data =
				await Dashboard__connection.latestParkingLog();

			if (data === false) {
				console.log("empty parking log latest")
				setLatestParkingLog(false)
				return
			}
			await setLatestParkingLog(data);
		};

		if (loading) {
			// still loading
			getInCharge().catch((err) => {
				console.log(err);
			});
			// console.log(inCharge);
			
			getLatestParkingLog().catch((err) => {
				console.log(err);
			});
		} else {
			// loading completed
		}
	}, [loading]);

	// check whether the RFID device is already connected
	useEffect(() => {
		navigator.usb.getDevices().then((devices) => {
			devices.forEach((device) => {
				if (
					device.productName === "SYC ID&IC USB Reader" &&
					device.serialNumber === "08FF20140315"
				) {
					setReaderStatus(true);
					console.log("RFID reader already connected");
				}
			});
		});
	});

	// hidden RFID input field disabled when the main popup is opened
	useEffect(() => {
		if (openMainPopup === true) {
			document.getElementById("rfid").disabled = true;
		} else if (openMainPopup === false) {
			document.getElementById("rfid").disabled = false;
			document.getElementById("rfid").focus();
		}
	}, [openMainPopup]);

	const readerConnect = () => {
		// select the RFID reader from the alert notification
		// and give permission to use in this website

		navigator.usb
			.requestDevice({ filters: [] })
			.then(function (device) {
				console.log(device);
				setReaderStatus(true);
			});
	};

	// always focus on hidden input field to get the RFID reading value
	$(document).ready(function () {
		$("#rfid").focus();
		$("body").mousemove(function () {
			$("#rfid").focus();
		});
	});

	const handleRfidChange = (event) => {
		setRfid(event.target.value);

		// scanner fully got the ID value
		if (rfid.length === 9) {
			console.log(rfid);
			MainPopupOpen();
			document.getElementById("rfid").value = "";

			for (const employee of employeeData) {
				if (employee.employeeId === rfid) {
					console.log(employee.name);
					setEmployeeName(employee.name);
				}
			}
		}
	};

	return (
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background flex-grow pl-[270px] h-screen overflow-y-auto">
				{/* top section with RFID reader status */}
				<div className="flex flex-row font-main text-lg font-bold text-textGrey w-full my-2">
					<div className="my-auto ml-80">
						Parking Space Overview
					</div>

					{/* RFID reader status Button */}
					<div
						onClick={readerConnect}
						className={
							"flex mr-16 ml-auto my-auto text-sm font-second w-fit text-white py-2 px-4 rounded-xl cursor-pointer shadow-md hover:shadow-xl transform duration-300 active:translate-y-2 " +
							(readerStatus ? "bg-green-400" : "bg-red-400")
						}
					>
						<ConnectIcon className="fill-white" />
						<div className="my-auto ml-4">
							{readerStatus
								? "Reader connected"
								: "Connect Reader"}
						</div>
					</div>
				</div>

				{/* bottom section fields */}
				<div className="flex flex-row mt-4">
					<div className="grow px-2">
						<ParkingSpace sample1={false} sample2={true} />

						{/* latest parking logs today */}
						{
						latestParkingLog ? 
							(
								<ParkingLogTable data={latestParkingLog}/>
							) :
							(<ParkingLogTable message={true}/>)
							
						}
					</div>

					{/* right side fields */}
					<div className="flex-col items-center justify-items-center mx-2">
						{/* security officer in-charge data */}
						{inCharge && (
							<OfficerIncharge
								officer={officer}
								inCharge={inCharge}
							/>
						)}

						{/* parking slots counts display */}
						<ParkingSlotsCount />
					</div>
				</div>
				{/* hidden input field to get RFID reading data */}
				<input
					className="w-0 fixed bg-black text-white"
					id="rfid"
					disabled={false}
					onChange={handleRfidChange}
				/>
			</div>

			{openMainPopup && (
				<MainPopup
					openMainPopup={setOpenMainPopup}
					employeeId={rfid}
					employeeName={employeeName}
				/>
			)}
		</div>
	);
};

export default Dashboard;
