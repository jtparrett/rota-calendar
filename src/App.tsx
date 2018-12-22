import React from 'react'

// Atoms
import Container from './atoms/Container'
import Typpography from './atoms/Typography'

// Organisms
import Calendar from './organisms/Calendar'

// Render
export default () => (
  <Container>
    <Typpography Element="h1" margin="0 0 20px">Rota Calendar</Typpography>
    <Calendar />
  </Container>
)