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
  Element: PropTypes.string,
  margin: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string
}

// Styles
export default styled(Typography)`
  line-height: 1;
  margin: ${props => props.margin || '0'};
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.color && `color: ${props.color};`}
`