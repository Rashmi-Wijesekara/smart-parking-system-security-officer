import React from "react";
import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg"
import Auth from "../../shared/Auth"

const ProfileCard = () => {

	const officer = Auth.getOfficerFullData()
	console.log(officer)

	const fullname = officer.name
	const officerId = officer.id
	const email = officer.email
	const phone = officer.phoneNo

	return (
		<div className="bg-white max-w-xs shadow-lg rounded-xl">
			<div className="flex flex-col">
				<ProfilePic className="mx-auto mt-8 w-[140px]" />
				<div className="font-main w-fit mx-6 my-4">
					<div className="font-bold my-3">
						Name : {fullname}
					</div>
					<div className="text-textGrey font-bold">
						<div className="my-3">ID : {officerId}</div>
						<div className="my-3">Email : {email}</div>
						<div className="my-3">Phone No : {phone}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
