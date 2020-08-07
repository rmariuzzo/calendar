import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Calendar } from './calendar/Calendar'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${$ => $.theme.colors.white};
  }

  * {
    box-sizing: border-box;
    font-family: ${$ => $.theme.fontFamily};
  }

  *:focus {
    outline: ${$ => $.theme.colors.primary} auto 1px;
  }
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Calendar />
    </ThemeProvider>
  )
}
