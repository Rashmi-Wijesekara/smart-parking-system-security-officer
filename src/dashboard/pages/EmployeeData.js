import React, { useState, useEffect } from "react";

import Navbar from "../../shared/components/Navbar";
import Table from "../../shared/components/Table";
import EmployeeSearchForm from "../../shared/components/EmployeeSearchForm";
import * as sampleData from "../../sampleData";

const EmployeeData = () => {
	
	// still loading the page or not (fetching data finished or not)
	const [loading, setLoading] = useState(true);

	const employeeTitles = sampleData.employeeTitles;
	const employeeData = sampleData.employeeData;
	
	return (
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
							data={employeeData}
						/>
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<EmployeeSearchForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployeeData;
