import React from 'react';
import { ReactComponent as CarSlot } from "../../assets/icons/carslot.svg";
import { ReactComponent as Line } from "../../assets/icons/line.svg";

const ParkingSection = (props) => {
	return (
		<div className={"grid grid-cols-3 mx-8 mt-1 justify-items-center "+ (props.rotate && "rotate-90")}>
			<div className="flex flex-col justify-center gap-2">
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
			</div>
			<Line className="mx-auto h-40 my-auto" />
			<div className="flex flex-col justify-center gap-2">
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
				<CarSlot className="fill-[#F5F5F5]" />
			</div>
		</div>
	);
}

export default ParkingSection;