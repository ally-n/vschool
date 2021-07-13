import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import {MenuContext} from "./MenuContext"

function Search(props) {
    const {token, searchResults, setSearchResults, businessID, setBusinessID} = useContext(MenuContext)
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
            console.log(searchResults) //works sometimes
            console.log(res.data) //works
            console.log(res.data.businesses[0].name)  //works
            setMappedData(res.data.businesses.map(item => {
                {setBusinessID(item.id)}
                return (
                    <div className="business-list" >
                         <img src={item.image_url} alt={item.name} height="300px" width="300px" style={{borderRadius:7}}></img>
                        <div className="business-list-text">
                            <Link to="/business">{item.name}</Link>
                            <p key={item.id}>{item.location.city}</p>
                        </div>
                    </div>
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

  //create an onClick function that sets the businessID to match the one that was clicked 
  //work on add item form
  //create review array -- Can I create my own API or how should I store my array? local storage?
    
    return (
        <div>
            
            <div className="search-body">
                <form onSubmit={(e) => {
                    handleSubmit(e, businessID)
                }}>
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
            <div className="business-array-display">
                {mappedData}
            </div>
        </div>
    )
     
}

export default Search