import React from "react";

import Navbar from "../../shared/components/Navbar";
import ProfileCard from "../components/ProfileCard";
import PasswordResetButton from "../components/PasswordResetButton";
import Table from "../../shared/components/Table";

import * as sampleData from "../../sampleData";

const MyProfile = () => {
	const shiftLogTitles = sampleData.shiftLogTitles
	const shiftLogData = sampleData.shiftLogData

	return (
		<div className="flex flex-row">
			<Navbar path="/profile" />
			<div className="bg-background flex-grow">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Shift Log
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-6">
						<Table titles={shiftLogTitles} data={shiftLogData} />
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<ProfileCard />
						<PasswordResetButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
