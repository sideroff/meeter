import login from './loginForm'

const defaultState = {
    login: login()
}

export default (state = defaultState, action = {}) => {
    return {
        login: login(state.login, action)
    }
}

