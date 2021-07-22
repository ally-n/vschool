const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

app.use("/items", require("./itemRouter.js"))

app.use("/items", (req, res, next) => {
    console.log("middleware was executed")
    next()
})

app.listen(3000, () => {
    console.log("The server is running on Port 3000")
}) 
