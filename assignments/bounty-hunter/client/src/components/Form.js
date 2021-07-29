import React, { useState } from "react"
import axios from "axios"

export default function Form() {
    const initInputs = {
        firstName:"", 
        lastName:"",
        living: true,
        bountyAmount: "",
        type: ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log()
        addBounty(inputs)
        setInputs(initInputs)
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => console.log(res))
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
            {/* <select>
                <option>Alive?</option>
                <option value={inputs.living="false"} onChange={handleChange}>Living</option>
                <option value={inputs.living="true"} onChange={handleChange}>Dead</option>
            </select>
            <select>
                <option>Jedi or Sith?</option>
                <option value={inputs.type="Jedi"} onChange={handleChange}>Jedi</option>
                <option value={inputs.type="Sith"} onChange={handleChange}>Sith</option>
            </select> */}
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Enter Bounty Amount"
            />
            <button>Add Bounty</button>
        </form>
    )
}
