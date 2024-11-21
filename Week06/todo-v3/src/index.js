import React from 'react'
import ReactDOM from 'react-dom/client'
// import TodoContext from './context/Todos'
import { Provider } from './context/Todos'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // wrapping the app in the TOdoCOntext.Provider --> meaning that everything inside app will have access to the TodoContext
  <Provider> 
    <App />
  </Provider>
)