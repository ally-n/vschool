import React, { useContext, useState } from "react"
import {MenuContext} from "./MenuContext"

function Business(props) {
const {token, 
    businessID, 
    businessName, 
    businessIMG, 
    setBusinessIMG, 
    city, 
    addItem, 
    setCity, 
    setBusinessName, 
    ratingArray, 
    newArray} = useContext(MenuContext)
const [filteredArr, setFilteredArr] = useState()



const renderedFilteredArr = ratingArray.filter(function(business) {
    return business.id === businessID}).map(function (business) {
        return (
            <div>
                <div className="review-list">
                    <div className="review-text">
                        <p>{business.text}</p>
                        <p>{business.review}</p>
                    </div>
                    <img className="review-img" src={business.photo} alt="waffle"></img>
                </div>
                <br/>
            </div>
        )
      
    })

    return (
        <div>
             <div className="business-listing">
                <div className="business-listing-img">
                    <img src={businessIMG} alt="restaurant" height="300px" width="300px"></img>  
                </div>
                <div  className="business-listing-info">
                    <h3>{businessName}</h3>
                    <h3>{city}</h3>
                    <button>Add Item</button>
                </div>
            </div>
            <div className="question">
               <a> What have I ordered here?</a>
            </div>
            <div>
                <div >
                    {renderedFilteredArr}
               </div>
            </div>
        </div>  
        
    ) 
}

export default Business