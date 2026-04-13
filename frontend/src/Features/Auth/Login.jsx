import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import api from '../../Api/Api'
import '../../Shared/Styles.css'

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
             localStorage.setItem("isLoggedIn", "true");
             setMessage("login successful");
             navigate("/dashboard");
         } catch (error) {
            console.log("error occured while login",error.message);
             setMessage("login unsuccessful");
            
         }
      }
      
      

  return (
    <>
    <h2 className="main-heading">School Management System</h2>
    <div className="main-container">
     <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="form-container">
            <input type="email"
             placeholder="enter email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             className="input-text"
             />
            <input type="password" 
            placeholder="enter password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="input-text"
            />
            <button type="submit" className="btn">Login</button>
            <p  className="auth-para">Not Registered <button onClick={handleSignup} className="btn2">sign up</button> </p>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>

  )
}

export default Login
