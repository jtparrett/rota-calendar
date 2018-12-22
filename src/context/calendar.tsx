import React,{ useState } from 'react'
import PropTypes from 'prop-types'

// Config
import {hoursToShow} from '../config'

// Context
const CalendarContext = React.createContext({})

// Methods
const incrementFactory = (hourOffset: number, setHourOffset) => () => {
  setHourOffset(Math.min(hourOffset + 1, 24 - hoursToShow))
}

const decrementFactory = (hourOffset: number, setHourOffset) => () => {
  setHourOffset(Math.max(hourOffset - 1, 0))
}

// Provider
export const CalendarProvider = ({children}) => {
  const [dayOffset, setDayOffset] = useState(0)
  const [hourOffset, setHourOffset] = useState(0)

  const incrementHourOffset = incrementFactory(hourOffset, setHourOffset)
  const decrementHourOffset = decrementFactory(hourOffset, setHourOffset)

  const value: object = {
    dayOffset,
    setDayOffset,
    hourOffset,
    incrementHourOffset,
    decrementHourOffset
  }

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}

// Consumer HOC
export const withCalendar = (Component) => {
  return (props) => (
    <CalendarContext.Consumer>
      {(calendarProps: object) => (
        <Component {...calendarProps} {...props} />
      )}
    </CalendarContext.Consumer>
  )
}

withCalendar.propTypes = {
  Component: PropTypes.element.isRequired
}