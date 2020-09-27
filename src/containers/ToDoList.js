import React from 'react'
import { connect } from 'react-redux'

const ToDoList = ({ todos }) => {
	console.log(todos)

	return (
		<ul>

		</ul>
	)
}

// this is used for selecting the part of the data from the store that this component needs. It is called every time the store has been updated. 'state' refers to the global store.
const mapStateToProps = state => ({
	todos: state.todos
})

export default connect(mapStateToProps)(ToDoList)