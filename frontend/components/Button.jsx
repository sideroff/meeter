import React from 'react'

class Button extends React.Component {

    render() {
        return (
            <button onClick={() => {
                this.props.AddTodo(this.index++, "test")
            }}>add todo</button>
        )
    }
}
