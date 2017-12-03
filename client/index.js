
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import reducers from './reducers/index.js'

let store = 4

function AddTodo(id, text) {
    store.dispatch({ type: "ADD_TODO", payload: { id: id, text: text } })
}

window.onload = function () {
    store = createStore(reducers)   
    function render() {
        ReactDOM.render(<App AddTodo={AddTodo} todos={store.getState().todos} />, document.getElementById('app'))
    }
    store.subscribe(render)

    render()
}
