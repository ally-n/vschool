import React from "react"
import { Link } from "react-router-dom"
import img from "./logo.png"

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <Link to="/">
                <img src={img} width="200px" alt="on the menu" ></img>
                </Link>
            </div>
            <div className="link-wrapper">
                <Link to="/">SEARCH</Link>
                <Link to="/profile">PROFILE</Link>
            </div>
        </div>
        
    ) 
}

export default Navbar