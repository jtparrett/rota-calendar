import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

// Atoms
import Day from '../../atoms/Day'

// Config
import {daysToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Methods
const today = dayjs().startOf('day')

const useDays = (dayOffset: number) => {
  
  const getDays = () => {
    return [...Array(daysToShow)].map((_, index) => {
      return today.add(index + dayOffset, 'day')
    })    
  }

  const [days, setDays] = useState(getDays())

  useEffect(() => {
    setDays(getDays())
  }, [dayOffset])

  return days
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