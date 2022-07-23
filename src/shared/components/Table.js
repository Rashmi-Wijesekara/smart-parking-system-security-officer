import React from "react";

import Row from "./TableRow";
import Title from "./TableTitle";

const Table = (props) => {
	const data = props.data
	const titles = props.titles

	return (
		<table className="border-3 w-full overflow-y-auto z-100 h-[100px]">
			<thead>
				<Title titles={titles} />
			</thead>

			<tbody>
				{Object.keys(data).map((key) => {
					return <Row key={key} row={data[key]} />;
				})}
			</tbody>
		</table>
	);
};

export default Table;
