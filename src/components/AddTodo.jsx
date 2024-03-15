import React, { useState } from "react"
import './AddTodo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from "../redux/features/todoSlice"
import { Input, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const AddTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <Row gutter={16}>
                <Col span={20}>
                    <Input
                        type="test"
                        placeholder="Enter to do Task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </Col>
                <Col span={4}>
                    <Button
                        className="button"
                        shape="round"
                        onClick={addTodoHandler}
                        icon={<PlusOutlined />}
                    />
                </Col>
            </Row>
        </>
    )
}