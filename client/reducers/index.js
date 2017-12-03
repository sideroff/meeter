import todos from './todos'

function combinedReducers(reducers) {
    return (state = {}, action = {}) => {
        Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action)
        }, state)

        return state
    }
}

export default combinedReducers({ todos })