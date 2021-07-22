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

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    console.log("Post is working")
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

