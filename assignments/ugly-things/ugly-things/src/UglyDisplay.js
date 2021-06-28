import React, { useEffect, useState } from "react"
import axios from "axios"
import './index.css';


function UglyDisplay() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.vschool.io/ally_n/thing")
            setData(result.data)
            console.log("the fetchData function is working")
        }
        fetchData()
    }, [])

    return (
        <div>
            {data.map((item) => (
            <div>
                <h1 key={item._id}>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl} alt={item.title} height="300px" width="300px"/>
                <button>Edit</button> 
                <button>Delete</button>
            </div>
            ))}
        </div>
    )
}
export default UglyDisplay

//1- Write context hook, map things out, move things around for Context
//2- Delete button, edit button
//3- Display

// function UglyDisplay() {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios("https://api.vschool.io/ally_n/thing")
//             let newList = result.data
//             setData(newList)
//             console.log(newList, "is newlist")
//             console.log(data, "is data")
//             console.log("the fetchData function is working")
//         }
//         fetchData()
//     }, [])