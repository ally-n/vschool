import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={context.theme} style={{backgroundImage: "none", height:"60px"}} >
                    <h1 ><a href="http://www.learn-the-flowers.com/" target="_blank">Design</a></h1>
                    <h1><a href="http://www.learn-the-flowers.com/" target="_blank">Portfolio</a></h1>
                    <h1><a href="http://www.learn-the-flowers.com/" target="_blank">Contact</a></h1>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header


// style={{background-image:none}}