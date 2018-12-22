import React from 'react'
import styled from 'styled-components'

// Context
import {CalendarProvider} from '../../context/calendar'

// Molecules
import Header from '../../molecules/Header'
import CalendarDays from '../../molecules/CalendarDays'
import CalendarHours from '../../molecules/CalendarHours'

// Styles
const Main = styled.div`
  display: flex;
`

// Render
export default () => (
  <CalendarProvider>
    <Header />
    <Main>
      <CalendarHours />
      <CalendarDays />
    </Main>
  </CalendarProvider>
)