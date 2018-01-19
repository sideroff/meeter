const defaultState = {
    username: '',
    password: ''
}
export default (state = defaultState, action = {}) => {
    let payload = action.payload || ''
    let newState = state

    switch (action.type) {
        case 'LOGIN_USERNAME_CHANGE':
            newState = Object.assign({}, state, { username: payload })
            return newState

        case 'LOGIN_PASSWORD_CHANGE':
            newState = Object.assign({}, state, { password: payload })
            return newState

        default:
            return state
    }
}