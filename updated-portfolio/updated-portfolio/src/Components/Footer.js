import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faFile } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const gitHub = <FontAwesomeIcon icon={faGithub} />
    const resume = <FontAwesomeIcon icon={faFile} />

    return(
        <div className="footer">
            <a target="blank" href="https://www.linkedin.com/in/ally-nickell/">{linkedIn}</a>
            <a target="blank" href="https://docs.google.com/document/d/1u9xCmzuZ5o0F5hmyrGrAJrYOJrOe8MrK2i1ZPkE-33o/edit#heading=h.9wrblhy0979r">{resume}</a>
            <a target="blank" href="https://github.com/ally-n">{gitHub}</a>
        </div>
    )
}