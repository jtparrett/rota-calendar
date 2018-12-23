import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

// View
import View from './view'

// Map redux state to props
const getBookings = (state) => state.bookings

const getDate = (_, props) => props.date

const getBookingByDate = createSelector(
  getBookings, 
  getDate,
  (bookings, date) => {
    return bookings[date.format()]
  }
)

const mapStateToProps = (store, props) => ({
  isBooked: getBookingByDate(store, props)
})

const CalendarSlot = connect(mapStateToProps)(View)

CalendarSlot.propTypes = {
  date: PropTypes.any.isRequired
}

export default CalendarSlot