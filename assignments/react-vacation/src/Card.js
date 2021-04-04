import React from "react"

function Card(props) {
    return (
        <div className="card" >
            <h1>Place: {props.place} </h1>
            <h2>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} </h2>
            <h2>Time To Go: {props.timeToGo} </h2>
        </div>
    )
}

export default Card
