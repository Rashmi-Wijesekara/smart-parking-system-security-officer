import React from 'react'

import Navbar from "../../shared/components/Navbar";

const MyProfile = () => {
  return (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow">
				<div className="w-fit m-auto">my profile</div>
			</div>
		</div>
	);
}

export default MyProfile