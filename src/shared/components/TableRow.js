import React from "react";

const TableRow = (props) => {
	const row = props.row;
	const id = props.id;

	return (
		<div className="grid grid-cols-4 bg-white justify-items-center shadow-xl">
			{Object.keys(row).map((key) => {
				console.log(key);

				if (key != "id") {
					if (key === "date")
						return (
							<div className="w-full border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center">
								{row.date}
							</div>
						);
					else if (key === "shiftType")
						return (
							<div className="w-full border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center">
								{row.shiftType}
							</div>
						);
					else if (key === "startTime")
						return (
							<div className="w-full border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center">
								{row.startTime}
							</div>
						);
					else if (key === "endTime")
						return (
							<div className="w-full border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center">
								{row.endTime}
							</div>
						);
				}
			})}
		</div>
	);
};

export default TableRow;
