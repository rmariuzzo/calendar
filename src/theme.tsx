export const unit = 20

export const theme = {
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
  colors: {
    neutral: '#f8f9fc',
    neutralDark: '#c3c2c0',
    neutralDarker: '#474b5c',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}