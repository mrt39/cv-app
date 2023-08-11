import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Test1 from './Test1.jsx'
import Display from './Display.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
)

/* ReactDOM.createRoot(document.getElementById('display')).render(
  <React.StrictMode>
        <Components.NamePanel/>
  </React.StrictMode>,
) */
