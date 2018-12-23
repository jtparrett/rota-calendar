import {connect} from 'react-redux'
import {compose} from 'recompose'

// Actions
import {createBooking as createBookingAction} from '../../actions/bookings'

// Context
import {withCalendar} from '../../context/calendar'

// View
import View from './view'

// Map Redux dispatch to props
const createBooking = (dispatch) => (date) => {
  const bookingId = date.format()
  dispatch(createBookingAction(bookingId))
}

const mapDispatchToProps = (dispatch) => ({
  createBooking: createBooking(dispatch)
})

// Container
const CalendarDays = compose(
  withCalendar,
  connect(null, mapDispatchToProps)
)(View)

export default CalendarDays