const defaultState = {
    name: '',
    description: ''
}

export default (state = defaultState, action = {}) => {
    let payload = action.payload || ''
    let newState = state

    switch (action.type) {
        case 'TODO_NAME_CHANGE':
            newState = Object.assign({}, state, { name: payload })
            return newState

        case 'TODO_DESCRIPTION_CHANGE':
            newState = Object.assign({}, state, { description: payload })
            return newState

        default:
            return state
    }
}