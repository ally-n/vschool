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
                <Route exact path="/">
                    <Search />
                </Route>
                <Route exact path="/business">
                    <Business /> 
                </Route>
                <Route exact path="/profile">
                    <Profile /> 
                </Route>
            </Switch>
            <Footer />
        </div>
    ) 
}

export default App