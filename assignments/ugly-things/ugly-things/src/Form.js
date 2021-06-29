//    Need to do: edit/delete, display

import React, { useContext } from "react"
import { UglyThingsContext } from "./UglyThingsContext"


function Form(props) {
    const {inputData, handleSubmit, handleChange, shouldEdit, editUgly} = useContext(UglyThingsContext)
    console.log()
    return (
        <div>
            Gimme the Uglies
            <form>
                <input 
                    onChange={handleChange} 
                    type="Text" 
                    placeholder="Title" 
                    name="title" 
                    value={inputData.title} 
                />
                <input 
                    onChange={handleChange} 
                    type="Text" 
                    placeholder="Description" 
                    name="description" 
                    value={inputData.description}  
                />
                <input 
                    onChange={handleChange} 
                    type="Text" 
                    placeholder="Image URL" 
                    name="imgUrl" 
                    value={inputData.imgUrl}  
                />
                {shouldEdit ? 
                <button onClick={handleSubmit}>Submit</button>
                : <button onClick={console.log("weird button was pushed")} >Edit</button>
                }
                
            </form>
        </div>
    )
}

export default Form

// onClick={editUgly(inputData._id)
