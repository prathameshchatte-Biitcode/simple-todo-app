import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoutes from './Services/ProtectedRoutes';
import AddToDo from './components/AddToDo'
import ToDoItem from './components/ToDoItem'
import ToDos from './components/ToDos'



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* ProtectedRoutes */}
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/todo-item' element={<ToDoItem />} />
            <Route path='/todos' element={<ToDos />} />
            <Route path='/add-todo' element={<AddToDo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
