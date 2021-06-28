import React, { useContext } from "react"
import {UglyThingsContext} from "./UglyThingsContext"
import './index.css';


function UglyDisplay() {
   const {data, deleteUgly, shouldThingEdit} = useContext(UglyThingsContext)

   return (
        <div>
            {data.map((item) => (
            <div>
                {console.log(item._id)}
                <h1 key={item._id}>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl} alt={item.title} height="300px" width="300px"/>
                <button onClick={shouldThingEdit}>Edit</button> 
                <button onClick={() => deleteUgly(item._id)} >Delete</button>
            </div>
            ))}
        </div>
        
    )
}
export default UglyDisplay
