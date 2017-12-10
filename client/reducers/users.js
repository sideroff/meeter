export default (state = {}, action) => {
    let payload = action.payload
    let newState

    switch (action.type) {
        case 'REGISTER':
            console.log('register')
        case 'LOGIN':
            console.log('login')
        case 'LOGOUT':
            console.log('logout')
    }

    return state;
}