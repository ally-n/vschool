import React, { useContext } from 'react';
import { MenuContext } from "./MenuContext"
 

//form working, stars showing up, restaurant name on profile reviews

function ReviewForm() {
    const {addedItem, setAddedItem} = useContext(MenuContext)

 
function handleChange(e) {
    setAddedItem({[e.target.name]:e.target.value})
}

function handleSubmit(e) {
    e.preventDefault()
    setAddedItem(addedItem)
    console.log("item has been added")
}


    return (
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
    )
}


export default ReviewForm