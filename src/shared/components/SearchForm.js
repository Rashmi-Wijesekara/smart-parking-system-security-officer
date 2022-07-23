import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchForm = (props) => {

	const searchClickHandler = () => {
		// send the user inputs back to the parking log page
	}

	return (
		<div className="bg-white font-second p-8 rounded-xl shadow-xl">
			<div className="text-textGrey text-md text-center">
				Date :
			</div>
			<input
				type="date"
				className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
			/>

			<div className="text-textGrey text-md text-center mt-5">
				Time :
			</div>
			<div className="text-textGrey text-xs">From :</div>
			<input
				type="time"
				className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
			/>
			<div className="text-textGrey text-xs">To :</div>
			<input
				type="time"
				className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
			/>

			<div
				className="bg-mainBlue w-full mx-auto text-navbarTextWhite py-2 px-5 rounded-xl items-center gap-2 my-4 flex flex-row cursor-pointer hover:shadow-lg transform duration-300 active:translate-y-2"
				onClick={searchClickHandler}
			>
				<SearchIcon />
				Search
			</div>
		</div>
	);
};

export default SearchForm;
