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
        console.log("handleSubmit")
        e.preventDefault()
        axios.post("https://api.vschool.io/ally_n/thing/", inputData)
        .then((res)=> {
            console.log(res)
            refreshPage()
        })
        .catch(error => console.log(error)) 
   }

   function refreshPage() {
        window.location.reload(false);
    }

    function deleteUgly(id) {
        console.log("deleteUgly")
        console.log(id)
        axios.delete("https://api.vschool.io/ally_n/thing/" + id)
        .then(res => {
            console.log(res)
            console.log("item was deleted")
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function editUgly(id) {
        console.log("editUgly")
        console.log(id)
        axios.put("https://api.vschool.io/ally_n/thing/" + id)
        .then(res => {
            console.log(res)
            console.log("item was edited")
            refreshPage()
        })
        .catch(error => console.log(error))
    }

    function shouldThingEdit() {
        console.log("shouldThingEdit")
        setShouldEdit(prev => !prev)
        console.log(shouldEdit)
    }

    useEffect(() => {
        console.log("useEffect")
        const fetchData = async () => {
            const result = await axios("https://api.vschool.io/ally_n/thing")
            setData(result.data)
            console.log(result.data)
            console.log("the fetchData function is working")
        }
        fetchData()
    }, [])

    return (
       <UglyThingsContext.Provider value={{inputData, data, shouldEdit, handleSubmit, handleChange, deleteUgly, editUgly, shouldThingEdit}}>
           {props.children}
       </UglyThingsContext.Provider>
    )

}

export {UglyThingsContextProvider, UglyThingsContext}