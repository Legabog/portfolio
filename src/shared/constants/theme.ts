export const COLORS = {
	white: 'rgb(240, 240, 240)',
	black: 'rgb(33, 33, 33)',
	orange: 'rgb(232, 176, 89)',
};
const { white, black, orange } = COLORS;
export const THEME = {
	dark: {
		color: orange,
		backgroundColor: black,
		boxShadow: 'rgba(232, 176, 89, 0.04)',
		icon: {
			path: {
				fill: orange,
			},
		},
		bottomPanelItems: ['#503C3C', '#005B41', '#37306B'],
	},
	light: {
		color: black,
		backgroundColor: white,
		boxShadow: 'rgba(0, 0, 0, 0.04)',
		icon: {
			path: {
				fill: black,
			},
		},
		bottomPanelItems: ['#fac99c', '#b0e3b6', '#c8adfa'],
	},
};
