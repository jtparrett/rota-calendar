import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

// Atoms
import Day from '../../atoms/Day'

// Config
import {daysToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Methods
const useDays = (dayOffset: number) => {
  // Create array of 'daysToShow' length
  return [...Array(daysToShow)].map((_, index) => {
    return dayjs()
      .startOf('day')
      .add(index + dayOffset, 'day')
  })
}

// Render
const CalendarDays = ({ dayOffset }) => {
  const days: any[] = useDays(dayOffset)

  return (
    <React.Fragment>
      {days.map(date => (
        <Day 
          key={date.format('DD/MM/YYYY')} 
          date={date} />
      ))}
    </React.Fragment>
  )
}

CalendarDays.propTypes = {
  dayOffset: PropTypes.number.isRequired
}

export default withCalendar(CalendarDays)