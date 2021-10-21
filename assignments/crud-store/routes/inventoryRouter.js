const express = require("express") 
const inventory = require("../models/inventory.js")
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//get all
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((inventory) => {
    return res.status(200).send(inventory)
  })
  
})

//get one 
inventoryRouter.get("/:inventoryId", (req, res, next) => {
  const inventoryId = req.params._id
  const foundInventory = Inventory.find(item => item._id === inventoryId)
  return res.status(200).send("One item retrieved")
})

//post 
inventoryRouter.post("/", (req, res, next) => {
  const newInventory = new Inventory(req.body)
  newInventory.save((savedItem) => {
    return res.status(200).send(savedItem)
  })
})

//put
// inventoryRouter.put("/:inventoryId", (req, res, next) => {
//   const inventoryId = req.params._id
//   const updatedItem = req.body
//   const inventoryIndex = Inventory.findIndex(item => item._id === inventoryId)
//   const updatedInventory = Object.assign(inventory[inventoryIndex], updatedItem)
//   return res.status(201).send(updatedInventory)
// })

inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Inventory.findOneAndUpdate(
    {_id: req.params.inventoryId},
    req.body,
    {new: true},
    (updatedItem) => {
      return res.status(201).send(updatedItem)
    }
  )
})

//delete
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
  const inventoryId = req.params._id
  const inventoryIndex = inventory.findIndex(item => item._id === inventoryId)
  inventory.splice(inventoryIndex, 1)
  return res.send("Successfully deleted item!")
})

module.exports = inventoryRouter
