import React, { useState } from 'react';


const AddToDo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        }
        addTodo(title, desc);
        setTitle(""); // Clear title after adding todo
        setDesc(""); // Clear description after adding todo
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit} className='p-3'>
                <div className="mb-3 d-flex">
                    <label htmlFor="Title" className="form-label col-3 text-start">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="Desc" className="form-label col-3 text-start">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button className='btn-sm btn-success float-end p-2' type="submit" >Add Todo</button>
            </form>

        </div>
    )
}

export default AddToDo

