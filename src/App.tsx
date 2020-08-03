import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Calendar } from './Calendar'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Calendar />
    </>
  )
}
