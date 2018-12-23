import React from 'react'
import styled from 'styled-components'

// Atoms
import Typography from '../../atoms/Typography'

// Molecules
import CalendarNav from '../../molecules/CalendarNav'

// Styles
const Main = styled.div`
  display: flex;
  padding-bottom: 20px;
  align-items: flex-end;
`

// Render
export default () => (
  <Main>
    <Typography Element="h1">Rota Calendar</Typography>
    <CalendarNav />
  </Main>
)