import React, { useState, useContext } from "react"
import axios from "axios"
import {BountyContext} from "./BountyContext"

export default function Form(props) {
    const {getBounties, setBounties, bounties, toggleForm, editBounty, showForm} = useContext(BountyContext)
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "",
        living: props.living || true,
        bountyAmount: props.bountyAmount ||  "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (showForm===false) {
            addBounty(inputs, props._id)
            setInputs(initInputs)
            getBounties()}
        else {editBounty(inputs, props._id)
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
            {/* <select value={inputs.living}>
                <option >Alive?</option>
                <option onChange={handleChange}>Living</option>
                <option onChange={handleChange}>Dead</option>
            </select>
            <select value={inputs.type}>
                <option>Jedi or Sith?</option>
                <option onChange={handleChange}>Jedi</option>
                <option onChange={handleChange}>Sith</option>
            </select> */}
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Enter Bounty Amount"
            />
            <button onClick={() => editBounty(props._id)}>{props.btnText}</button>
            <button onClick={() => toggleForm()}>{props.cancelBtn}</button>
        </form>
    )
}
