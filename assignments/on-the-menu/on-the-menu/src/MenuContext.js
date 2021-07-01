import React, { useState, useEffect } from "react"
import axios from "axios"
const MenuContext = React.createContext()

function MenuContext(props) {
   
    return (
        <MenuContext.Provider value={{}}>
        {props.children}
       </MenuContext.Provider>
    )

}

export {MenuContextProvider, MenuContext}