import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Bank from './Bank'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bank />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
