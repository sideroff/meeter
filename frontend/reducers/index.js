import { combineReducers } from 'redux'

import todos from './todos'
import users from './users'
import forms from './forms'

//NOTE: actions should not mutate, rather create new instances of state
export default combineReducers({ todos, users, forms })

