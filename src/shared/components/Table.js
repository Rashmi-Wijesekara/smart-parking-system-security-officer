import React from 'react';

import Row from './TableRow'
import Title from './TableTitle'

const Table = () => {

	const tableData = [
		{
			id: "1",
			date: "10-06-2022",
			shiftType: "Day",
			startTime: "08.28 am",
			endTime: "05.28 pm",
		},
		{
			id: "2",
			date: "11-06-2022",
			shiftType: "Day",
			startTime: "08.31 am",
			endTime: "05.34 pm",
		},
		{
			id: "3",
			date: "12-06-2022",
			shiftType: "Night",
			startTime: "05.28 pm",
			endTime: "08.28 am",
		},
		{
			id: "4",
			date: "12-06-2022",
			shiftType: "Night",
			startTime: "05.28 pm",
			endTime: "08.28 am",
		},
	];

	return (
		<table className="border-3 w-full ">
			<Title />
			{
				Object.keys(tableData).map((key) => {
					// console.log(tableData[key])
					return <Row id={key} row={tableData[key]}/>
				})
			}
		</table>
	)
}

export default Table