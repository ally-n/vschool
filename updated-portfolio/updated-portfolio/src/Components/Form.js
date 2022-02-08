import React from "react"

export default function Form() {
    return (
        <form id="contact-form" action="https://formsubmit.co/84c506348ee426cffcd7e8a030cfd61e" method="POST" class="contact-container">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something... "></textarea>
            <button type="submit" value="Submit" className="submit-button">Submit</button>
        </form>
    )}

   

   