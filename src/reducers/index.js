import { combineReducers} from 'redux'
import './todos'
import './visibilityFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp