import {
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  format,
  getWeeksInMonth
} from 'date-fns'
import { lighten } from 'polished'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { unit } from '../theme'
import { controlsHeight } from './CalendarControls'
import { footerHeight } from './CalendarFooter'

const Container = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: ${$ => $.theme.unit / 2}px;
  overflow: hidden;
  box-shadow: ${$ => $.theme.boxShadows.neutralDark};
`

type CalendarDateProps = {
  inMonth: boolean
  today: boolean
}

const CalendarDate = styled.li<CalendarDateProps>`
  flex: 0 0 ${100 / 7}%;
  height: calc((100vh - ${controlsHeight + footerHeight}px - ${unit * 2}px) / 6);
  color: ${$ => ($.inMonth ? $.theme.colors.neutralDarker : $.theme.colors.neutralDark)};
  text-align: right;
  background-color: ${$ => lighten($.inMonth ? 1 : 0, $.theme.colors.neutral)};
  padding: ${unit / 2}px;

  ${$ => $.today && css`
    position: relative;
    font-weight: ${$ => $.theme.fontWeights.bold};
    background-color: ${$ => lighten(.4, $.theme.colors.primary)};
    box-shadow: ${$ => $.theme.boxShadows.neutralDark};

    &:after {
      content: '';
      border: ${$ => $.theme.colors.primary} solid ${$ => $.theme.borderWidths.normal}px;
      border-radius: ${$ => $.theme.borderRadiuses.small}px;
      position: absolute;
      left: -2px;
      right: -2px;
      top: -2px;
      bottom: -2px;
    }
  `}

  &:nth-last-child(n+8) {
    border-bottom: ${$ => $.theme.colors.neutralDark} solid ${$ => $.theme.borderWidths.thin}px;
  }

  &:not(:nth-child(7n)) {
    border-right: ${$ => $.theme.colors.neutralDark} solid ${$ => $.theme.borderWidths.thin}px;
  }
`

const weekStartsOn = 1

type CalendarDatesProps = {
  month: Date
}

export const CalendarDates: FC<CalendarDatesProps> = props => {
  const { month, ...more } = props

  const now = new Date()
  const start = startOfWeek(startOfMonth(month), { weekStartsOn })
  const end = addWeeks(
    endOfWeek(endOfMonth(month), { weekStartsOn }),
    6 - getWeeksInMonth(month, { weekStartsOn })
  )
  const dates = eachDayOfInterval({ start, end })

  return (
    <Container {...more}>
      {dates.map(date => (
        <CalendarDate
          key={date.getTime()}
          inMonth={isSameMonth(date, month)}
          today={isSameDay(date, now)}
        >
          {getDate(date) === 1 && `${format(date, 'MMM')} `}
          {getDate(date)}
        </CalendarDate>
      ))}
    </Container>
  )
}
