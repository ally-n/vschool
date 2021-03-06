import React, { useContext, useState } from "react"
import {MenuContext} from "./MenuContext"
import ReviewForm from "./ReviewForm"

function Business() {
const {businessID, businessName, businessIMG, city, ratingArray, toggleForm, showForm, addedItem, setAddedItem} = useContext(MenuContext)

const renderFilteredArr = ratingArray.filter(function(business) {
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

    function handleChange(e) {
        setAddedItem({[e.target.name]:e.target.value})
        setAddedItem(e.id= {businessID})
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        renderFilteredArr.push(addedItem)
        console.log("item has been added")
        console.log(renderFilteredArr)
    }
    
    return (
        <div>
             <div className="business-listing">
                <div className="business-listing-img">
                    <img src={businessIMG} alt="restaurant" height="300px" width="300px"></img>  
                </div>
                <div  className="business-listing-info">
                    <h3>{businessName}</h3>
                    <h3>{city}</h3>
                    <button onClick={toggleForm}>Add Item</button>
                </div>
            </div>
            {showForm ? 
            <div className="add-item-form-div">
                Add Item
                <form onSubmit={handleSubmit} className="add-item-form">
                    <input
                            value={addedItem.name}
                            name="name" 
                            type="text"
                            placeholder="Type the restaurant name"
                            onChange={handleChange}
                    />
                    <input
                            value={addedItem.text}
                            name="text" 
                            type="text"
                            placeholder="What did you get? Any other comments?"
                            onChange={handleChange}
                    />
                    <input
                            value={addedItem.review}
                            name="review" 
                            type="number"
                            placeholder="Rate 1-5 Stars"
                            onChange={handleChange}
                    />
                    <input
                            value={addedItem.photo}
                            name="photo" 
                            type="text"
                            placeholder="Insert Image URL"
                            onChange={handleChange}
                    />
                    <button>Submit Review</button>
                </form>
            </div>
            : null}
            <div className="question">
               <a> What have I ordered here?</a>
            </div>
          
            <div>
                <div >
                    {renderFilteredArr}
               </div>
            </div>
        </div>  
    
    ) 
}

export default Business