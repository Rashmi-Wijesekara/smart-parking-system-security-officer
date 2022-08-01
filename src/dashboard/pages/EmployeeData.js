import React, { useState, useEffect } from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import EmployeeSearchForm from "../../shared/components/EmployeeSearchForm";
import * as sampleData from "../../sampleData";

import EmployeeData__connection from "../../connections/EmployeeData-to";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner"

const EmployeeData = () => {
	// still loading the page or not (fetching data finished or not)
	const [loading, setLoading] = useState(true);
	const [fullEmployeeData, setFullEmployeeData] =
		useState();

	const employeeTitles = sampleData.employeeTitles;
	const employeeData = sampleData.employeeData;

	useEffect(() => {
		const getFullEmployeeData = async () => {
			const data =
				await EmployeeData__connection.getAllEmployees();
			
			await setFullEmployeeData(data)
		};

		getFullEmployeeData()
		setLoading(false)
	}, [loading]);

	return !loading ? (
		<div className="flex flex-row">
			<Navbar path="/employee-data" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Employee Data
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-6">
						<Table
							titles={employeeTitles}
							data={fullEmployeeData}
						/>

						{/* latest parking logs today */}
						{/* {latestParkingLog ? (
							<ParkingLogTable data={latestParkingLog} />
						) : (
							<ParkingLogTable message={true} />
						)} */}
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<EmployeeSearchForm />
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
