import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import {UglyContextProvider} from "./UglyThingsContext"


ReactDOM.render(
  <UglyContextProvider>
    <App />
 </UglyContextProvider>
  ,document.getElementById('root')
);


