import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useEffet,useState} from 'react'


function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const navigate=useNavigate();
     const handleLogin=()=>{
        navigate("/dashboard");
    }
    const handleSignup=()=>{
        navigate("/signup");

    }

  return (

   

    <>
    <div className="main-container">
     <h2>Admin Login</h2>
        <form action="" className="form-container">
            <input type="email" placeholder="enter email" />
            <input type="password" placeholder="enter password" />
            <button onClick={handleLogin}>Login</button>
            <p onClick={handleSignup}>not registered </p>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>

  )
}

export default Login
