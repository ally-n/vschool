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

app.get("/bounties", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

app.get("/bounties/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    if(foundBounty) {
        const error = new Error("This is not the bounty you are looking for")
        res.status(500)
        return next(error)
    }
    return res.status(200).send(foundBounty)
})

app.post("/bounties", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

app.put("/bounties/:bountyId", (req, res, next) =>{
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

app.delete("/bounties/:bountyId", (req, res, next) =>{
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedBounty)
        }
    )
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

