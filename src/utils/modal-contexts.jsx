import * as React from 'react'

const ModalContext = React.createContext()

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'openModal':
      return {show: true}
    case 'closeModal':
      return {show: false}
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ModalProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(modalReducer, {show: false})

  const value = {state, dispatch}
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

const useModal = () => {
  const context = React.useContext(ModalContext)

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}

export {ModalProvider, useModal}