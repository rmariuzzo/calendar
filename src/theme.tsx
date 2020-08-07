import createMedia from 'styled-media-helper'
import { mix } from 'polished'

export const unit = 20

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1240,
}

const media = createMedia(breakpoints)

const colors = {
  white: '#f8f9fc',
  gray: '#474b5c',
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
    normal: `0 0 ${unit}px ${-unit/3}px ${mix(.75, '#fff', colors.gray)}`,
    large: `0 0 ${unit}px 0 ${mix(.75, '#fff', colors.gray)}`,
  },
  transitions: {
    all: 'all ease-in-out .25s',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}