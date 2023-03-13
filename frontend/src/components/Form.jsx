import React, {useState} from "react";

export default function Form({todos, setTodos}) {
    const [value, setValue] = useState('')

    const addTodo = event => {
        event.preventDefault()

        if (value) {
            let newTodo = {id: new Date().getTime(), title: value, completed: false}
            setTodos([...todos, newTodo])
            setValue('')
            return
        }
        window.alert('You did not write anything')
    }

    return (
        <form className='form' onSubmit={event => addTodo(event)}>
            <input
                type="text"
                value={value}
                onInput={event => setValue(event.target.value)}
                placeholder="Hit Enter to add task..."
            />
        </form>
    )
}