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
        setShowForm(!showForm)
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
            toggleForm()
            })
    }

return (
    <BountyContext.Provider value={{getBounties, setBounties, toggleForm, editBounty, bounties, showForm}}>
        {props.children}
    </BountyContext.Provider>


)}


export {BountyContextProvider, BountyContext}