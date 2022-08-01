import React, {useState, useEffect} from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import SearchForm from "../../shared/components/SearchForm"
import * as sampleData from "../../sampleData";

import ParkingLog__connection from "../../connections/ParkingLog-to"
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner";

const ParkingLog = () => {
	
	const parkingLogTitles = sampleData.parkingLogTitles;

	// still loading the page or not (fetching data finished or not)
	const [loading, setLoading] = useState(true);
	const [fullParkingLog, setFullParkingLog] = useState();

	// loading parking log data table
	useEffect(() => {
		const getFullParkingLog = async () => {
			const data =
				await ParkingLog__connection.getAllParkingLogs();

			await setFullParkingLog(data);
		};
		getFullParkingLog();

		setLoading(false);
	}, [loading]);

	return !loading ? (
		<div className="flex flex-row">
			<Navbar path="/parking-log" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Parking Log
				</div>
				<div className="flex flex-row mt-4 overflow-y-auto h-5/6">
					<div className="grow px-6">
						{fullParkingLog && (
							<Table
								titles={parkingLogTitles}
								data={fullParkingLog}
							/>
						)}
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<SearchForm />
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

export default ParkingLog;
