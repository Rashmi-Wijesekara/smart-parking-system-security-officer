import React from "react";

import Row from "./TableRow";
import Title from "./TableTitle";

const Table = (props) => {
	const data = props.data;
	const titles = props.titles;
	const message = props.message;

	return (
		<div className="">
			<table className="border-3 w-full overflow-y-auto z-100 h-[100px]">
				<thead>
					<Title titles={titles} />
				</thead>

				{data ? (
					<tbody>
						{Object.keys(data).map((key) => {
							return <Row key={key} row={data[key]} />;
						})}
					</tbody>
				) : (
					<tbody></tbody>
				)}
			</table>
			{message && (
				<div className="bg-tableTitleBg text-center text-sm w-full -mt-14 border-2 border-tableTitleBorder shadow-xl p-6 font-second font-bold">
					No Latest Logs found
				</div>
			)}
		</div>
	);
};

export default Table;
