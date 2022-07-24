import React from "react";

import Table from "../../shared/components/Table";
import * as sampleData from "../../sampleData";

const ParkingLogTable = () => {
	const parkingLogData = sampleData.parkingLogData;
	const parkingLogTitles = sampleData.parkingLogTitles;

	return (
		<div className="">
			<div className="font-main text-lg font-bold text-textGrey w-fit mt-2 ml-80">
				Latest Parking Log
			</div>
			<div className="mt-3 overflow-y-auto h-[235px]">
				<Table
					titles={parkingLogTitles}
					data={parkingLogData}
				/>
			</div>
		</div>
	);
};

export default ParkingLogTable;
