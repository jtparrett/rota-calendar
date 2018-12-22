import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Config
import {hoursToShow} from '../../config'

// Context
import {withCalendar} from '../../context/calendar'

// Atoms
import IconButton from '../../atoms/IconButton'

// Styles
const Main = styled.div`
  margin-left: auto;
`

const Actions = styled.div`
  display: flex;
`

// Render
const Nav = ({ dayOffset, setDayOffset }) => (
  <Main>
    <Actions>
      <IconButton 
        onClick={() => setDayOffset(dayOffset - 1)} 
        icon="keyboard_arrow_left" 
        size={15} />

      <button onClick={() => setDayOffset(0)}>Today</button>

      <IconButton 
        onClick={() => setDayOffset(dayOffset + 1)} 
        icon="keyboard_arrow_right" 
        size={15} />
    </Actions>
  </Main>
)

Nav.propTypes = {
  dayOffset: PropTypes.number.isRequired,
  setDayOffset: PropTypes.func.isRequired
}

export default withCalendar(Nav)