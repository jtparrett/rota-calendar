import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

// Atoms
import AddButton from '../AddButton'
import Button from '../Button'
import Typpography from '../Typography'
import HoursList from '../HoursList'
import Slot from '../Slot'
import Modal from '../Modal'

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
            <AddButton
              onClick={() => {
                setSelectedDate(date)
                setModalOpen(true)
              }} />
          </Slot>
        )} />

      {modalOpen &&
        <Modal>
          <Typpography margin="0 0 10px">{selectedDate.format('MMMM D : HH:mm')}</Typpography>
          <Button title="Close" onClick={() => setModalOpen(false)} />
        </Modal>
      }
    </Main>
  )
}

Day.propTypes = {
  date: PropTypes.any
}

export default Day