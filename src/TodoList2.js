import React, { Component } from 'react'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

import store from './store'

class TodoList2 extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
  }

  render () {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input value={this.state.inputValue} placeholder='todo info' style={{ width: '200px', marginRight: '10px' }} />
          <Button type='primary'>提交</Button>
        </div>
        <List style={{ marginTop: '10px', width: '300px' }} bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)} />
      </div>
    )
  }
}

export default TodoList2
