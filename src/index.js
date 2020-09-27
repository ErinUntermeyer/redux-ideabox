import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // makes the Redux store available to any nested components. Usually rendered at the top level (likely App). If using Router, it wraps BrowserRouter.
import { createStore } from 'redux' // creates a Redux store that holds the complete state tree of the app. There should only be a single store in the app.
import { composeWithDevTools } from 'redux-devtools-extension' // can be passed as an argument with createStore so that we have access to the devtools. Order matters here.
import rootReducer from './reducers'
import App from './components/App'
import './index.css'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
  document.getElementById('root')
)
