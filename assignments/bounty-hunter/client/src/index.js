import React from "react"
import ReactDOM from "react-dom"
import {BountyContextProvider} from "./components/BountyContext"

import App from "./App"

ReactDOM.render(
    <BountyContextProvider>
        <App />
    </BountyContextProvider>
, document.getElementById('root')
)