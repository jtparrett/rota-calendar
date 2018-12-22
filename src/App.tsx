import React from 'react'

// Atoms
import Container from './atoms/Container'
import Typpography from './atoms/Typography'

export default () => (
  <Container>
    <Typpography Element="h1" margin="0 0 20px">Rota Calendar</Typpography>

    <button>Next</button>
    <button>Prev</button>
  </Container>
)