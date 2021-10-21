import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import Form from "./Form"
import {BountyContext} from "./BountyContext"

export default function Bounties() {
    const {getBounties, bounties, setBounties, showForm, toggleForm, shouldThingEdit, editBounty} = useContext(BountyContext)
    
    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }, [])
    
    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

   const mappedBounties = bounties.map(bounty => {
        return (
            bounty.showForm ?  (
            <div className="form-container" key={bounty._id}>
                <Form 
                    firstName={bounty.firstName}
                    lastName={bounty.lastName}
                    bountyAmount={bounty.bountyAmount}
                    living={bounty.living}
                    type={bounty.type}
                    _id={bounty._id}
                    btnText="Submit Edit"
                    cancelBtn="Cancel Edit"
                    editBounty={editBounty}  
                />
                <button onClick={() => shouldThingEdit(bounty._id)}>Cancel</button>
            </div>)
            : (
                <div key={bounty._id} className="bounty">
                    <h1>Name: {`${bounty.firstName}  ${bounty.lastName}`}</h1>
                    <p>Worth: ${bounty.bountyAmount}</p>
                    <p>Status: {bounty.living ? "Alive" : "Dead" }</p>
                    <p>Type: {bounty.type}</p>
                    
                    <button onClick={() => deleteBounty(bounty._id)} className="main-div2">Delete Bounty</button>
                    <button onClick={() => shouldThingEdit(bounty._id)}>Edit Bounty</button>
                   
                </div>)
        )
    })


    return (
        <div>
            <h1>BOUNTY HUNTER</h1>
            <Form />
            <div className="bounty-container">
                {mappedBounties}
            </div>
          
        </div>
    )
}
