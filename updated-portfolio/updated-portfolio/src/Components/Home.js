import React from "react"
import Navbar from "./Navbar"
import homeImage from "./Images/ally.png"

export default function Home() {
    return(
        <div>
            <div className="title">
                hello
            </div>
            <Navbar />
            <div className="home-image">
                <img src={homeImage} height="700px"></img>
            </div>
        </div>
    )
}