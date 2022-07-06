/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Montserrat", "sans-serif"],
				second: ["Inter", "sans-serif"],
				logoText: ["Public Sans", "sans-serif"],
				navbarText: ["Manrope", "sans-serif"],
			},

			colors: {
				background: "#F5F5F9",
				mainBlue: "#696CFF",
				textInput: "#F5F5F5",
				textGrey: "#666666",
				textGreyLight: "#999999",
				navbarTextGrey: "#808191",
				navbarTextWhite: "#FCFCFC",
				navbarLogoText: "#566A7F",
				white: "#FFFFFF",
				navbarBgGrey: "#DBDBDB",
			},
		},
	},
	plugins: [],
};
