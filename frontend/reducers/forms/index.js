import login from './loginForm'
import todos from './todosForm'

const defaultState = {
    login: login(),
    todos: todos()
}

export default (state = defaultState, action = {}) => {
    return {
        login: login(state.login, action),
        todos: todos(state.todos, action)
    }
}

