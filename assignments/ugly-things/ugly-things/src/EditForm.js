import React, { useContext } from "react"
import { UglyThingsContext } from "./UglyThingsContext"


function EditForm(props) {
    const {inputData, handleSubmit, handleChange} = useContext(UglyThingsContext)
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
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default EditForm
