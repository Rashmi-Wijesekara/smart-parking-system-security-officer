import React from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import SearchForm from "../../shared/components/SearchForm"
import * as sampleData from "../../sampleData";

const ParkingLog = () => {
	const parkingLogData = sampleData.parkingLogData
	const parkingLogTitles = sampleData.parkingLogTitles

	return (
		<div className="flex flex-row">
			<Navbar path="/parking-log" />
			<div className="bg-background flex-grow">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Parking Log
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-6">
						<Table
							titles={parkingLogTitles}
							data={parkingLogData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<SearchForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkingLog;
