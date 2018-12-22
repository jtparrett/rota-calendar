import React from 'react'
import styled from 'styled-components'

// Styles
const Main = styled.div`
  padding: 10px;
`

// Render
export default ({ children }) => (
  <Main>
    {children}
  </Main>
)