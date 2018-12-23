import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Styles
const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`

const Content = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
`

// Render
const modalRoot = document.getElementById('modal-root')

const Modal = ({children}) => {
  if(!modalRoot){
    return null
  }

  const Component = () => (
    <Main>
      <Content>
        {children}
      </Content>
    </Main>
  )

  return ReactDOM.createPortal(<Component />, modalRoot)
}

Modal.propTypes = {
  children: PropTypes.any
}

export default Modal