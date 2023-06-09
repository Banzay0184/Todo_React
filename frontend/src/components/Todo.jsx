import React from 'react'

export default function Todo({todos, todo, setTodos}) {
   return (
       <div className='todo'>
           <div className={(todo.completed) ? 'completed' : ''}>
               <input type="checkbox" checked={todo.completed} className='checkbox'/>
               <label htmlFor={`check-${todo.id}`}>{todo.title}</label>
           </div>
       </div>
   )
}
