import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={context.theme} style={{backgroundImage: "none", height:"60px"}}>
                    “Don’t let anyone rob you of your imagination, your creativity, or your curiosity." -Mae Jemison"
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer

{/* <div className={context.theme}> */}