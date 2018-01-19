export default (state = {}, action) => {
    let payload = action.payload
    let newState

    switch (action.type) {
        case 'REGISTER':
            console.log('register')
            return state
        case 'LOGIN':
            console.log('login')
            return state
        case 'LOGIN_SUCCESSFUL':
            console.dir('logged in ' + JSON.stringify(payload))
            return Object.assign({}, state, { current: payload })
        case 'LOGOUT':
            console.log('logout2')
            return state
        default:
            console.log('default users')
            return state
    }
}