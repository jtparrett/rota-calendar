import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Context
import {withCalendar} from '../../context/calendar'

// Atoms
import Typpography from '../../atoms/Typography'
import HoursList from '../../atoms/HoursList'
import Slot from '../../atoms/Slot'

// Config
import {headerHeight} from '../../config'

// Styles
const Main = styled.div`
  padding-top: ${headerHeight}
`

// Render
const CalendarHours = ({ hourOffset, incrementHourOffset, decrementHourOffset }) => (
  <Main>
    <button onClick={decrementHourOffset}>Prev</button>
    <HoursList 
      renderItem={(date) => (
        <Slot key={date.format('HH:mm')}>
          <Typpography>{date.format('HH:mm')}</Typpography>
        </Slot>
      )} />
      <button onClick={incrementHourOffset}>Next</button>
  </Main>
)

CalendarHours.propTypes = {
  hourOffset: PropTypes.number.isRequired,
  incrementHourOffset: PropTypes.func.isRequired,
  decrementHourOffset: PropTypes.func.isRequired
}

export default withCalendar(CalendarHours)