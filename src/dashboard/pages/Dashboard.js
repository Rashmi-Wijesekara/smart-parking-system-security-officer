import React from 'react'

import Navbar from "../../shared/components/Navbar"
import ParkingSpace from "../components/ParkingSpaceDisplay"
import OfficerIncharge from "../components/OfficerIncharge"
import ParkingSlotsCount from "../components/ParkingSlotsCount"
import ParkingLogTable from "../components/ParkingLogTable"

const Dashboard = () => {
  return (
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background flex-grow pl-[270px] h-full overflow-y-auto">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-3 ml-80">
					Parking Space Overview
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-2">
						<ParkingSpace />
						<ParkingLogTable />
					</div>
					<div className="flex-col items-center justify-items-center mx-2">
						<OfficerIncharge />
						<ParkingSlotsCount />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard