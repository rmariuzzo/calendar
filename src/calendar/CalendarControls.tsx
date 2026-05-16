import { addMonths, subMonths, format } from 'date-fns'
import { FC } from 'react'
import styled from 'styled-components'

import { unit, mix } from '../theme'
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
  color: ${$ => mix(0.25, '#fff', $.theme.colors.gray)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${controlsHeight}px;
  border: ${$ => mix(0.75, '#fff', $.theme.colors.gray)} solid ${$ => $.theme.borderWidths.thin}px;
  border-radius: ${$ => $.theme.borderRadiuses.normal}px;
  background-color: ${$ => $.theme.colors.white};
  box-shadow: ${$ => $.theme.boxShadows.normal};
  transition: ${$ => $.theme.transitions.all};

  &:hover,
  &:focus {
    color: ${$ => $.theme.colors.gray};
    border-color: ${$ => mix(0.5, '#fff', $.theme.colors.gray)};
    box-shadow: ${$ => $.theme.boxShadows.large};
  }

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
  color: ${$ => $.theme.colors.gray};
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

export const CalendarControls: FC<CalendarControlsProps> = ({
  value,
  onChange,
}) => {
  const nextMonth = () => onChange(addMonths(value, 1))
  const previousMonth = () => onChange(subMonths(value, 1))

  return (
    <Container>
      <Button onClick={previousMonth}>
        <ChevronLeft />
      </Button>
      <Month>{format(value, 'MMMM - yyyy')}</Month>
      <Button onClick={nextMonth}>
        <ChevronRight />
      </Button>
    </Container>
  )
}
