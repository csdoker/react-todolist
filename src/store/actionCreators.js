import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
}

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/api/todolist').then((res) => {
//       const { data } = res
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }

export const getInitList = () => {
  return {
    type: GET_INIT_LIST
  }
}
