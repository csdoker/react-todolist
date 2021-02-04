import React from 'react'
import { connect } from 'react-redux'

const TodoList3 = props => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleSubmit,
    handleDeleteItem
  } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleSubmit}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li onClick={handleDeleteItem} key={index}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue (e) {
      const action = {
        type: 'changeInputValue',
        value: e.target.value
      }
      dispatch(action)
    },
    handleSubmit () {
      const action = {
        type: 'addTodoItem'
      }
      dispatch(action)
    },
    handleDeleteItem () {
      const action = {
        type: 'deleteTodoItem'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList3)
