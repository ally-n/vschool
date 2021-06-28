import React from "react"
import Card from "./Card.js"
import VacationData from "./VacationData"

function App() {
    const vacayData = VacationData.map(card => <Card key={card.id} allplaces={card.place} price={card.price} timeToGo={card.timeToGo} />)
  return (
        <div className="container">
            {vacayData}
        </div>
  ) 
}

export default App
