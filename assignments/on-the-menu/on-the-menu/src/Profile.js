import React from "react"
import AllyImg from "./ally.JPG"

function Profile() {
    return (
        <div>
            <div className="profile-body">
                <div className="profile-box">
                    <div className="profile-name">
                        Ally Nickell
                    </div>
                    <div className="text-box">
                        17 Reviews
                    </div>
                <button>Add Item</button>
                </div>
                <div className="profile-img">
                    <img height="300px" width="300px" src={AllyImg}></img>
                </div>
               
            </div>
        What have I ordered?
        <div className="profile-list">
            Restaurant Review Here
        </div>
        
    </div>
        
    ) 
}

export default Profile
