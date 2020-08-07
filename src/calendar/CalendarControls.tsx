import {
  addMonths,
  subMonths,
  format
} from 'date-fns'
import React, { FC } from 'react'
import styled from 'styled-components'

import { unit } from '../theme'

import { ChevronLeft, ChevronRight } from './icons'

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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${controlsHeight}px;
  border: ${$ => $.theme.colors.neutralDark} solid ${$ => $.theme.borderWidths.thin}px;
  border-radius: ${$ => $.theme.borderRadiuses.normal}px;
  background-color: ${$ => $.theme.colors.neutral};
  box-shadow: ${$ => $.theme.boxShadows.neutralDark};

  & > svg {
    height: ${$ => $.theme.unit}px;
    width: ${$ => $.theme.unit}px;

    &:first-child {
      margin-right: ${$ => $.theme.unit / 2}px;
    }

    &:last-child {
      margin-left: ${$ => $.theme.unit / 2}px;
    }
  }
`

const Month = styled.div`
  flex: 1 1 auto;
  padding: 0 ${unit}px;
  text-align: center;
  color: ${$ => $.theme.colors.neutralDarker};
  font-size: ${$ => $.theme.fontSizes.large}px;
  font-weight: ${$ => $.theme.fontWeights.bold};

  ${$ => $.theme.media.up('mobile')} {
    font-size: ${$ => $.theme.fontSizes.larger}px;
  }

  ${$ => $.theme.media.up('tablet')} {
    font-size: ${$ => $.theme.fontSizes.largest}px;
  }
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
      <Button onClick={previousMonth}>
        <ChevronLeft />
      </Button>
      <Month>
        {format(value, 'MMMM - yyyy')}
      </Month>
      <Button onClick={nextMonth}>
        <ChevronRight />
      </Button>
    </Container>
  )
}
