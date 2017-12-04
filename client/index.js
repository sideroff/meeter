
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import reducers from './reducers/index.js'

let store


window.onload = function () {
    
    store = createStore(reducers)
    function render() {
        console.log('rendering')
        console.dir(store.getState())
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('app'))
    }
    store.subscribe(render)

    render()
}
