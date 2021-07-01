import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "flowerA"
    }

    onChange = e => {
        const valueSelected= e.target.value
        console.log(valueSelected)
        this.setState(prevState => { 
            return { 
                theme : valueSelected}
            })
     }

    render() {
        return (
            <Provider value = {{theme: this.state.theme, onChange: this.onChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}