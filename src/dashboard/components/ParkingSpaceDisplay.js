import React
// , { useState } 
from "react";

import ParkingSection from "../components/ParkingSection"

import { ReactComponent as Office } from "../../assets/icons/office.svg";
import { ReactComponent as CarSlot } from "../../assets/icons/carslot.svg";
import { ReactComponent as InOut } from "../../assets/icons/in-out.svg";
// import { ReactComponent as Line } from "../../assets/icons/line.svg";

const ParkingSpaceDisplay = (props) => {
	// change the colors of the sample slots if they free or not
	// sample === true => not free slot
	// sample === false => free slot
	
	// const [sample1, setSample1] = useState(false);
	// const [sample2, setSample2] = useState(false);

	return (
		<div className="bg-white shadow-xl p-2 rounded-lg max-w-3xl mx-auto">
			<div className="grid grid-cols-4 grid-rows-2 justify-items-center">
				{/* section 1 */}
				<ParkingSection />

				{/* section 2 */}
				<ParkingSection />

				{/* section 3 */}
				<ParkingSection />

				{/* section 4 with the office and gates */}
				<div className="row-span-3 mt-2">
					<Office className="mx-auto" />
					<div className="grid grid-cols-4 justify-items-center mt-5">
						<CarSlot className="rotate-90 fill-[#F5F5F5]" />
						<CarSlot className="rotate-90 fill-[#F5F5F5]" />

						{/* current sample 2 slots */}
						<CarSlot
							className={
								"rotate-90 " +
								(props.sample1
									? "fill-red-300"
									: "fill-green-300")
							}
						/>
						<CarSlot
							className={
								"rotate-90 " +
								(props.sample2
									? "fill-red-300"
									: "fill-green-300")
							}
						/>
					</div>
					<InOut className="h-40 mx-auto pt-5 mt-5" />
				</div>

				{/* row 2 */}
				{/* section 1 */}
				<ParkingSection rotate={true} />

				{/* section 2 */}
				<ParkingSection rotate={true} />

				{/* section 3 */}
				<ParkingSection rotate={true} />
			</div>
		</div>
	);
};

export default ParkingSpaceDisplay;
