import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Atoms
import Typpography from '../Typography'
import HoursList from '../HoursList'
import Slot from '../Slot'
import Button from '../Button'

// Config
import {headerHeight} from '../../config'

// Styles
const Main = styled.div`
  flex: 1;
`

const Header = styled.div`
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
`

// Render
const Day = ({ date }) => (
  <Main>
    <Header>
      <Typpography fontSize="14px">{date.format('DD/MM/YYYY')}</Typpography>
    </Header>

    <HoursList renderItem={(date) => (
      <Slot key={date.format('HH:mm')}>
        <Button>Create Booking</Button>
      </Slot>
    )} />
  </Main>
)

Day.propTypes = {
  date: PropTypes.any
}

export default Day