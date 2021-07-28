import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./Bounty"

export default function App() {
    const [bounties, setBounties] = useState([])
    
    useEffect(() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
                console.log("get request working")
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {bounties.map(bounty => <Bounty {...bounties} key={bounty._id}/>)}
        </div>
    )

}

