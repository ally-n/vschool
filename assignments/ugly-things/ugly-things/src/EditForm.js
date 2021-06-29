import React, { useContext } from "react"
import { UglyThingsContext } from "./UglyThingsContext"


function EditForm(props) {
    const {inputDataEdit, handleSubmitEdit, handleChangeEdit} = useContext(UglyThingsContext)
    return (
        <div>
            Edit the Uglies
            <form>
                <input 
                    onChange={handleChangeEdit} 
                    type="Text" 
                    placeholder="Title" 
                    name="title" 
                    value={inputDataEdit.title} 
                />
                <input 
                    onChange={handleChangeEdit} 
                    type="Text" 
                    placeholder="Description" 
                    name="description" 
                    value={inputDataEdit.description}  
                />
                <input 
                    onChange={handleChangeEdit} 
                    type="Text" 
                    placeholder="Image URL" 
                    name="imgUrl" 
                    value={inputDataEdit.imgUrl}  
                />
                <button onClick={handleSubmitEdit}>Submit</button>
            </form>
        </div>
    )
}

export default EditForm
