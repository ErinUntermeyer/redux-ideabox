// reducers
// take in two arguments
// first is the initial state
// second is the action
// must have a switch statement inside
export const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO': // this matches the type we declared in our action creator
			return [...state, { id: Date.now(), todo: action.todo, completed: false }]
		default:
			return state
	}
}