import React from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'

// Styles
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  color: #aaa;
  cursor: pointer;

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