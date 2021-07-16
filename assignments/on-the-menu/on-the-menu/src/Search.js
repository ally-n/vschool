import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import {MenuContext} from "./MenuContext"

function Search(props) {
    const {token, setSearchResults, getBusiness, businessID} = useContext(MenuContext)
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
            setMappedData(res.data.businesses.map(item => {
                return (
                    <div className="business-list" >
                         <img src={item.image_url} alt={item.name} height="150px" width="150px" style={{borderRadius:7}}></img>
                        <div key={item.id} className="business-list-text">
                            <Link to="/business"  onClick={() => getBusiness(item.id)}>{item.name} </Link>
                            <p >{item.location.city}</p>
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

    return (
        <div>
            
            <div className="search-body">
                <form className="search-form" onSubmit={(e) => {
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