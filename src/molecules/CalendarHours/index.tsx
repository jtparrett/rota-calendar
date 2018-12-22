import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MaterialIcon from 'material-icons-react'

// Context
import {withCalendar} from '../../context/calendar'

// Atoms
import Typpography from '../../atoms/Typography'
import HoursList from '../../atoms/HoursList'
import Slot from '../../atoms/Slot'
import IconButton from '../../atoms/IconButton'

// Config
import {headerHeight} from '../../config'

// Styles
const Button = styled(IconButton)`
  height: ${headerHeight};
`

// Render
const CalendarHours = ({ hourOffset, incrementHourOffset, decrementHourOffset }) => (
  <div>
    <Button 
      onClick={decrementHourOffset} 
      icon="keyboard_arrow_up" 
      size={20} />

    <HoursList 
      renderItem={(date) => (
        <Slot key={date.format('HH:mm')}>
          <Typpography>{date.format('HH:mm')}</Typpography>
        </Slot>
      )} />

    <Button 
      onClick={incrementHourOffset} 
      icon="keyboard_arrow_down" 
      size={20} />
  </div>
)

CalendarHours.propTypes = {
  hourOffset: PropTypes.number.isRequired,
  incrementHourOffset: PropTypes.func.isRequired,
  decrementHourOffset: PropTypes.func.isRequired
}

export default withCalendar(CalendarHours)