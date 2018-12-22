import React from 'react'
import styled from 'styled-components'

// Config
import {slotHeight} from '../../config'

// Styles
const Main = styled.div`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: ${slotHeight}
`

// Render
export default ({ children }) => (
  <Main>
    {children}
  </Main>
)