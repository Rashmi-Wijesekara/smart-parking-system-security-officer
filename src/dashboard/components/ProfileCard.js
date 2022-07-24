import React from "react";
import { ReactComponent as ProfilePic } from "../../assets/images/profile-pic.svg"

const ProfileCard = () => {

	const fullname = "Mahinda Perera"
	const officerId = "SE123"
	const email = "abc@gmail.com"
	const phone = "0771235564"

	return (
		<div className="bg-white max-w-xs shadow-lg rounded-xl">
			<div className="flex flex-col">
				<ProfilePic className="mx-auto mt-8 w-[140px]" />
				<div className="font-main w-fit mx-10 my-4">
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
