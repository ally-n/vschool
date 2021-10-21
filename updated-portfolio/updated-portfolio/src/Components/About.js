import React from "react"
import Navbar from "./Navbar"
import experienceImage from "./Images/experience.jpeg"

export default function About() {
    return(
        <div>
            <div className="title">
                about
            </div>
            <Navbar />
            <div className="home-image">
                <img src={experienceImage} height="700px"></img>
            </div>
        </div>
    )
}