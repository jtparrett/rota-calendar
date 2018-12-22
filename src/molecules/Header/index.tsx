import React from 'react'
import styled from 'styled-components'

// Atoms
import Typography from '../../atoms/Typography'
import Nav from '../../atoms/Nav'

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
    <Nav />
  </Main>
)