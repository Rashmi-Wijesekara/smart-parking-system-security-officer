import React from "react";

const TableTitle = (props) => {
	const titleNames = props.titles;
	
	return (
		<tr
			className='bg-tableTitleBg justify-items-center shadow-xl'
		>
			{titleNames.map((titleName) => {
				return (
					<th
						key={titleName}
						className="border-y-2 last:border-r-2 border-l-2 border-tableTitleBorder py-1.5 font-second font-bold text-center"
					>
						{titleName}
					</th>
				);
			})}
		</tr>
	);
};

export default TableTitle;
