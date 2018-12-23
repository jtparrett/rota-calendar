import React from 'react'
import {Provider} from 'react-redux'

// Store
import store from './store'

// Atoms
import Container from './atoms/Container'

// Organisms
import Calendar from './organisms/Calendar'

// Render
export default () => (
  <Provider store={store}>
    <Container>
      <Calendar />
    </Container>
  </Provider>
)