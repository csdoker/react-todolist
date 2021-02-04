import React from 'react'
import ReactDOM from 'react-dom'
// import TodoList from './TodoList'
// import TodoList2 from './TodoList2'
import TodoList3 from './TodoList3'
// import Transition from './Transition'
// import TransitionList from './TransitionList'
import { Provider } from 'react-redux'
import store from './store2'

const App = (
  <Provider store={store}>
    <TodoList3 />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
)
