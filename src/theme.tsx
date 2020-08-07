import createMedia from 'styled-media-helper'

export const unit = 20

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1240,
}

const media = createMedia(breakpoints)

const colors = {
  neutral: '#f8f9fc',
  neutralDark: '#c3c2c0',
  neutralDarker: '#474b5c',
  primary: '#3069ed',
}

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
    neutral: (() =>`0 0 ${unit}px ${-unit/3}px ${colors.neutral}`),
    neutralDark: (() =>`0 0 ${unit}px ${-unit/3}px ${colors.neutralDark}`),
    neutralDarker: (() =>`0 0 ${unit}px ${-unit/3}px ${colors.neutralDarker}`),
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}