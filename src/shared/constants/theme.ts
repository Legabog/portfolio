export const COLORS = {
  white: 'rgb(240, 240, 240)',
  black: 'rgb(33, 33, 33)',
  orange: 'rgb(232, 176, 89)',
  orangeSecondary: 'rgb(232, 176, 89, 0.6)',
  grey: 'rgb(110, 110, 110)',
  greyBorder: 'rgb(110, 110, 110, 0.5)',
  greySecondary: 'rgb(140, 140, 140)',
  lightGrey: 'rgb(240, 242, 244)',
  darkGrey: 'rgb(43, 43, 55)',
  vtb: '#009de0',
  linkify: '#2e81f4',
  amusic: '#FEDA00',
};
const { white, black, orange, grey, greySecondary, greyBorder } = COLORS;
export const THEME = {
  dark: {
    color: white,
    colorSecondary: white,
    backgroundColor: black,
    icon: {
      path: {
        fill: orange,
      },
    },
    cardBorder: greyBorder,
    description: greySecondary,
  },
  light: {
    color: black,
    colorSecondary: black,
    backgroundColor: white,
    icon: {
      path: {
        fill: orange,
      },
    },
    cardBorder: greyBorder,
    description: grey,
  },
};
