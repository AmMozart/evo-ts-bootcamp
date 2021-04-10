import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { ARRAY_SIZE, SPEED } from './config'

ReactDOM.render(
  <React.StrictMode>
    <App arraySize={ARRAY_SIZE} speed={SPEED} />
  </React.StrictMode>,
  document.getElementById('root')
)