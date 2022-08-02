import React from 'react';

import { ReactComponent as Slots1 } from "../../assets/icons/slots1.svg";
import { ReactComponent as Slots2 } from "../../assets/icons/slots2.svg";
import { ReactComponent as Slots3 } from "../../assets/icons/slots3.svg";

const ParkingSlotsCount = () => {
	return (
		<div className="font-main mt-5 w-fit mx-auto">
			<div className="w-40 text-lg font-bold text-textGrey text-center mx-auto">
				Parking Slots
			</div>
			<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
				<div className="flex flex-row">
					<div className="py-2 px-4">
						<div className="text-navbarTextGrey font-semibold">
							Available Slots
						</div>
						<div className="font-bold text-3xl">45</div>
					</div>
					<div className="">
						<Slots1 />
					</div>
				</div>
			</div>

			<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
				<div className="flex flex-row">
					<div className="py-2 px-4 grow">
						<div className="text-navbarTextGrey font-semibold">
							Filled Slots
						</div>
						<div className="font-bold text-3xl">30</div>
					</div>
					<div className="">
						<Slots2 />
					</div>
				</div>
			</div>

			<div className="bg-white max-w-xs shadow-lg rounded-xl p-2 my-1">
				<div className="flex flex-row">
					<div className="py-2 px-4 grow">
						<div className="text-navbarTextGrey font-semibold">
							Total Slots
						</div>
						<div className="font-bold text-3xl">75</div>
					</div>
					<div className="">
						<Slots3 />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ParkingSlotsCount