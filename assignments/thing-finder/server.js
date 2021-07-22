const express = require("express")
const app = express()


app.use(express.json()) //middleware

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.get("/inventory", (req, res) => {
    res.send(inventoryItems)
})


app.get("/inventory/search/type", (req, res) => {
    const food = req.query.type
    const filteredType = inventoryItems.filter(item => item.type === food)
    res.send(filteredType)
})

app.post("/inventory", (req, res) => {
    const newItem = req.body
    inventoryItems.push(newItem)
    console.log("Post is working")
    res.send(`Successfully added ${newItem.name} to the database!`)
})



app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})

