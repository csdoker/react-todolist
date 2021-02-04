const defaultState = {
  inputValue: '',
  list: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'changeInputValue') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}

export default reducer
