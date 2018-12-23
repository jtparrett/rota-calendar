import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

// Atoms
import AddButton from '../AddButton'
import Typography from '../Typography'
import HoursList from '../HoursList'
import Slot from '../Slot'

// Config
import {headerHeight} from '../../config'

// Styles
const Main = styled.div`
  flex: 1;
  border-bottom: ${headerHeight} solid #000;
`

const Header = styled.div`
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 0 5px;
`

// Render
const Day = ({ date, addBooking }) => (
  <Main>
    <Header>
      <Typography fontSize="14px">{date.format('DD/MM/YYYY')}</Typography>
    </Header>

    <HoursList 
      date={date}
      renderItem={(slotDate) => (
        <Slot key={slotDate.format('HH:mm')}>
          <AddButton onClick={() => {
            addBooking(slotDate)
          }} />
        </Slot>
      )} />
  </Main>
)

Day.propTypes = {
  date: PropTypes.any,
  addBooking: PropTypes.func.isRequired
}

export default Day