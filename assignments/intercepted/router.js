const express = require("express")
const app = express()
//uuid
 


//get all
itemRouter.get("/", (req, res) => {
    res.send(movies)
})

//get one
itemRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

 //get by type 
itemRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

//delete
itemRouter.delete("/:movieID", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie.id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie!")
    })

//put

itemRouter.put("/:movieId", (req, res) =>{
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    req.send(updatedMovie)
})