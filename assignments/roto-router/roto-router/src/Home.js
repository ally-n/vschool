import React from "react"
import {Link, Switch, Route} from "react-router-dom"


function Home() {
    return (
        <div className="body-section">
            <div>
            <img src="https://images.unsplash.com/photo-1542013936693-884638332954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" height="300px"/> 

            </div>
            <div className="body-text">
            We are a humble family business started by our Great-Grandma Mary-Ann Beth Suzy Q Smithy. We love fixing broken stuff so call us up!

            </div>
        </div>
    ) 
}

export default Home