import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ToDos from '../components/ToDos';
import AddToDo from '../components/AddToDo';


const Home = () => {

    //------------------login functionality Starts---------------//
    const navigate = useNavigate();

    const userName = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login")

    }

    //------------------login functionality end---------------//


    //------------------ToDo CRUD functionality Starts---------------//



    //Delete Todo item

    const onDelete = (todo) => {
        console.log("i am on delete of todo", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }
        ));
    }

    //add Todo item
    const addTodo = (title, desc) => {
        console.log("i am addding todo", title, desc)
        // Determine the SrNo for the new todo
        let SrNo;
        if (todos.length === 0) {
            SrNo = 1; // If the array is empty, start with 1
        } else {
            SrNo = todos[todos.length - 1].SrNo + 1; // Otherwise, increment the last SrNo
        }
        const myTodo = {
            SrNo: SrNo,
            Title: title,
            Desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo);
    }


    const [editTodo, setEditTodo] = useState(null);

    // Update Todo item
    const onUpdate = (todo) => {
        console.log("i am updating todo", todo);
        setEditTodo(todo);
    }

    const updateTodo = (title, desc) => {
        setTodos(
            todos.map((todo) =>
                todo.SrNo === editTodo.SrNo ? { ...todo, Title: title, Desc: desc } : todo
            )
        );
        setEditTodo(null);//reset edit todo stage
    }




    const [todos, setTodos] = useState([
        {
            SrNo: 1,
            Title: "Learn react js",
            Desc: "Watch codewith harry's tutorial on react js"
        }
    ]);

    //------------------Todo CRUD functionality end---------------//
    return (
        <div className='container d-flex justify-content-center my-5'>
            <div className='card bg-white p-5 w-100'>
                <h1>
                    Welcome {userName.name}!
                </h1>
                <hr />
                {editTodo ? (
                    <AddToDo addTodo={updateTodo} initialData={editTodo} />
                ) : (
                    <AddToDo addTodo={addTodo} />
                )}
                <hr />
                <ToDos todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
                <hr />
                <button onClick={handleLogout} type='submit' className='btn btn-primary center btn-sm w-25 mx-auto mt-5 py-2' >Logout</button>
            </div>


        </div>
    )
}

export default Home
