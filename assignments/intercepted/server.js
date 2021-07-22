const express = require("express")
const app = express()
//uuid

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("middleware was executed")
    next()
})

