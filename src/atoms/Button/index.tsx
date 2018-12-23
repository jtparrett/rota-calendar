import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Atoms
import Typography from '../../atoms/Typography'

// Styles
const Main = styled.button`
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  display: block;
`

// Render
const Button = ({title, ...props}) => (
  <Main {...props}>
    <Typography color="inherit" fontSize="12px">{title}</Typography>
  </Main>
)

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button