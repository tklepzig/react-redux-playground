import { createStore } from 'redux'
import todoApp from './reducers'
import { setColor, setStrokeWidth } from './actions'

const store = createStore(todoApp);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// Dispatch some actions
store.dispatch(setColor("blue"))
store.dispatch(setColor("red"))
store.dispatch(setStrokeWidth(20))
store.dispatch(setColor("green"))
store.dispatch(setColor("#1d1d1d"))

// Stop listening to state updates
unsubscribe()