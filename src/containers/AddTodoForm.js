import React, { Component } from 'react'
import { addToDo } from '../actions' // the action creator
import { connect } from 'react-redux' // connects our AddTodoForm component to the store

class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: '' }
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  submitForm = (e) => {
		e.preventDefault()
		this.props.addToDo(this.state.todo)
    this.setState({ todo: '' })
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.todo}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	addToDo: todo => dispatch( addToDo(todo) )
})

// connect will always take two arguments, but if second isn't used, it can be left out. If first isn't used, need to put null. Order matters!
// ex. connect(mapStateToProps, mapDispatchToProps)(Component)
export default connect(null, mapDispatchToProps)(AddTodoForm)
