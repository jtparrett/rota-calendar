import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MaterialIcon from 'material-icons-react'
import dayjs from 'dayjs'

// Context
import {withCalendar} from '../../context/calendar'

// Atoms
import Typography from '../../atoms/Typography'
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
const today = dayjs()

const CalendarHours = ({ hourOffset, incrementHourOffset, decrementHourOffset }) => (
  <div>
    <Button 
      onClick={decrementHourOffset} 
      icon="keyboard_arrow_up" 
      size={20} />

    <HoursList 
      date={today}
      renderItem={(date) => (
        <Slot key={date.format('HH:mm')}>
          <Typography>{date.format('HH:mm')}</Typography>
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