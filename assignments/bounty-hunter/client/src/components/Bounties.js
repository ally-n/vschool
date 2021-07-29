import React, { useState, useEffect } from "react"
import axios from "axios"
import Form from "./Form"

export default function Bounties() {
    const [bounties, setBounties] = useState([])

    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const mappedBounties = bounties.map(bounty => {
        return (
            <div key={bounty._id}>
                <h1>{`${bounty.firstName}  ${bounty.lastName}`}</h1>
                <p>${bounty.bountyAmount}</p>
                <p>{bounty.living ? "Alive" : "Dead" }</p>
                <p>{bounty.type}</p>
            </div>
        )
    })

    return (
        <div>
            <Form />
           {mappedBounties}
        </div>
    )
}
