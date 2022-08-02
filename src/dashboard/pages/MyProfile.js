import React, { useState, useEffect } from "react";

import Navbar from "../../shared/components/Navbar";
import ProfileCard from "../components/ProfileCard";
import PasswordResetButton from "../components/PasswordResetButton";
import Table from "../../shared/components/Table";
import LoadingSpinner from "../../shared/loading-spinner/LoadingSpinner"
import Auth from "../../shared/Auth"

import Profile__connection from "../../connections/Profile-to"
import * as sampleData from "../../sampleData";

const MyProfile = () => {
	const [shiftLog, setShiftLog] = useState();
	const [loading, setLoading] = useState(true);

	const shiftLogTitles = sampleData.shiftLogTitles

	useEffect(() => {
		const officer = Auth.getOfficerFullData();
		const id = officer.id
		const getShiftLogs = async (id) => {
			const data = await Profile__connection.getAllShiftLogs(id)
			await setShiftLog(data)
			await setLoading(false)
		}

		getShiftLogs(id)
	}, [loading])

	return !loading ? (
		<div className="flex flex-row">
			<Navbar path="/profile" />
			<div className="bg-background flex-grow pl-[270px] h-screen">
				<div className="font-main text-lg font-bold text-textGrey w-fit my-5 ml-80">
					Shift Log
				</div>
				<div className="flex flex-row mt-4">
					<div className="grow px-6">
						{shiftLog && (
							<Table
								titles={shiftLogTitles}
								data={shiftLog}
							/>
						)}
					</div>
					<div className="flex-col items-center justify-items-center mx-10">
						<ProfileCard />
						<PasswordResetButton />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<LoadingSpinner />
		</div>
	);
};

export default MyProfile;
