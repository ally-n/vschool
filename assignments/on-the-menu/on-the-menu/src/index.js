import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {MenuContextProvider} from "./MenuContext"
import './index.css'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
     <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </BrowserRouter>
  ,document.getElementById('root')
)

