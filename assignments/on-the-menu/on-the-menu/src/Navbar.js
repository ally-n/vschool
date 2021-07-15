import React, { useContext } from "react"
import { Link } from "react-router-dom"
import img from "./logo.png"
import {MenuContext} from "./MenuContext"

function Navbar() {
    const {setArray} = useContext(MenuContext)
    return (
        <div className="navbar">
            <div>
                <Link to="/" onClick={setArray}>
                <img src={img} width="300px" alt="on the menu" ></img>
                </Link>
            </div>
            <div className="link-wrapper">
                <Link to="/" onClick={setArray}>SEARCH</Link>
                <Link to="/profile" onClick={setArray}>PROFILE</Link>
            </div>
        </div>
        
    ) 
}

export default Navbar