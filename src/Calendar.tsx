import {
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
  format,
  getWeeksInMonth
} from 'date-fns'
import React, { useState } from 'react'
import styled from 'styled-components'

const unit = 20
const controlsHeight = unit * 3

const CalendarContainer = styled.div`
  height: 100vh;
  padding: ${unit}px;

  &,
  * {
    box-sizing: border-box;
  }
`
const CalendarControls = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: ${controlsHeight}px;
  padding-bottom: ${unit}px;
  button {
    display: block;
    height: 100%;
    width: ${controlsHeight}px;
  }
`
const CalendarControlsMonth = styled.div`
  flex: 1 0 auto;
  padding: 0 ${unit}px;
  text-align: center;
`
const CalendarDates = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
type CalendarDateProps = {
  inMonth: boolean
  today: boolean
}
const CalendarDate = styled.li<CalendarDateProps>`
  flex: 0 0 ${100 / 7}%;
  height: calc((100vh - ${controlsHeight}px - ${unit * 2}px) / 6);
  border: #000 solid 1px;
  color: ${props => (props.inMonth ? '#333' : '#666')};
  text-align: right;
  background-color: ${props => (props.inMonth ? '#fff' : '#eee')};
  padding: ${unit / 2}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props =>
    props.today &&
    `
    font-weight: bold;
    border-color: #000;
    background-color: #bbb;
  `}
`

const weekStartsOn = 1

export const Calendar = () => {
  const [month, setMonth] = useState(new Date())

  const now = new Date()
  const start = startOfWeek(startOfMonth(month), { weekStartsOn })
  const end = addWeeks(
    endOfWeek(endOfMonth(month), { weekStartsOn }),
    6 - getWeeksInMonth(month, { weekStartsOn })
  )
  const dates = eachDayOfInterval({ start, end })

  const nextMonth = () => {
    setMonth(addMonths(month, 1))
  }

  const previousMonth = () => {
    setMonth(subMonths(month, 1))
  }

  return (
    <CalendarContainer>
      <CalendarControls>
        <button onClick={previousMonth}>&lt;</button>
        <CalendarControlsMonth>
          {format(month, 'MMMM - yyyy')}
        </CalendarControlsMonth>
        <button onClick={nextMonth}>&gt;</button>
      </CalendarControls>
      <CalendarDates>
        {dates.map(date => (
          <CalendarDate
            key={date.getTime()}
            inMonth={isSameMonth(date, month)}
            today={isSameDay(date, now)}
          >
            {getDate(date) === 1 && format(date, 'MMM')}
            {getDate(date)}
          </CalendarDate>
        ))}
      </CalendarDates>
    </CalendarContainer>
  )
}
