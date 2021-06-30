import React from "react"
import {Link, Switch, Route} from "react-router-dom"


function About() {
    return (
    <div className="body-section">
        <div>
        <img src="https://images.unsplash.com/photo-1562159937-194305937c6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80" height="300px"/> 
        </div>
        <div className="body-text">
        We like to fix things when they get broken so you don't have to. Call us or hate your life.
        </div>
    </div>
    ) 
}

export default About