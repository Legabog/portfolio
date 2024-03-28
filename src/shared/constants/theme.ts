export const COLORS = {
	white: 'rgb(240, 240, 240)',
	black: 'rgb(33, 33, 33)',
	orange: 'rgb(232, 176, 89)',
	grey: 'rgb(110, 110, 110)',
	greySecondary: 'rgb(140, 140, 140)',
	lightGrey: 'rgb(240, 242, 244)',
	darkGrey: 'rgb(43, 43, 55)',
};
const { white, black, orange, grey, greySecondary, lightGrey, darkGrey } = COLORS;
export const THEME = {
	dark: {
		color: orange,
		colorSecondary: white,
		backgroundColor: black,
		secondaryBackgroundColor: darkGrey,
		boxShadow: 'rgba(232, 176, 89, 0.04)',
		icon: {
			path: {
				fill: orange,
			},
		},
		discription: greySecondary,
		bottomPanelItems: ['#503C3C', '#005B41', '#37306B'],
	},
	light: {
		color: black,
		colorSecondary: black,
		backgroundColor: white,
		secondaryBackgroundColor: lightGrey,
		boxShadow: 'rgba(0, 0, 0, 0.04)',
		icon: {
			path: {
				fill: black,
			},
		},
		discription: grey,
		bottomPanelItems: ['#fac99c', '#b0e3b6', '#c8adfa'],
	},
};
