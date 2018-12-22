import React, {useState} from 'react'
import styled from 'styled-components'

// Config
import {hoursToShow} from '../../config'

// Molecules
import CalendarDays from '../../molecules/CalendarDays'
import CalendarHours from '../../molecules/CalendarHours'

// Styles
const Main = styled.div`
  display: flex;
`

// Methods
const incrementHour = (hourOffset, setHourOffset) => () => {
  setHourOffset(Math.min(hourOffset + 1, 24 - hoursToShow))
}

const decrementHour = (hourOffset, setHourOffset) => () => {
  setHourOffset(Math.max(hourOffset - 1, 0)) 
}

// Render
export default () => {
  const [dayOffset, setDayOffset] = useState(0)
  const [hourOffset, setHourOffset] = useState(0)

  return (
    <React.Fragment>
      <button onClick={() => setDayOffset(dayOffset - 1)}>Prev Day</button>
      <button onClick={() => setDayOffset(dayOffset + 1)}>Next Day</button>

      <Main>
        <CalendarHours 
          hourOffset={hourOffset} />
          
        <CalendarDays 
          hourOffset={hourOffset} 
          dayOffset={dayOffset} />
      </Main>

      <button onClick={decrementHour(hourOffset, setHourOffset)}>Prev Hour</button>
      <button onClick={incrementHour(hourOffset, setHourOffset)}>Next Hour</button>
    </React.Fragment>
  )
}