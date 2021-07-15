import React, { useContext } from 'react';
import { MenuContext } from "./MenuContext"
 

//form working, stars showing up, restaurant name on profile reviews

function AddItemForm() {
    // documentData
    const {addedItem, setAddedItem} = useContext(MenuContext)

 
function handleChange(e) {
    setAddedItem({[e.target.name]:e.target.value})
}

function handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem(addedItem,JSON.stringify(addedItem))
}
 
function getArray() {
   const itemRetrieved = (JSON.parse(localStorage.getItem(addedItem)))
 
    if (localStorage.getItem(addedItem)) {
        setAddedItem({
           text: addedItem.text, 
           rating: addedItem.rating, 
           photo:addedItem.photo 
    })
} else {
    setAddedItem({
        text: '',
        rating: '',
        photo: ''
    })
}
}
//  getArray()

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>What did you get? Did you like it?</label>
                    <input type="text" name="text" className="form-control" value={addedItem.text} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="number" name="rating" className="form-control" value={addedItem.rating} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Photo URL</label>
                    <input type="text" name="photo" className="form-control" value={addedItem.photo} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            <h1>{addedItem.text}</h1>
        </div>
    )
}


export default AddItemForm







// import React, { useContext } from "react"


// function AddItemForm(props) {
//     console.log("add item was pushed")
//     return (
//      <form>
//          ADD ITEM
//          <input
//              // value={search}
//              name="search" 
//              type="search"
//              placeholder="Type the restaurant..."
//              // onChange={handleChange}
//          />
//          <button type="submit">Search</button>
//      </form>
//     )}

//     export default AddItemForm