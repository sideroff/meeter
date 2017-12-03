import React from 'react'

import Todos from './Todos.jsx'

export default class App extends React.Component {
    constructor() {
        super()

        this.index = 0
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.AddTodo(this.index++, "test")
                }}>add todo</button>
                <Todos todos={this.props.todos} />
            </div>
        )
    }
}