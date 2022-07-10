import React from "react";

import Navbar from "../../shared/components/Navbar";
import ProfileCard from "../components/ProfileCard";
import PasswordResetButton from "../components/PasswordResetButton";
import Table from "../../shared/components/Table";

const MyProfile = () => {
	return (
		<div className="flex flex-row">
			<Navbar path="/profile" />
			<div className="bg-background flex-grow">
				<div className="flex flex-row mt-10">
					<div className="grow">
						<div className="font-main text-lg font-bold text-textGrey text-center">
							Shift Log
						</div>
						<Table />
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
