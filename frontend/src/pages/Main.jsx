import React, {useState} from 'react'
import Form from "../components/Form";
import Todos from "../components/Todos";
import Header from "../components/Header";
import '../static/style.css'

export default function Main() {
    const [todos, setTodos] = useState([{
        id: 1,
        title: 'Todo 1',
        completed: false
    }, {
        id: 2,
        title: 'Todo 2',
        completed: true
    }
    ])

    return (
        <div className='container'>
            <div className='box'>
                <Header/>
                <Form todos={todos} setTodos={setTodos}/>
                <Todos todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    )
}

