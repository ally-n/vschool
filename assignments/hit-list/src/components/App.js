import React from "react"
import Header from "./Header"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hitList: [],
            checked: false
    }
    this.handleChange = this.handleChange.bind(this)
}
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => (response.json()))
        .then(data => {
            this.setState({
                hitList: data,
                checked: ""
            })
        })
    }

    handleChange() {
        this.setState(prevState => ({
                checked: !prevState
        }))
        console.log("working")
        console.log()
    }

    render() {
        const completedStyle = {
            fontStyle: "italic", 
            textDecoration: "line-through"
        }
        const displayList = this.state.hitList.map(person => (
                <div className="name">
                    <img src={person.image} alt={person.name} width="250px" height="250px"/>   
                    <h1 className="nameText" style={person.checked ? {completedStyle} : null} >{person.name}</h1> 
                    <input checked={person.checked} id="checkbox" type="checkbox" onChange={this.handleChange}></input>
                </div>
        ))
        return (
            <div>
                <Header />
                <div className="container">
                    {displayList}
                </div>
            </div>

        )
    }
}

export default App
