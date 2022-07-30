import React, { useState } from "react";

import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg";

import Dashboard__connection from "../../connections/Dashboard-to";

const OfficerIncharge = (props) => {
	const officer = props.officer;
	const inCharge = props. inCharge;

	const fullname = officer.name;
	const shiftType = inCharge.shiftType;
	const startTime = inCharge.startTime;

	return (
		<div className="font-main">
			<div className="w-40 text-lg font-bold text-textGrey text-center mx-auto ">
				Security Officer in-charge
			</div>
			<div className="bg-white shadow-lg rounded-xl mx-10 pb-2">
				<div className="flex flex-col">
					<ProfilePic className="mx-auto w-[100px] -my-2" />
					<div className="font-main w-fit mx-2">
						<div className="font-bold">{fullname}</div>
						<div className="text-navbarTextGrey text-sm my-1">
							<div className="">
								Shift Type : {shiftType}
							</div>
							<div className="">
								Start Time : {startTime}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfficerIncharge;
