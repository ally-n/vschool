import React, {Component} from 'react'
import Badge from "../components/Badge"

class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            firstName:"",
            lastName :"",
            email:"",
            birthPlace:"",
            phone:"",
            favFood:"",
            textBox:"",
            badgeArray: []
            }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
                const newBadge = {
                    name: `${this.state.firstName} ${this.state.lastName}`,
                    email: `${this.state.email}`,
                    birthPlace: `${this.state.birthPlace}`,
                    phone: `${this.state.phone}`,
                    favFood: `${this.state.favFood}`,
                    textBox: `${this.state.textBox}`,
                }
                this.setState(prevState => ({
                    firstName:"",
                    lastName :"",
                    email:"",
                    birthPlace:"",
                    phone:"",
                    favFood:"",
                    textBox:"",
                    badgeArray: [...prevState.badgeArray, newBadge]
                }
                ))
                document.getElementById("badgeForm").reset()
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render() {
        const badgeList = this.state.badgeArray.map((badge, index) => { 
            return <Badge 
                key={badge.index}
                name={badge.name}
                email={badge.email}
                birthPlace={badge.birthPlace}
                phone={badge.phone}
                favFood={badge.favFood}
                textBox={badge.textBox}
            />
        })
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="gridBox" id="badgeForm">
                    <input onChange={this.handleChange}
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    className="inputForm"
                    minlength="3"
                    required
                    />
                    <input onChange={this.handleChange}
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    className="inputForm"
                    minlength="3"
                    required
                    />
                    <input onChange={this.handleChange}
                    type="email"
                    value={this.state.email}
                    name="email"
                    required
                    placeholder="Email Address"
                    className="inputForm"
                    minlength="3"
                    required
                    />
                    <input onChange={this.handleChange}
                    type="text"
                    value={this.state.birthPlace}
                    name="birthPlace"
                    placeholder="Place of Birth"
                    className="inputForm"
                    minlength="3"
                    required
                    />
                    <input onChange={this.handleChange}
                    type="number"
                    value={this.state.phone}
                    name="phone"
                    placeholder="Phone Number"
                    className="inputForm"
                    minlength="7"
                    required
                    />
                    <input onChange={this.handleChange}
                    type="text"
                    value={this.state.favFood}
                    name="favFood"
                    placeholder="Favorite Food"
                    className="inputForm"
                    minlength="3"
                    required
                    />
                    <input onChange={this.handleChange} 
                    type="text"
                    value={this.state.textBox}
                    name="textBox"
                    placeholder="Tell us about yourself"
                    className="textBox"
                    minlength="3"
                    required
                    />
                    <button type="submit" id="submitBtn" onClick={this.handleSubmit}>Submit</button>
                </form>
                {badgeList}
            </div>   
        )
    }
}

export default App


// this.state.firstName.length > 3 &&
// this.state.lastName.length > 3 &&
// this.state.email.length > 3 &&
// this.state.birthPlace.length > 3 &&
// this.state.phone.length > 3 &&
// this.state.phone.type === "number" &&
// this.state.favFood.length > 3 &&
// this.state.textBox.length > 3 ) {