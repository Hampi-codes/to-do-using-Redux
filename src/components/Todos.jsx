import React from "react"
import './Todo.css'
import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux/features/todoSlice"
import { Button } from "antd"

export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id} className="list">
                    {todo.text}
                    <Button
                    className="remove_btn"
                        type="primary"
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        Remove
                    </Button>
                </li>
            ))}
        </>
    )
}