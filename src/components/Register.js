import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '', // Added confirmPassword field
    });

    // To store value in local storage
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.password !== input.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        localStorage.setItem("user", JSON.stringify({
            name: input.name,
            email: input.email,
            password: input.password,
        }));
        navigate("/login");
    };

    return (
        <div className='container my-5 d-flex justify-content-center' >
            <div className='card col-6 bg-white'>
                <form className='p-4' onSubmit={handleSubmit}>
                    <h2 className='text-center'>REGISTER</h2><br />
                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleInputUserName1" className="form-label col-4">User Name</label>
                        <input
                            name='name'
                            value={input.name} // Corrected from input.value to input.name
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            type="text"
                            className="form-control"
                            id="exampleInputUserName1"
                        />
                    </div>

                    <div className="mb-3 ">
                        <div className="d-flex">
                            <label htmlFor="exampleInputEmail1" className="form-label col-4">Email address</label>
                            <input
                                name="email"
                                value={input.email}
                                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div id="emailHelp" className="form-text">We'll never share your email & password with anyone else.</div>
                    </div>

                    <div className="mb-3 d-flex">
                        <label htmlFor="exampleInputPassword1" className="form-label col-4">Password</label>
                        <input
                            name="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <div className="mb-3 d-flex">
                        <label htmlFor="verifyPassword" className="form-label col-4">Re-Enter Password</label>
                        <input
                            name="confirmPassword"
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            type="password"
                            className="form-control"
                            id="verifyPassword"
                        />
                    </div>
                    <div className="text-center ">
                        <button type="submit" className="btn btn-success mt-3">Submit</button>

                    </div>
                </form>
                <div className="mt-3 text-center">
                    <p>Already have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
