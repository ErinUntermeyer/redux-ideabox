// creating the store
import { combineReducers } from 'redux'
import { todos } from './todos'

// combineReducers is what combines all of our reducers, typically named rootReducer
const rootReducer = combineReducers({
	todos
})

export default rootReducer
