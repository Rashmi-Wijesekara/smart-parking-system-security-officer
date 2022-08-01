import React, { useState, useEffect } from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import EmployeeSearchForm from "../../shared/components/EmployeeSearchForm";
import * as sampleData from "../../sampleData";

import EmployeeData__connection from "../../connections/EmployeeData-to";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";

const EmployeeData = () => {
	// still loading the page or not (fetching data finished or not)
	const [loading, setLoading] = useState(true);
	const [fullEmployeeData, setFullEmployeeData] =
		useState();
	const [vehicleId, setVehicleId] = useState("");
	const [state, setState] = useState(1);
	const [loadTable, setLoadTable] = useState(false);

	const [addVehi, setAddVehi] = useState([]);
	const [removeVehi, setRemoveVehi] = useState([]);

	const employeeTitles = sampleData.employeeTitles;
	const employeeData = sampleData.employeeData;

	// search employee data for given vehicle id
	useEffect(() => {
		const getEmployeeByVehicleId = async (vehicleId) => {
			const data =
				await EmployeeData__connection.getEmployeeByVehicleId(
					vehicleId
				);
			await setFullEmployeeData(data);
		};

		getEmployeeByVehicleId(vehicleId);
		setLoading(true);
	}, [vehicleId]);

	// loading employee data table
	useEffect(() => {
		const getFullEmployeeData = async () => {
			const data =
				await EmployeeData__connection.getAllEmployees();

			await setFullEmployeeData(data);
		};

		if (vehicleId === "") getFullEmployeeData();

		setLoading(false);
	}, [loading]);

	useEffect(() => {
		console.log(addVehi);
		const addVehicle = async (emid, veid) => {
			const data =
				await EmployeeData__connection.addVehicle(
					emid,
					veid
				);
			setVehicleId("");
			setLoading(true);
		};

		addVehicle(addVehi[0], addVehi[1]);
	}, [addVehi]);

	useEffect(() => {
		// console.log(removeVehi);
		const removeVehicle = async (emid, veid) => {
			const data =
				await EmployeeData__connection.removeVehicle(
					emid,
					veid
				);
			setVehicleId("");
			setLoading(true);
		};

		removeVehicle(removeVehi[0], removeVehi[1]);
	}, [removeVehi]);

	const setVehicle = (veid) => {
		setState(2);
		setVehicleId(veid);
	};

	const addVehicleHandler = (emid, veid) => {
		setAddVehi([emid, veid]);
	};
	const removeVehicleHandler = (emid, veid) => {
		setRemoveVehi([emid, veid]);
	};

	return !loading ? (
		<div className="flex flex-row">
			<Navbar path="/employee-data" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Employee Data
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-6">
						{fullEmployeeData && (
							<Table
								titles={employeeTitles}
								data={fullEmployeeData}
							/>
						)}
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<EmployeeSearchForm
							vehicleId={setVehicle}
							addHandler={addVehicleHandler}
							removeHandler={removeVehicleHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<LoadingSpinner />
		</div>
	);
};

export default EmployeeData;
