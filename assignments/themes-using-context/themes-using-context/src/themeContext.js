import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "flowerA",
        showMenu: false
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "flowerA" ? "flowerB" : "flowerA"
                //could do a randomizer with 5 different themes!!!
            }
        })
    }
    showMenuNow = (e) => {
        e.preventDefault() 
        console.log("show menu running")
        this.setState({
            showMenu: true
        })
    }

    closeMenuNow () {
        this.setState({showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenuNow)
        })
    }

    render() {
        return (
            <Provider value = {{theme: this.state.theme, showMenu: this.state.showMenu, showMenuNow: this.showMenuNow, closeMenuNow: this.closeMenuNow,  toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}