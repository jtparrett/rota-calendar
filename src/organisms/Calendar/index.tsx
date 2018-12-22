import React, {useState} from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

// Molecules
import Day from '../../molecules/Day'

const Track = styled.div`
  display: flex;

  > * {
    flex: 1;
  }
`

const useDays = (dayOffset: number) => {
  return [...Array(7)].map((_, index) => {
    return dayjs()
      .startOf('day')
      .add(index + dayOffset, 'day')
  })
}

export default () => {
  const [dayOffset, setDayOffset] = useState(0)
  const days: any[] = useDays(dayOffset)

  const today = dayjs().startOf('day')

  return (
    <React.Fragment>
      <button onClick={() => setDayOffset(dayOffset + 1)}>Next</button>
      <button onClick={() => setDayOffset(dayOffset - 1)}>Prev</button>

      <Track>
        {days.map(date => (
          <Day key={date.format('DD/MM/YYYY')} date={date} />
        ))}
      </Track>

      <div>
        {[...Array(12)].map((_, index) => (
          <p>{today.add(index, 'hour').format('HH:mm')}</p>
        ))}
      </div>
    </React.Fragment>
  )
}