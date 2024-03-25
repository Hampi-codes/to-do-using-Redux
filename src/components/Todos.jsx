import React from "react"
import './Todo.css'
import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux/features/todoSlice"
import { Button } from "antd";
import { PushpinOutlined, DeleteOutlined } from '@ant-design/icons';

export const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id} className="list">
                    <div className="div">
                        <PushpinOutlined />
                        {" "} &nbsp;
                        {todo.text}
                    </div>
                    <Button
                        className="remove_btn"
                        type="primary"
                        onClick={() => dispatch(removeTodo(todo.id))}
                        icon={<DeleteOutlined />}
                    />
                </li>
            ))}
        </>
    )
}