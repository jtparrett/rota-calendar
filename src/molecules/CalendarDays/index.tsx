import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose} from 'recompose'

// Atoms
import Day from '../../atoms/Day'
import Modal from '../../atoms/Modal'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

// Config
import {daysToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Hooks
const today = dayjs().startOf('day')

const useDays = (dayOffset: number) => {
  
  const getDays = () => {
    return [...Array(daysToShow)].map((_, index) => {
      return today.add(index + dayOffset, 'day')
    })    
  }

  const [days, setDays] = useState(getDays)

  useEffect(() => {
    setDays(getDays)
  }, [dayOffset])

  return days
}

// Render
const CalendarDays = ({ dayOffset }) => {
  const days: any[] = useDays(dayOffset)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(today)

  return (
    <React.Fragment>
      {days.map(date => (
        <Day 
          key={date.format('DD/MM/YYYY')} 
          date={date}
          addBooking={(date) => {
            setSelectedDate(date)
            setModalOpen(true)
          }} />
      ))}

      {modalOpen &&
        <Modal>
          <Button title="Close" onClick={() => setModalOpen(false)} />
          <Typography margin="10px 0">{selectedDate.format('MMMM D : HH:mm')}</Typography>
          <Button title="Book this slot" onClick={() => setModalOpen(false)} />
        </Modal>
      }
    </React.Fragment>
  )
}

CalendarDays.propTypes = {
  dayOffset: PropTypes.number.isRequired
}

// Redux Queries
const mapStateToProps = (store, props) => ({

})

// Compose
export default compose(
  withCalendar,
  connect(mapStateToProps)
)(CalendarDays)