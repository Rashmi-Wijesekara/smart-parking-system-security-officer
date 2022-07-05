import React from "react";

const NavbarButton = (props) => {
	return (
		<div
			className={
				"flex flex-row cursor-pointer hover:shadow-lg transform duration-300 active:translate-y-2 " +
				props.bgColor +
				" w-[220px] py-2 px-4 rounded-xl items-center gap-4 my-4"
			}
		>
			<div className="icon">{props.children}</div>
			<div
				className={
					"tracking-wider text-sm font-navbarText font-bold " +
					props.textColor
				}
			>
				{props.name}
			</div>
		</div>
	);
};

export default NavbarButton;
