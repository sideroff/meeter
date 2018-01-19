
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'

import App from './components/App.jsx'
import reducers from './reducers'

window.onload = function () {
    let middleWare = applyMiddleware(logger)
    let store = createStore(reducers, middleWare)

    function render() {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('app'))
    }

    store.subscribe(render)
    render()
}
