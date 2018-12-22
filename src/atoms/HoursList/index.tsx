import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Config
import {hoursToShow} from '../../config'

const today = dayjs().startOf('day')

// Methods
const useHours = (hourOffset: number) => {
  // Create array of 'hoursToShow' length
  return [...Array(hoursToShow)].map((_, index) => {
    return today.add(index + hourOffset, 'hour')
  })
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
  hourOffset: PropTypes.number,
  renderItem: PropTypes.func
}

export default HoursList