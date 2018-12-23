import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Config
import {hoursToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Hooks
const useHours = (date: any, hourOffset: number) => {
  const getHours = () => {
    return [...Array(hoursToShow)].map((_, index) => {
      return date
        .startOf('day')
        .add(index + hourOffset, 'hour')
    })
  }

  const [hours, setHours] = useState(getHours)

  useEffect(() => {
    setHours(getHours)
  }, [hourOffset])

  return hours
}

// Render
const HoursList = ({ date, hourOffset, renderItem }) => {
  const hours: any[] = useHours(date, hourOffset)

  return (
    <div>
      {hours.map((date) => {
        return renderItem(date)
      })}
    </div>
  )
}

HoursList.propTypes = {
  date: PropTypes.any.isRequired,
  hourOffset: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default withCalendar(HoursList)