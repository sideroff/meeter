import React from 'react'
import { connect } from 'react-redux'

import Todos from './Todos.jsx'

function mapDispatchToProps(dispatch) {
    return {
        AddTodo: function (id, text) {
            console.dir(dispatch)
            dispatch({ type: "ADD_TODO", payload: { id: id, text: text } })
        }
    }
}

class App extends React.Component {
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
                <Todos />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(App)