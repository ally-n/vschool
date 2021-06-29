import React, { useContext } from "react"
import {UglyThingsContext} from "./UglyThingsContext"
import EditForm from "./EditForm"
import Form from "./Form"
import './index.css';


function UglyDisplay() {
   const {data, deleteUgly, editUgly, shouldEdit, shouldThingEdit} = useContext(UglyThingsContext)

   return (
       <div>
        {shouldEdit ? ( 
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
            </div>)
    :
       (<div>
            {data.map((item) => (
            <div>
                {console.log(item._id)}
                <h1 key={item._id}>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl} alt={item.title} height="300px" width="300px"/>
                {/* <button>Edit</button>  */}
                <button onClick={shouldThingEdit}>Cancel</button>
                <Form id={item._id}/>
            </div>
            ))}
        </div>)}
       </div>
    
    )
}
export default UglyDisplay

//Need to figure out how to get ID to correlate to correct axios.put, don't map through all of the edits, correlate correct value places