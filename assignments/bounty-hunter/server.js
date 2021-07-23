const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json()) //looks for request body and turns it into req.body

const bounties = [
    {
     firstName: "Han",
     lastName: "Solo",
     living: false,
     bountyAmount: 224190,
     type: "Jedi",
     _id: uuidv4()
    },
    {
    firstName: "Leia",
     lastName: "Organa",
     living: true,
     bountyAmount: 10000000,
     type: "Jedi",
     _id: uuidv4()
    },
    {
    firstName: "Darth",
    lastName: "Bane",
    living: true,
    bountyAmount: 350002,
    type: "Sith",
    _id: uuidv4()
   },
   {
    firstName: "Darth",
     lastName: "Maul",
     living: false,
     bountyAmount: 10,
     type: "Sith",
     _id: uuidv4()
    }
]

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.get("/bounties/:bountyId", (req, res) => {
    console.log("get single bounty is working")
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    console.log("Post is working")
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

app.put("/bounties/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
    console.log("change bounty WORKED")
})

app.delete("/bounties/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted your bounty!`)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

