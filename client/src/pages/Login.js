import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Login =(props) =>{
    const [username, setUsername]= useState("");
    const [password,setPassword] =useState("");
    const navigate =useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res= await axios.post('http://localhost:8000/api/auth/login', {
                username,
                password,
              });
              props.setUser(res.data)
              navigate("/");
        }
        catch (error) {
            alert("Login failed")
            console.error(error);
          }
    }
    return (
        <div id='login-page'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                </label>
                <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </label>
                <button type="submit">Login</button>
            </form>

            <Link to="register">Register here</Link>
        </div>
    );
}
export default Login;