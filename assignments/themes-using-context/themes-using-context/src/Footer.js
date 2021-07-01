import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={context.theme} style={{backgroundImage: "none", height:"60px"}}>
                    photography by ellie mae
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer

