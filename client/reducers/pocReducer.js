export default function (state = [], action) {
    let type = action.type
    let payload = action.payload
    let newState
    //TODO: actions should not mutate, rather create new instances of state
    switch (action.type) {
        case 'ADD_TODO':
            newState = [...state, { id: payload.id, text: payload.text }]
            return newState
        case 'TOGGLE_TODO':
            newState = state.map(todo => {
                if (todo.id !== payload.id) {
                    return todo
                }

                return Object.assign({}, todo, { completed: !todo.completed })
            })
            return newState
        default:
            return state
    }
}