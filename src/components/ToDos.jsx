import React from 'react'
import ToDoItem from '../components/ToDoItem';


const ToDos = (props) => {
  return (
    <div className='container'>
      <h3>Todos list</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <ToDoItem className='text-left' todo={todo} key={todo.SrNo} onDelete={props.onDelete} onUpdate={props.onUpdate} />
            </>
          )
        })
      }

    </div>
  )
}

export default ToDos
// this is named export thats ehy we need to add export default at bottom
