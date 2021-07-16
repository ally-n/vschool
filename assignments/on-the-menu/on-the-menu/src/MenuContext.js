import React, { useState, useEffect } from "react"
import axios from "axios"
const MenuContext = React.createContext()

function MenuContextProvider(props) {
    const [ratingArray, setRatingArray] = useState([])
    const [addedItem, setAddedItem] = useState({name: "", text: "", rating: 0, photo:"" })
    const [businessID, setBusinessID] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [businessIMG, setBusinessIMG] = useState("")
    const [searchResults, setSearchResults] = useState()
    const [showForm, setShowForm] = useState(false)
    const [city, setCity] = useState("")
    const [filteredArr, setFilteredArr] = useState()
    const [token] = useState("rHJRaOYaxrj6_mmjDI8cCXSozRWMg7_KGaMK5cEh3PiXtsulZSX4BnNlo_7QU3ns8vxPY5MTehGNcCu9LZ5CMN2_dl6tmzO_7WgEnlL5KljAeqEMz-w3UhE-r6ncYHYx")

    const getBusiness = (id) => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, { 
       headers: {
           Authorization: `Bearer ${token}`
           },
       params: {
           term: 'restaurants'
           }
       })
       .then(res => {
            window.scrollTo(0, 0)
           console.log(res.data)
           setBusinessName(res.data.name)
           setBusinessIMG(res.data.image_url)
           setCity(res.data.location.city)
           setBusinessID(res.data.id)
           
       })
       .catch(err => console.log(err))
   }

   const data = [
    {
        name: "Waffle Love",
        text: "Ate the red wonder. Would definitely eat again. Definitely the best waffle I've ever eaten in my entire life.",
        review: 5,
        photo: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        id: "Rt29i9qQhxc-ZaGl25_CAg"
    },
    {
        name: "Waffle Love",
        text: "Ate the purple wonder. Hated it. DO NOT ORDER AGAIN!",
        review: 1,
        photo: "https://images.unsplash.com/photo-1499969942143-ad2a66bc72dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        id: "Rt29i9qQhxc-ZaGl25_CAg"
       },
    {
        name: "Cafe Rio",
        text: "Sweet pork burrito was DIVINE! Order more guac next time.",
        review: 4,
        photo: "https://www.milehighonthecheap.com/lotc-cms/wp-content/uploads/2021/03/cafe-rio-e1617111402187.jpg",
        id: "EhUef0Aa7rrCWTJvk72PbA"
    }
]
  
function setArray() {
    return setRatingArray(data)
}

function toggleForm() {
    console.log(showForm)
    setShowForm(!showForm)
}

    return (
        <MenuContext.Provider value={{
            ratingArray, 
            addedItem, 
            businessID, 
            setBusinessID, 
            setRatingArray,
            searchResults, 
            setSearchResults, 
            businessName, 
            filteredArr,
            businessIMG, 
            setBusinessName, 
            setBusinessIMG, 
            getBusiness, 
            setAddedItem, 
            setArray, 
            toggleForm, 
            showForm, 
            token}}>
        {props.children}
       </MenuContext.Provider>
    )

}

export {MenuContextProvider, MenuContext}

