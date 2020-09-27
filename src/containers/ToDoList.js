import React from 'react'
import ToDo from '../components/ToDo'
import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
	const displayTodos = todos.map(todo => {
		console.log(todo)
		return (
			<ToDo
				{...todo}
				key={todo.id}
			/>
		)
	})

	return (
		<ul>
			{displayTodos}
		</ul>
	)
}

// this is used for selecting the part of the data from the store that this component needs. It is called every time the store has been updated. 'state' refers to the global store.
const mapStateToProps = state => ({
	todos: state.todos
})

// connect will always take two arguments, but if second isn't used, it can be left out. If first isn't used, need to put null. Order matters!
// ex. connect(mapStateToProps, mapDispatchToProps)(Component)
export default connect(mapStateToProps)(ToDoList)