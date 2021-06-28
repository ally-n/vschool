//    Need to do: handleSubmit, clear the form, context, edit/delete, display

import React, {useState} from "react"
import axios from "axios"

function Form() {
    const [inputData, setInputData] = useState({title: "", description: "", imgUrl: ""})

    function handleChange(e) {
        setInputData({...inputData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://api.vschool.io/ally_n/thing/", inputData)
        .then((res)=> {
            console.log(res)
            console.log(res.data)
            refreshPage()
        })
        .catch((err) => {
            console.log(err)
        })
   }

   function refreshPage() {
        window.location.reload(false);
    }

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

export default Form
