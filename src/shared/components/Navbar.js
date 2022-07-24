import React from "react";

// import icons in the navbar as components
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/icons/employee.svg";
import { ReactComponent as ParkingIcon } from "../../assets/icons/parking.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

import NavbarButton from "./NavbarButton";

const Navbar = (props) => {

	const checkPath = props.path

	return (
		<div className="bg-white w-[270px] h-screen flex-none z-100 shadow fixed">
			<div className="flex flex-row items-center w-fit mx-auto p-3">
				<LogoIcon className="mr-4" />
				<div className="font-logoText font-bold text-lg text-navbarLogoText">
					Mega Media
				</div>
			</div>

			<div className="mx-auto w-fit flex-col space-y-4 my-10">
				{/* dashboard */}
				<NavbarButton
					name="Dashboard"
					path="/dashboard"
					currentPath={checkPath}
				>
					<DashboardIcon />
				</NavbarButton>
			</div>

			<div className="">
				<div className="font-logoText text-sm text-textGreyLight w-[220px] mx-auto">
					Smart Parking System
				</div>

				<div className="mx-auto w-fit flex-col my-2">

					{/* employee data */}
					<NavbarButton
						name="Employee Data"
						path="/employee-data"
						currentPath={checkPath}
					>
						<EmployeeIcon />
					</NavbarButton>

					{/* parking log */}
					<NavbarButton
						name="Parking Log"
						path="/parking-log"
						currentPath={checkPath}
					>
						<ParkingIcon />
					</NavbarButton>

					{/* profile */}
					<NavbarButton
						name="My Profile"
						path="/profile"
						currentPath={checkPath}
					>
						<ProfileIcon />
					</NavbarButton>
				</div>
			</div>

			<div className="mx-auto w-fit mt-[90%]">
				{/* logout */}
				<NavbarButton
					name="Log out"
					path="/logout"
					currentPath={checkPath}
				>
					<ProfileIcon />
				</NavbarButton>
			</div>
		</div>
	);
};

export default Navbar;
