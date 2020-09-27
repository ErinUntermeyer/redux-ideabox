// action creator
// functions that return an object (aka action)
// all actions need a type ('ADD_TODO') and a payload (todo)
export const addToDo = todo => ({
	type: 'ADD_TODO',
	todo
})