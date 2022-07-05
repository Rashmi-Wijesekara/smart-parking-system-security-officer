import React from "react";
import { NavLink } from "react-router-dom";

// import icons in the navbar as components
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as EmployeeIcon } from "../../assets/icons/employee.svg";
import { ReactComponent as ParkingIcon } from "../../assets/icons/parking.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";

import NavbarButton from "./NavbarButton";

const Navbar = () => {
	return (
		<div className="bg-white w-[270px] h-screen flex-none border-r-black border-r-2 z-100">
			<div className="flex flex-row items-center w-fit mx-auto p-3">
				<LogoIcon className="mr-4" />
				<div className="font-logoText font-bold text-lg text-navbarLogoText">
					Mega Media
				</div>
			</div>

			<div className="mx-auto w-fit flex-col space-y-4 my-10">
				{/* dashboard */}
				<NavLink to="/dashboard" activeClassName="bg-white">
					<NavbarButton
						name="Dashboard"
						bgColor="bg-mainBlue"
						textColor="text-navbarTextWhite"
					>
						<DashboardIcon className="fill-navbarTextWhite" />
					</NavbarButton>
				</NavLink>
			</div>

			<div className="">
				<div className="font-logoText text-sm text-textGreyLight w-[220px] mx-auto">
					Smart Parking System
				</div>

				<div className="mx-auto w-fit flex-col my-2">
					<NavLink to="/employee-data">
						<NavbarButton
							name="Employee Data"
							bgColor="bg-navbarBgGrey"
							textColor="text-navbarTextGrey"
						>
							<EmployeeIcon className="fill-navbarTextGrey" />
						</NavbarButton>
					</NavLink>

					<NavLink to="/parking-log">
						<NavbarButton
							name="Parking Log"
							bgColor="bg-navbarBgGrey"
							textColor="text-navbarTextGrey"
						>
							<ParkingIcon className="fill-navbarTextGrey" />
						</NavbarButton>
					</NavLink>

					<NavLink to="/profile">
						<NavbarButton
							name="My Profile"
							bgColor="bg-navbarBgGrey"
							textColor="text-navbarTextGrey"
						>
							<ProfileIcon className="fill-navbarTextGrey" />
						</NavbarButton>
					</NavLink>
				</div>
			</div>
			<div className="mx-auto w-fit mt-[90%]">
				<NavLink to="/logout">
					<NavbarButton
						name="Log out"
						bgColor="bg-navbarBgGrey"
						textColor="text-navbarTextGrey"
					>
						<ProfileIcon className="fill-navbarTextGrey" />
					</NavbarButton>
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
