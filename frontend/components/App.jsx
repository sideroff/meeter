import React from 'react'

import Todos from './Todos.jsx'
import Header from './Header.jsx'

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Todos />
            </div>
        )
    }
}