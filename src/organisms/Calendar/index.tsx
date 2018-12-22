import React from 'react'
import styled from 'styled-components'

// Config
import {hoursToShow} from '../../config'

// Context
import {CalendarProvider, CalendarConsumer} from '../../context/calendar'

// Molecules
import CalendarDays from '../../molecules/CalendarDays'
import CalendarHours from '../../molecules/CalendarHours'

// Styles
const Main = styled.div`
  display: flex;
`

// Render
export default () => (
  <CalendarProvider>
    <CalendarConsumer>
      {({ dayOffset, setDayOffset }) => (
        <React.Fragment>
          <button onClick={() => setDayOffset(dayOffset - 1)}>&lt;</button>
          <button onClick={() => setDayOffset(0)}>Today</button>
          <button onClick={() => setDayOffset(dayOffset + 1)}>&gt;</button>
        </React.Fragment>
      )}
    </CalendarConsumer>

    <Main>
      <CalendarHours />
      <CalendarDays />
    </Main>
  </CalendarProvider>
)