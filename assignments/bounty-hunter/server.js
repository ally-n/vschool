const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
const Bounty = require('./model/bounty.js')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountiesdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false,
},
() => console.log("Connected to the DB")
)

// const bounties = [
//     {
//      firstName: "Han",
//      lastName: "Solo",
//      living: false,
//      bountyAmount: 224190,
//      type: "Jedi",
//      _id: uuidv4()
//     },
//     {
//     firstName: "Leia",
//      lastName: "Organa",
//      living: true,
//      bountyAmount: 10000000,
//      type: "Jedi",
//      _id: uuidv4()
//     },
//     {
//     firstName: "Darth",
//     lastName: "Bane",
//     living: true,
//     bountyAmount: 350002,
//     type: "Sith",
//     _id: uuidv4()
//    },
//    {
//     firstName: "Darth",
//      lastName: "Maul",
//      living: false,
//      bountyAmount: 10,
//      type: "Sith",
//      _id: uuidv4()
//     }
// ]

app.get("/bounties", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
    res.status(200).send(bounties)
})

app.get("/bounties/:bountyId", (req, res, next) => {
    console.log("get single bounty is working")
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(foundBounty) {
        const error = new Error("This is not the bounty you are looking for")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

app.post("/bounties", (req, res, next) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    console.log("Post is working")
    res.status(201).send(newBounty)
})

app.put("/bounties/:bountyId", (req, res, next) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.status(201).send(updatedBounty)
    console.log("change bounty WORKED")
})

app.delete("/bounties/:bountyId", (req, res, next) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted your bounty!`)
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(3000, () => {
    console.log("The server is running on Port 3000")
})

