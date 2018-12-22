import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Config
import {hoursToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Methods
const today = dayjs().startOf('day')

const useHours = (hourOffset: number) => {
  const getHours = () => {
    return [...Array(hoursToShow)].map((_, index) => {
      return today.add(index + hourOffset, 'hour')
    })
  }

  const [hours, setHours] = useState(getHours())

  useEffect(() => {
    setHours(getHours())
  }, [hourOffset])

  return hours
}

// Render
const HoursList = ({ hourOffset, renderItem }) => {
  const hours: any[] = useHours(hourOffset)

  return (
    <div>
      {hours.map((date) => {
        return renderItem(date)
      })}
    </div>
  )
}

HoursList.propTypes = {
  hourOffset: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired
}

export default withCalendar(HoursList)