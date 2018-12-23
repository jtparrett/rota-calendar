import React from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

// Styles
const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  color: #aaa;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: #000;
  }
`

// Render
export default (props) => (
  <Button {...props}>
    <MaterialIcon icon="add" color="inherit" />
  </Button>
)