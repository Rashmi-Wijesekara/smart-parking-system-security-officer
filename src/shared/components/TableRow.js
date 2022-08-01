import React from "react";

const TableRow = (props) => {
	const row = props.row;

	return (
		<tr
			className={
				'bg-white justify-items-center shadow-xl'
			}
		>
			{Object.keys(row).map((key) => {
				if (key !== "_id" && key !== "id") {
					return (
						<td
							key={key}
							className="border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second text-sm text-center"
						>
							{row[key]}
						</td>
					);
				}
			})}
		</tr>
	);
};

export default TableRow;
