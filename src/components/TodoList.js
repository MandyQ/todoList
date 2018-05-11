import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// 函数组件
const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{todos.map(todo =>(
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />		
		))}
	</ul>
)

TodoList.PropTypes = {
	//arrayOf 某种类型的数组
	todos:PropTypes.arrayOf(
		//shape一个特定形式的对象
		PropTypes.shape({
			id:PropTypes.number.isRequried,
			completed:PropTypes.bool.isRequired,
			text:PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick:PropTypes.func.isRequired
}


export default TodoList
