import React from "react"
import {Switch, Route} from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import Search from "./Search"
import Business from "./Business"
import Profile from "./Profile"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route>
                    <Search />
                </Route>
                <Route>
                    <Business /> 
                </Route>
                <Route>
                    <Profile /> 
                </Route>
            </Switch>
            <Footer />

        </div>
    ) 
}

export default App