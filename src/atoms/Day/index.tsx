import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

// Atoms
import Typpography from '../Typography'
import HoursList from '../HoursList'
import Slot from '../Slot'
import Modal from '../Modal'

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
const Day = ({ date }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(date)

  return (
    <Main>
      <Header>
        <Typpography fontSize="14px">{date.format('DD/MM/YYYY')}</Typpography>
      </Header>

      <HoursList 
        date={date}
        renderItem={(date) => (
          <Slot key={date.format('HH:mm')}>
            <button onClick={() => {
              setSelectedDate(date)
              setModalOpen(true)
            }}>Book</button>
          </Slot>
        )} />

      {modalOpen &&
        <Modal>
          <button onClick={() => setModalOpen(false)}>Close</button>
          <Typpography>{selectedDate.format('DD/MM/YYYY HH:mm')}</Typpography>
        </Modal>
      }
    </Main>
  )
}

Day.propTypes = {
  date: PropTypes.any
}

export default Day