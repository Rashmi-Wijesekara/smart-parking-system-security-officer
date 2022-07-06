import React from "react";
import { NavLink } from "react-router-dom";

const NavbarButton = (props) => {

	return (
		<NavLink to={props.path}>
			<div 
				// button
				className={
					"flex flex-row cursor-pointer hover:shadow-lg transform duration-300 active:translate-y-2 bg-" +
					(props.path === props.currentPath
						? "mainBlue"
						: "navbarBgGrey") +
					" w-[220px] py-2 px-4 rounded-xl items-center gap-4 my-4"
				}
			>
				<div
					// icon
					className={
						"fill-" +
						(props.path === props.currentPath
							? "navbarTextWhite"
							: "navbarTextGrey")
					}
				>
					{props.children}
				</div>
				<div
					// button name
					className={
						"tracking-wider text-sm font-navbarText font-bold text-" +
						(props.path === props.currentPath
							? "navbarTextWhite"
							: "navbarTextGrey")
					}
				>
					{props.name}
				</div>
			</div>
		</NavLink>
	);
};

export default NavbarButton;
