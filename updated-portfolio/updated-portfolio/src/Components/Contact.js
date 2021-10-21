import React from "react"
import Navbar from "./Navbar"
import Form from "./Form"
import img4 from "./Images/connect.png"


export default function Contact() {
    return(
        <div>
            <div className="title">
                contact
            </div>
            <Navbar />
            <div class="contact-flex">
                <Form />
                <div class="lets-connect">
                    <img src={img4} alt="let's connect"/>
                </div>
            </div>
        </div>
    )
}