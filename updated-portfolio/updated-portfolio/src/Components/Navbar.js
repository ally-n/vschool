import React from "react"
import {Link} from "react-router-dom"


export default function Navbar() {
    return(
        <div className="link-wrapper">
                <Link className="nav-links" to="/" >HOME</Link>
                <Link className="nav-links" to="/about" >ABOUT</Link>
                <Link className="nav-links" to="/projects" >PROJECTS</Link>
                <Link className="nav-links" to="/contact" >CONTACT</Link>
            </div>
    )
}