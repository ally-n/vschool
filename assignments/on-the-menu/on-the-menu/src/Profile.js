import React, { useContext } from "react"
import AllyImg from "./ally.JPG"
import { MenuContext } from "./MenuContext"

function Profile() {
    const {ratingArray, toggleForm, showForm, addedItem, setAddedItem} = useContext(MenuContext)

    const renderedRatingArr = ratingArray.map(item => (
        <div>
             <div className="review-list">
                 <div className="review-text">
                     <p style={{fontSize:35}}>{item.name}</p>
                     <p>{item.text}</p>
                     <p>Rating: {item.review}</p>
                 </div>
                 <img className="review-img" src={item.photo} alt="food"></img>
             </div>
             <br/>
        </div>
     ))


    function handleChange(e) {
        setAddedItem({[e.target.name]:e.target.value})
        //not taking all of the items and adding them
        
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(addedItem)
        renderedRatingArr.push(addedItem)
        console.log("item has been added")
        toggleForm()
        //not sure how to make it re-render the mapped array
    
    }



    return (
    <div>
        <div className="profile-body">
            <div className="profile-box">
                <div className="profile-name">
                    Ally Nickell
                </div>
                <div className="text-box">
                    {ratingArray.length} Reviews
                </div>
                <button onClick={toggleForm}>Add Item</button>
            </div>
            <div className="profile-img">
                <img height="300px" width="300px" src={AllyImg} alt="ally nickell"></img>
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
            What have I ordered?        
        </div>
       
        <div>
                {renderedRatingArr}

        </div>
     
    </div>
        
    ) 
}

export default Profile

//addItem not re-rendering, message Maira, study