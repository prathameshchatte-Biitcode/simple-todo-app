import React from 'react'

const ToDoItem = ({ todo, onDelete, onUpdate }) => {
    return (
        <div className='d-flex justify-content-between p-3 '>
            {/* <p className='col-1'>{todo.SrNo}</p> */}
            <h5 className='col-3' >{todo.Title}</h5>
            <p className='col-6' >{todo.Desc}</p>
            <div className="d-flex col-2 justify-content-end">
                <button className="btn btn-dark btn-sm mx-2 " onClick={() => { onUpdate(todo) }}>Update</button>
                <button className="btn btn-danger btn-sm " onClick={() => { onDelete(todo) }}>Delete</button>
            </div>

        </div>


    )
}

export default ToDoItem
// this is named export thats ehy we need to add export default at bottom