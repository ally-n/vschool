import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={context.theme}>
                    <select className="menu" onChange={context.onChange}>
                        <option value="">Choose Your Theme</option>
                        <option value="flowerA">Floral A</option>
                        <option value="flowerB">Floral B</option>
                        <option value="flowerC">Floral C</option>
                    </select>
                </div>
                
            )}
        </ThemeContextConsumer>
    )
}

export default Main