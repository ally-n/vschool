import React, {Component} from 'react'
import CSS from "./index.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      nameList: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleClick(event) {
    event.preventDefault()
    const newName = this.state.firstName
    this.setState(prevState => {
      return ({
        firstName: " ",
        nameList: [...prevState.nameList, newName]
      })
    })
  }

  render() {
    const newArray = this.state.nameList.map(name => <li>{name}</li>)
    return (
      <div>
            <p>{this.state.firstName}</p>
        <form>
            <input 
              type="text"
              value={this.state.name}
              name="firstName"
              placeholder="Name Here"
              onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>Add to List!</button>
            <ol>
                {newArray}
            </ol>
        </form>
      </div>
      
    )
  }
}

export default App;
