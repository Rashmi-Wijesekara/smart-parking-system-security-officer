import React from 'react'

import Navbar from "../../shared/components/Navbar";

const Logout = () => {
  return (
		<div className="flex flex-row">
			<Navbar />
			<div className="bg-background flex-grow">
				<div className="w-fit m-auto">log out</div>
			</div>
		</div>
	);
}

export default Logout