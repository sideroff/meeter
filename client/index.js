
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import reducers from './reducers/index.js'

window.onload = function () {

    let store = createStore(reducers)
    console.dir(store.getState())

    ReactDOM.render(<App />, document.getElementById('app'))

}
