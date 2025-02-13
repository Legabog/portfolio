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
  blackSecondary: 'rgb(33 33 33 / 80% )',
  whiteSecondary: 'rgb(240 240 240 / 80% )',
};
const { white, black, orange, grey, greySecondary, greyBorder, blackSecondary, whiteSecondary } =
  COLORS;
export const THEME: Record<'dark' | 'light', Theme> = {
  dark: {
    color: white,
    colorSecondary: white,
    header: blackSecondary,
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
    header: whiteSecondary,
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
