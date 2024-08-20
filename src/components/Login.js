import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    //to store value in local storage
    const handleLogin = (e) => {
        e.preventDefault();

        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("loggedIn", true);
            navigate("/");
        } else {
            alert("Wrong Email or Password");
        }

    };

    return (
        <div className='container  my-5 d-flex justify-content-center'>
            <div className='card col-6 bg-white'>
                <form className='p-4' onSubmit={handleLogin}>
                    <h2 className='text-center'>LOGIN</h2><br/>
                    <div className="mb-3 ">
                        <div className="d-flex ">
                            <label htmlFor="exampleInputEmail1" className="form-label col-4">Email address</label>
                            <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div id="emailHelp" className="form-text ">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleInputPassword1" className="form-label col-4">Password</label>
                        <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="text-center ">
                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                    </div>

                </form>
                <div className="mt-3 text-center">
                    <p>Don't have an account? <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>Register here</Link></p>
                </div>
            </div>

        </div>

    )
}

export default Register
