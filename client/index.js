
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import reducers from './reducers/index.js'

window.onload = function () {    
    let store = createStore(reducers)
    console.log('initial state')
    console.dir(store.getState())

    function render() {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('app'))
    }

    store.subscribe(render)
    render()
}
