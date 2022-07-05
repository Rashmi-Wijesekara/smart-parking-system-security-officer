import React from 'react'

import Navbar from "../../shared/components/Navbar";

const EmployeeData = () => {
  return (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow">
				<div className="w-fit m-auto">employee data</div>
			</div>
		</div>
	);
}

export default EmployeeData