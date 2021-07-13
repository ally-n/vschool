import React, { useContext, useState } from "react"
import axios from "axios"
import {MenuContext} from "./MenuContext"

function Business(props) {
    const {token, businessID, businessName, businessIMG, setBusinessIMG, setBusinessName} = useContext(MenuContext)
    const [city, setCity] = useState("")

    const getBusiness = () => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${businessID}`, { //eventually have business ID here
       headers: {
           Authorization: `Bearer ${token}`
           },
       params: {
           term: 'restaurants'
           }
       })
       .then(res => {
           console.log(res.data)
           setBusinessName(res.data.name)
           setBusinessIMG(res.data.image_url)
           setCity(res.data.location.city)
       })
       .catch(err => console.log(err))
   }
    console.log(businessID)
   getBusiness()

    return (
        <div>
             {/* <div className="business-listing">
                <div className="business-listing-img">
                    <img src={businessIMG} alt="restaurant" height="300px" width="300px"></img>  
                </div>
                <div  className="business-listing-info">
                    <h3>{businessName}</h3>
                    <h3>{city}</h3>
                </div>
            </div> */}
            {/* <div className="business-listing">
                <div className="business-listing-img">
                    <img src="https://s3-media4.fl.yelpcdn.com/bphoto/8713LkYA3USvWj9z4Yokjw/o.jpg" alt="restaurant" height="300px" width="300px"></img>  
                </div>
                <div  className="business-listing-info">
                    <h3>North India Restaurant</h3>
                    <h3>San Francisco</h3>
                </div>
            </div> */}
            <div className="question">
            What have I ordered here?
            </div>
            <div>
                <div className="review-list">
                Food Review Here
                </div>
                <div className="review-list">
                Food Review Here
                </div>
                <div className="review-list">
                Food Review Here
                </div>
            </div>
        </div>  
        
    ) 
}

export default Business