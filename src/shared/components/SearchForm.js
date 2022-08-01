import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const SearchForm = (props) => {
	const getTime12 = (time) => {
		let h = 0;
		let type;

		let h24 = parseInt(time.substring(0, 2));
		if (h24 > 12) {
			type = "pm";
			h = h24 - 12;
		} else if (h24 === 12) {
			type = "pm";
			h = h24;
		} else if (h24 === 0) {
			h = 12;
			type = "am";
		}else {
			h = h24;
			type = "am"
		}

		const hours = h.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
		const m = parseInt(time.substring(3, 5));
		const mins = m.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});

		const str = `${hours}:${mins} ${type}`;
		console.log(str)
		return str;
	};

	const searchClickHandler = () => {
		// send the user inputs back to the parking log page
		const date_val = document.getElementById("date").value;
		const from_val = document.getElementById("from").value;
		const to_val = document.getElementById("to").value;

		if (date_val && from_val && to_val) {
			const date = new Date(date_val)
				.toLocaleDateString("en-GB")
				.split("/")
				.reverse()
				.join("-");

			const from = getTime12(from_val);
			const to = getTime12(to_val);

			console.log(`${date} ${from} ${to}`)
			props.getData(date, from, to);
		}
	};

	return (
		<div className="bg-white font-second p-8 rounded-xl shadow-xl">
			<div className="text-textGrey text-md text-center">
				Date :
			</div>
			<input
				type="date"
				id="date"
				className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
			/>

			<div className="text-textGrey text-md text-center mt-5">
				Time :
			</div>
			<div className="text-textGrey text-xs">From :</div>
			<input
				type="time"
				id="from"
				className="bg-textInput w-full rounded-lg my-3 mb-5 h-10 px-3 py-2"
			/>

			<div className="text-textGrey text-xs">To :</div>
			<input
				type="time"
				id="to"
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
