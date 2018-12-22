import React from 'react'
import styled from 'styled-components'

const Typography = ({ Element, children, ...props }) => (
  <Element {...props}>{children}</Element>
)

Typography.defaultProps = {
  Element: 'p'
}

export default styled(Typography)`
  margin: ${props => props.margin || '0'};
`