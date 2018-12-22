import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Render
const Typography = ({ Element, children, ...props }) => (
  <Element {...props}>{children}</Element>
)

Typography.defaultProps = {
  Element: 'p'
}

Typography.propTypes = {
  Element: PropTypes.string
}

// Styles
export default styled(Typography)`
  margin: ${props => props.margin || '0'};
`