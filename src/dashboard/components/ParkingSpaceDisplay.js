import React from "react";

import { ReactComponent as Office } from "../../assets/icons/office.svg";
import { ReactComponent as CarSlot } from "../../assets/icons/carslot.svg";
import { ReactComponent as InOut } from "../../assets/icons/in-out.svg";
import { ReactComponent as Line } from "../../assets/icons/line.svg";

const ParkingSpaceDisplay = () => {
	return (
		<div className="bg-white shadow-xl py-4 px-2 rounded-lg max-w-3xl mx-auto">
			<div className="grid grid-cols-4 grid-rows-2 justify-items-center">
				{/* section 1 */}
				<div className="grid grid-cols-3 mx-6 justify-items-center">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>

				{/* section 2 */}
				<div className="grid grid-cols-3 mx-6 justify-items-center">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>

				{/* section 3 */}
				<div className="grid grid-cols-3 mx-6 justify-items-center">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>

				{/* section 4 with the office and gates */}
				<div className="row-span-3">
					<Office className="mx-auto" />
					<div className="grid grid-cols-4 justify-items-center mt-5">
						<CarSlot className="rotate-90" />
						<CarSlot className="rotate-90" />
						<CarSlot className="rotate-90" />
						<CarSlot className="rotate-90" />
					</div>
					<InOut className="h-40 mx-auto pt-5 mt-0" />
				</div>

				{/* row 2 */}
				{/* section 1 */}
				<div className="grid grid-cols-3 mx-8 mt-1 justify-items-center rotate-90">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>

				{/* section 2 */}
				<div className="grid grid-cols-3 mx-8 mt-1 justify-items-center rotate-90">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>

				{/* section 3 */}
				<div className="grid grid-cols-3 mx-8 mt-1 justify-items-center rotate-90">
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
					<Line className="mx-auto h-40 my-auto" />
					<div className="flex flex-col justify-center gap-2">
						<CarSlot />
						<CarSlot />
						<CarSlot />
						<CarSlot />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParkingSpaceDisplay;
