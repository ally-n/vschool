import React, { useState, useEffect } from "react"
import axios from "axios"
const UglyThingsContext = React.createContext()

function UglyThingsContextProvider(props) {
    const [inputData, setInputData] = useState({title: "", description: "", imgUrl: ""})
    const [data, setData] = useState([])
    const [shouldEdit, setShouldEdit] = useState("false")

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
        .catch(error => console.log(error))
        
   }

   function refreshPage() {
        window.location.reload(false);
    }

    function deleteUgly(id) {
        console.log(id)
        axios.delete("https://api.vschool.io/ally_n/thing/" + id)
        .then(res => {
            console.log(res)
            console.log("item was deleted")
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function shouldThingEdit(id) {
        console.log(shouldEdit)
        setShouldEdit(prevshouldEdit => prevshouldEdit ===  shouldEdit ? !shouldEdit : shouldEdit)
        console.log(shouldEdit)
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.vschool.io/ally_n/thing")
            setData(result.data)
            console.log(result.data)
            console.log("the fetchData function is working")
        }
        fetchData()
    }, [])

    return (
       <UglyThingsContext.Provider value={{inputData, data, handleSubmit, handleChange, deleteUgly, shouldThingEdit}}>
           {props.children}
       </UglyThingsContext.Provider>
    )

}

export {UglyThingsContextProvider, UglyThingsContext}