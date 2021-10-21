const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use("/inventory", require("./routes/inventoryRouter"))

mongoose.connect('mongodb://localhost:27017/inventories', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        
    },
    () => console.log('Connected to the Database')
)

app.listen(8000, ()=>{
    console.log("The server is running on port 8000")
  })
  
