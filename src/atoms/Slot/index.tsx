import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Atoms
import Typpography from '../Typography'

// Styles
const Main = styled.div`
  padding: 10px;
`

// Render
const Slot = ({ title }) => (
  <Main>
    <Typpography>{title}</Typpography>
  </Main>
)

Slot.propTypes = {
  title: PropTypes.string
}

export default Slot