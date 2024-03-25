import React from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'
import { Divider, Flex } from 'antd'
import Typography from 'antd/es/typography/Typography'

function App() {

  return (
    <>
      <Flex className="app_div" vertical align='center'>
        <span className="heading">To-Do</span>
        <AddTodo />
        <Todos />
      </Flex>
    </>
  )
}
export default App
