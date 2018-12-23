import React from 'react'
import styled from 'styled-components'
import MaterialIcon from 'material-icons-react'
import PropTypes from 'prop-types'

// Styles
const Button = styled.button`
  outline: none;
  display: flex;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #000;
  cursor: pointer;
  margin: 0;
`

// Render
const IconButton = ({ icon, size, ...props }) => (
  <Button {...props}>
    <MaterialIcon icon={icon} size={size} color="#fff" />
  </Button>
)

IconButton.defaultProps = {
  size: 25
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default IconButton