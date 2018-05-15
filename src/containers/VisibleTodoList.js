// import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
// import Todo from '../components/Todo';

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);
		case 'SHOW_ALL':
		default:
			return todos
		
	}
}


//get 
const mapStateToProps = state => {
	return {
		todos:getVisibleTodos(state.todos, state.visibilityFilter)
	}
}


// dispatch()
const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

// react-redux提供connect（）帮助器来调用dispatch()
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoList)

export default VisibleTodoList