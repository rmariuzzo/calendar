import React, { useState } from 'react'
import styled from 'styled-components'

import { unit } from './../theme'
import { CalendarControls } from './CalendarControls'
import { CalendarDates } from './CalendarDates'
import { CalendarFooter } from './CalendarFooter'

const CalendarContainer = styled.div`
  height: 100vh;
  padding: ${unit}px;
`

export const Calendar = () => {
  const [month, setMonth] = useState(new Date())

  return (
    <CalendarContainer>
      <CalendarControls value={month} onChange={setMonth} />
      <CalendarDates month={month} />
      <CalendarFooter />
    </CalendarContainer>
  )
}
