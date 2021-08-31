import React, { useState } from "react"
import axios from "axios"
const BountyContext = React.createContext()

function BountyContextProvider(props) {
    const [bounties, setBounties] = useState([])
    const [showForm, setShowForm] = useState(false)

    
       
    function getBounties() {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function toggleForm() {
        console.log(showForm)
        console.log("toggling form")
        setShowForm(!showForm)
    }

    function shouldThingEdit(id) {
        const newData = bounties.map(item => item._id === id? {...item, showForm : !item.showForm}:item) 
        toggleForm()
        console.log("thing should or should not be edited")
        return setBounties(newData)
     }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prev => prev.map(bounty => bounty._id !== bountyId ? bounty : res.data))
                toggleForm()
            })
            .catch(err => console.log(err))
    }

return (
    <BountyContext.Provider value={{getBounties, setBounties, toggleForm, editBounty, shouldThingEdit, bounties, showForm}}>
        {props.children}
    </BountyContext.Provider>


)}


export {BountyContextProvider, BountyContext}