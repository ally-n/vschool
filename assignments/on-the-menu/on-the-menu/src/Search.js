import React, { useContext, useState } from "react"
import axios from "axios"
import {MenuContext} from "./MenuContext"

function Search(props) {
    const {token, searchResults, setSearchResults, businessName, setBusinessName} = useContext(MenuContext)
    const [search, setSearch] = useState("")
    const [mappedData, setMappedData] = useState([])
    
    const getData = (search) => {
         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?`, {
        headers: {
            Authorization: `Bearer ${token}`
            },
        params: {
            term: search,
            location: "Utah County"
            }
        })
        .then(res => {
            setSearchResults(res.data)
            console.log(searchResults)
            console.log(res.data.businesses[0].name)  //works
            setMappedData(res.data.businesses.map(item => {
                return (
                    <h1>{item.name}</h1>
                    // <h3>{item.city}</h3>
                )
            }))
        })
        .catch(err => console.log(err))

    }
  
    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        getData(search)

  }
//   console.log(searchResults)
 



    
    return (
        <div>
            {mappedData}
            <div className="search-body">
                <form onSubmit={handleSubmit}>
                    SEARCH HERE
                    <input
                        value={search}
                        name="search" 
                        type="search"
                        placeholder="Type the restaurant..."
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                <div className="search-img">
                    <img height="300px" width="300px" src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="table"></img>
                </div>
            </div>
            <div className="business-list">
                Restaurant Listing Here
            </div>
            <div className="business-list">
                Restaurant Listing Here
            </div>
            <div className="business-list">
                Restaurant Listing Here
            </div>
            <div className="business-list">
                Restaurant Listing Here
            </div>
        </div>
    )
     
}

export default Search

//get map to work, search box to work

//add item to work, business to display

//array of all items pushed and displayed on Profile

//display


// const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)
