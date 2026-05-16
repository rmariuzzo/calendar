import styled from 'styled-components'

import pkg from '../../package.json'
import { unit, mix } from './../theme'

export const footerHeight = unit * 2

const Container = styled.div`
  text-align: center;
  padding-top: ${unit}px;
  height: ${footerHeight}px;
  font-size: ${$ => $.theme.fontSizes.small}px;
  text-transform: uppercase;
  font-weight: ${$ => $.theme.fontWeights.bold};

  &,
  a {
    color: ${$ => mix(0.5, '#fff', $.theme.colors.gray)};
  }
`

export const CalendarFooter = () => {
  return (
    <Container>
      v{pkg.version} •{' '}
      <a
        href="https://github.com/rmariuzzo"
        target="_blank"
        rel="noopener noreferrer"
      >
        @rmariuzzo
      </a>
    </Container>
  )
}
