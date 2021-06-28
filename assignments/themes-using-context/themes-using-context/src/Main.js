import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={context.theme}>
                    <button onClick={context.showMenuNow} id="randomBtn"> 
                        Choose your Theme
                    </button>
                    {context.showMenu ? 
                    <div className="menu">
                        <button>Floral A</button>
                        <button>Floral B</button>
                        <button>Floral C</button>
                    </div>
             : (null) }
                </div>
                
            )}
        </ThemeContextConsumer>
    )
}

export default Main