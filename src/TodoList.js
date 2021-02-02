import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete} />
        // <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{ __html: item }}></li>
      )
    })
  }

  handleInputChange (e) {
    // const value = e.target.value
    const { value } = this.input
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleButtonClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList
