//import diff slices of store
import { combineReducers } from 'redux'

import todoItems from './todoitems'
import quotes from './quotes'

const rootReducer = combineReducers({
    todoItems,
    quotes
})

export default rootReducer