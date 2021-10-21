import React, { useState, useContext } from "react"
import axios from "axios"
import {BountyContext} from "./BountyContext"

export default function Form(props) {
    const {getBounties, setBounties, bounties, toggleForm, editBounty, showForm, shouldThingEdit} = useContext(BountyContext)
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || "",
        bountyAmount: props.bountyAmount ||  "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log(inputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (showForm===false) {
            addBounty(inputs, props._id)
            setInputs(initInputs)
            getBounties()}
        else {
            editBounty(inputs, props._id)
            setInputs(initInputs)
            getBounties()}
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

  

    return (
        <form onSubmit={handleSubmit}>
            Add New Bounty 
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="Type the First Name"
            />
             <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Type the Last Name"
            />
            <select onChange={handleChange} value={inputs.living} name="living">
                <option >Alive?</option>
                <option value="Living">Living</option>
                <option value="Dead">Dead</option>
            </select>
            <select onChange={handleChange} value={inputs.type} name="type">
                <option>Jedi or Sith?</option>
                <option value="jedi">Jedi</option>
                <option value="sith">Sith</option>
            </select>
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Enter Bounty Amount"
            />
            <button onClick={() => editBounty(props._id)}>Submit</button> 
        </form>
    )
}
