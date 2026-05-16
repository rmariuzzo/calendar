export const unit = 20

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1240,
}

const media = {
  up: (key: keyof typeof breakpoints) =>
    `@media (min-width: ${breakpoints[key]}px)`,
}

const colors = {
  white: '#f8f9fc',
  gray: '#474b5c',
  primary: '#3069ed',
}

export const mix = (ratio: number, color1: string, color2: string) =>
  `color-mix(in srgb, ${color1} ${Math.round(ratio * 100)}%, ${color2})`

export const lighten = (amount: number, color: string) =>
  amount >= 1
    ? '#ffffff'
    : amount <= 0
      ? color
      : `color-mix(in srgb, white ${Math.round(amount * 100)}%, ${color})`

export const theme = {
  breakpoints,
  media,
  fontFamily: "'Noto Sans JP', sans-serif",
  fontWeights: {
    light: 200,
    normal: 400,
    bold: 700,
  },
  fontSizes: {
    small: 12,
    normal: 16,
    large: 18,
    larger: 24,
    largest: 32,
  },
  borderWidths: {
    thin: 1,
    normal: 3,
  },
  borderRadiuses: {
    small: 3,
    normal: 6,
  },
  unit,
  colors,
  boxShadows: {
    normal: `0 0 ${unit}px ${-unit / 3}px ${mix(0.75, '#fff', colors.gray)}`,
    large: `0 0 ${unit}px 0 ${mix(0.75, '#fff', colors.gray)}`,
  },
  transitions: {
    all: 'all ease-in-out .25s',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
