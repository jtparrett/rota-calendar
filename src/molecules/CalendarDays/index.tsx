import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

// Atoms
import Day from '../../atoms/Day'
import Modal from '../../atoms/Modal'
import Button from '../../atoms/Button'
import Typpography from '../../atoms/Typography'

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
          <Typpography margin="0 0 10px">{selectedDate.format('MMMM D : HH:mm')}</Typpography>
          <Button title="Close" onClick={() => setModalOpen(false)} />
        </Modal>
      }
    </React.Fragment>
  )
}

CalendarDays.propTypes = {
  dayOffset: PropTypes.number.isRequired
}

export default withCalendar(CalendarDays)