import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Atoms
import Typpography from '../Typography'
import HoursList from '../HoursList'
import Slot from '../Slot'

// Config
import {headerHeight} from '../../config'

// Styles
const Main = styled.div`
  flex: 1;
`

const Header = styled.div`
  height: ${headerHeight}
`

// Render
const Day = ({ date, hourOffset }) => (
  <Main>
    <Header>
      <Typpography>{date.format('DD/MM/YYYY')}</Typpography>
    </Header>

   <HoursList 
    hourOffset={hourOffset}
    renderItem={(date) => (
      <Slot key={date.format('HH:mm')} title="Book Now" />
    )} />
  </Main>
)

Day.propTypes = {
  date: PropTypes.any,
  hourOffset: PropTypes.number
}

export default Day