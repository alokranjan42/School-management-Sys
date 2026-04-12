import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import './Login.css'
import api from '../../Api/Api'

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate("/");
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
     
         try {
             const loginres=await api.post("/auth/login",{
                 email,password
             })
             setMessage("login successful");
             navigate("/dashboard");
         } catch (error) {
            console.log("error occured while login",error.message);
             setMessage("login unsuccessful");
            
         }
      }
      
      

  return (
    <>
    <div className="main-container">
     <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="form-container">
            <input type="email"
             placeholder="enter email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" 
            placeholder="enter password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p onClick={handleSignup}>not registered </p>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>

  )
}

export default Login
