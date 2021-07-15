import React, { useContext } from "react"
import AllyImg from "./ally.JPG"
import { MenuContext } from "./MenuContext"


function Profile() {
    const {addItem, ratingArray} = useContext(MenuContext)

    const renderedRatingArr = ratingArray.map(item => (
        <div>
             <div className="review-list">
                 <div className="review-text">
                     <p style={{fontSize:35}}>{item.name}</p>
                     <p>{item.text}</p>
                     <p>{item.review}</p>
                 </div>
                 <img className="review-img" src={item.photo} alt="waffle"></img>
             </div>
             <br/>
        </div>
     ))
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
            <button>Add Item</button>
            </div>
            <div className="profile-img">
                <img height="300px" width="300px" src={AllyImg} alt="ally nickell"></img>
            </div>
            
        </div>
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
