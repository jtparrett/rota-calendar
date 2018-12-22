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
const Day = ({ date }) => (
  <Main>
    <Header>
      <Typpography>{date.format('DD/MM/YYYY')}</Typpography>
    </Header>

    <HoursList renderItem={(date) => (
      <Slot key={date.format('HH:mm')}>
        <button>Book Now</button>
      </Slot>
    )} />
  </Main>
)

Day.propTypes = {
  date: PropTypes.any
}

export default Day