const express = require("express")
const app = express()
const { v4: uuid } = require("uuid")

app.use(express.json())

const todos = [
    {
        name: "Todo Express",
        description: "Finish hard coding the items in the list",
        completed: true,
        _id: uuid()
    },
    {
        name: "Bounty Hunter",
        description: "Work on Front End and connect back end to it",
        completed: false,
        _id: uuid()
    },
    {
        name: "Portfolio",
        description: "Map out design, switch over to react & java-fy it",
        completed: false,
        _id: uuid()
    },
    {
        name: "Crud Store",
        description: "Read wtf the assignment is",
        completed: false,
        _id: uuid()
    }
]

app.get("/todos", (req, res) => {
    console.log("get all todos")
    res.send(todos)
})

app.get("/todos/:todoId", (req, res) => {
    console.log("get single todo")
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

app.post("/todos", (req, res) => {
    console.log("post request")
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send("Successfully added a new todo!")
})

app.put("/todos/:todoId", (req, res) => {
    console.log("put request")
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

app.delete("/todos/:todoId", (req, res) => {
    console.log("delete request")
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted your todo item")
})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})
