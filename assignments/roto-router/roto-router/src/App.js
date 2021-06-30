import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import About from "./About"
import Navbar from "./Navbar"
import Footer from "./Footer"


function App() {
    return (
        <div>
            <Navbar />
            
            <Switch>
            <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About /> 
                </Route>
                <Route path="/services">
                    <Services /> 
                </Route>
            </Switch>
            <Footer />

        </div>
    ) 
}

export default App