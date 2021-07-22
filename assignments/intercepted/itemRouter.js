const express = require("express")
const itemRouter = express.Router()
const { v4: uuidv4 } = require('uuid')
 
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    }
]

itemRouter.get("/", (req, res) => {
    res.send(inventoryItems)
    console.log(inventoryItems)
})

itemRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = inventoryItems.find(item => item._id === itemId)
    res.send(foundItem)
    console.log(foundItem)
})

module.exports = itemRouter