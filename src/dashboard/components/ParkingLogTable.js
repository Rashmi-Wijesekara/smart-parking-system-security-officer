import React from "react";

import Table from "../../shared/components/Table";
import * as sampleData from "../../sampleData";

const ParkingLogTable = (props) => {

	const parkingLogTitles = sampleData.parkingLogTitles;
	const message = props.message
	const parkingLogData = props.data

	return (
		<div className="">
			<div className="font-main text-lg font-bold text-textGrey w-fit mt-2 ml-80">
				Latest Parking Log
			</div>
			<div className="mt-3 overflow-y-auto h-[235px]">
				<Table
					titles={parkingLogTitles}
					data={parkingLogData}
					message={message}
				/>
			</div>
		</div>
	);
};

export default ParkingLogTable;
