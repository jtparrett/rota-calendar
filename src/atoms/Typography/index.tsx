import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Typography = ({ Element, children, ...props }) => (
  <Element {...props}>{children}</Element>
)

Typography.defaultProps = {
  Element: 'p'
}

Typography.propTypes = {
  Element: PropTypes.string
}

export default styled(Typography)`
  margin: ${props => props.margin || '0'};
`