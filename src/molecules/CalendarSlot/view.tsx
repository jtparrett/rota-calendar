import React from 'react'
import PropTypes from 'prop-types'

// Atoms
import Slot from '../../atoms/Slot'
import Typography from '../../atoms/Typography'

// Render
const CalendarSlot = ({ actions, isBooked }) => (
  <Slot>
    {isBooked ? (
      <Typography>Booked</Typography>
    ) : actions}
  </Slot>
)

CalendarSlot.propTypes = {
  actions: PropTypes.element.isRequired,
  isBooked: PropTypes.bool
}

export default CalendarSlot