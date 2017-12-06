import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return { todos: state.todos , test: state.test}
}

class Todos extends React.Component {
    RenderTodos(todos) {
        return <ul>{this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
        })}</ul>
    }

    RenderEmptyTodoContainer() {
        return <div>You don't have any todos. Add some!</div>
    }

    render() {
        if (this.props.todos && this.props.todos.length > 0) {
            return this.RenderTodos(this.props.todos)
        }
        return this.RenderEmptyTodoContainer()
    }
}

export default connect(mapStateToProps)(Todos)