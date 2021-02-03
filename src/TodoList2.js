import React, { Component } from 'react'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const data = ['内容1', '内容2', '内容3']

class TodoList2 extends Component {
  render () {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input placeholder='todo info' style={{ width: '200px', marginRight: '10px' }} />
          <Button type='primary'>提交</Button>
        </div>
        <List style={{ marginTop: '10px', width: '200px' }} bordered dataSource={data} renderItem={item => (<List.Item>{item}</List.Item>)} />
      </div>
    )
  }
}

export default TodoList2
