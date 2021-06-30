import React from "react"
import {Link} from "react-router-dom"


function Navbar() {
    return (
        <div className="header">
            <div className="links">
            <Link to="./">Home</Link>
            <Link to="./about">About</Link>
            <Link to="./services">Services</Link>
            </div>
            <div className="title">
                Go with the Flow Plumbing
            </div>
        </div>
        
    ) 
}

export default Navbar
    
    