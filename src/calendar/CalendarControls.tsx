import {
  addMonths,
  subMonths,
  format
} from 'date-fns'
import React, { FC } from 'react'
import styled from 'styled-components'

import { unit } from '../theme'

export const controlsHeight = unit * 3

const Container = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: ${controlsHeight}px;
  padding-bottom: ${unit}px;
`

const Button = styled.button`
  display: block;
  height: 100%;
  width: ${controlsHeight}px;
`

const Month = styled.div`
  flex: 1 0 auto;
  padding: 0 ${unit}px;
  text-align: center;
`

type CalendarControlsProps = {
  value: Date
  onChange: (value: Date) => void
}

export const CalendarControls: FC<CalendarControlsProps> = props => {
  const { value, onChange, ...more } = props

  const nextMonth = () => {
    onChange(addMonths(value, 1))
  }

  const previousMonth = () => {
    onChange(subMonths(value, 1))
  }

  return (
    <Container {...more}>
      <Button onClick={previousMonth}>&lt;</Button>
      <Month>
        {format(value, 'MMMM - yyyy')}
      </Month>
      <Button onClick={nextMonth}>&gt;</Button>
    </Container>
  )
}
