import React, { useContext } from "react"
import axios from "axios"
import {MenuContext} from "./MenuContext"
import xtype from 'xtypejs'

function Search(props) {
    const {token, searchResults, setSearchResults, businessName, setBusinessName} = useContext(MenuContext)
    
    const getData = () => {
         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/gR9DTbKCvezQlqvD7_FzPw`, {
        headers: {
            Authorization: `Bearer ${token}`
            },
        params: {
            term: 'restaurants'
            }
        })
        .then(res => {
            setSearchResults(res.data)
            console.log(res.data)
            setBusinessName(res.data.name)
            console.log(res.data.name)
        })
        .catch(err => console.log(err))

    }
  

  function handleSubmit(e) {
        e.preventDefault()
        getData()
  }
  
//   let mappedData = searchResults.map(item => {
//     return (
//         <h1>{item.name}</h1>
//     )
// })



    
    return (
        <div>
            {/* {mappedData} */}
            <div className="search-body">
                <form onSubmit={handleSubmit}>
                    SEARCH HERE
                    <input
                        type="search"
                        placeholder="Type the restaurant..."
                        name="search" 
                    />
                    <button type="submit">Search</button>
                </form>
                <div className="search-img">
                    <img height="300px" width="300px" src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="table"></img>
                </div>
            </div>
            <div className="business-list">
                {businessName}
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