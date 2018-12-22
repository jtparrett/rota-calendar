import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Atoms
import HoursList from '../../atoms/HoursList'
import Slot from '../../atoms/Slot'

// Config
import {headerHeight} from '../../config'

// Styles
const Main = styled.div`
  padding-top: ${headerHeight}
`

// Render
const CalendarHours = ({ hourOffset }) => (
  <Main>
    <HoursList 
      hourOffset={hourOffset}
      renderItem={(date) => (
        <Slot key={date.format('HH:mm')} title={date.format('HH:mm')} />
      )} />
  </Main>
)

CalendarHours.propTypes = {
  hourOffset: PropTypes.number
}

export default CalendarHours