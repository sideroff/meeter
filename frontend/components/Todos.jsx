import React from 'react'
import { connect } from 'react-redux'

import Button from './Button.jsx'
import Form from './Form.jsx'

function mapStateToProps(state) {
    return { todos: state.todos, test: state.test }
}

function mapDispatchToProps(dispatch) {
    return {
        AddTodo: function (id, text) {
            dispatch({ type: "ADD_TODO", payload: { id: id, text: text } })
        }
    }
}

class Todos extends React.Component {
    constructor() {
        super()

        this.todoFormConfig = [
            {
                name: 'name',
                type: 'string',
                label: 'Name'
            }, {
                name: 'description',
                type: 'string',
                label: 'Description'
            }
        ]
    }

    Todos(todos) {
        return <ul>{this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
        })}</ul>
    }

    EmptyTodoContainer() {
        return <div>You don't have any todos. Add some!</div>
    }

    AddTodo() {
        <button onClick={() => {
            this.props.AddTodo(this.index++, "test")
        }}>add todo</button>
    }

    render() {
        return <div>
            <Form name={'Todos'} onSubmit={this.AddTodo} fields={this.todoFormConfig}></Form>
        </div>
    }
    // let jsx = []

    // if (this.props.todos && this.props.todos.length > 0) {
    //     jsx.push(this.Todos(this.props.todos))
    // } else {
    //     jsx.push(this.EmptyTodoContainer())
    // }


    // return jsx

}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)