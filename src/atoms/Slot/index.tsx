import React from 'react'
import styled from 'styled-components'

// Config
import {slotHeight} from '../../config'

// Styles
const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  height: ${slotHeight};
  box-sizing: border-box;
`

// Render
export default ({ children }) => (
  <Main>
    {children}
  </Main>
)