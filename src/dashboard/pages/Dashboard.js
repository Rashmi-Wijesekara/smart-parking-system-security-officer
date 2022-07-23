import React from 'react'

import Navbar from "../../shared/components/Navbar"

const Dashboard = () => {
  return (
		<div className="flex flex-row">
			<Navbar path="/dashboard" />
			<div className="bg-background h-screen flex-grow pl-[270px]">
				<div className="w-fit m-auto">dashboard</div>
			</div>
		</div>
	);
}

export default Dashboard