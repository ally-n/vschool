import React, { useState, useEffect } from "react"
const MenuContext = React.createContext()

function MenuContextProvider(props) {
    const [ratingArray, setRatingArray] = useState([])
    const [addedItem, setAddedItem] = useState({text: "", rating: 0, photo:"" })
    const [businessID, setBusinessID] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [businessIMG, setBusinessIMG] = useState("")
    const [searchResults, setSearchResults] = useState()
    const [token, setToken] = useState("rHJRaOYaxrj6_mmjDI8cCXSozRWMg7_KGaMK5cEh3PiXtsulZSX4BnNlo_7QU3ns8vxPY5MTehGNcCu9LZ5CMN2_dl6tmzO_7WgEnlL5KljAeqEMz-w3UhE-r6ncYHYx")


    return (
        <MenuContext.Provider value={{
            ratingArray, addedItem, businessID, 
            searchResults, setSearchResults, businessName, 
            businessIMG, setBusinessName, setBusinessIMG, token}}>
        {props.children}
       </MenuContext.Provider>
    )

}

export {MenuContextProvider, MenuContext}

