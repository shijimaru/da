import React, { Component } from "react"
import { List } from "../component/List"

class Main extends Component() {

    state = {
        list: [],
    }

    ComponentDidMount (){
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=86b53991&s=marvel')
        .then(res => res.json())
        .then(data => this.setState ({list: data.Search}))
    }

    render() {

        const {list} = this.state

        return (
            <main className="content">
                <List list={this.state.list} />
            </main>
        )
    }
}

export { Main }