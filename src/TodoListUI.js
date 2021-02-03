import React from 'react'

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = props => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder='todo info'
          style={{ width: '200px', marginRight: '10px' }}
          onChange={props.handleInputChange}
        />
        <Button type='primary' onClick={props.handleButtonClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index)
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI
