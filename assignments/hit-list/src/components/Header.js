import React from "react"
import Image from "./don.jpeg"

function Header() {
    return (
        <div className="header">
            <img src={Image} alt="don corleone" width="300px"/>
             <h1>The Hit List </h1>

        </div>
       
    )
}
 
export default Header