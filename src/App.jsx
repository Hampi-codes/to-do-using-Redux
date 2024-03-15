import React from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'
import { Flex } from 'antd'

function App() {

  return (
    <>
        <AddTodo />
        <Todos />
    </>
  )
}
export default App
