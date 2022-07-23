import React from "react";

const TableTitle = () => {
	const titleNames = [
		"Date",
		"Shift Type",
		"Shift Start Time",
		"Shift End Time",
	];
	return (
		<div className="grid grid-cols-4 bg-tableTitleBg justify-items-center shadow-xl">
			{titleNames.map((titleName) => {
				return (
					<div className="w-full border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center">
						{titleName}
					</div>
				);
			})}
		</div>
	);
};

export default TableTitle;
