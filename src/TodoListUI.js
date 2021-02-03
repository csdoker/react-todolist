import React, { Component } from 'react'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

class TodoListUI extends Component {
  render () {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder='todo info'
            style={{ width: '200px', marginRight: '10px' }}
            onChange={this.props.handleInputChange}
          />
          <Button type='primary' onClick={this.props.handleButtonClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoListUI
