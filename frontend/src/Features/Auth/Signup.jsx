import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../Api/Api'


function Signup() {
    const[message,setMessage]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();

    const handleLogin=()=>{
        navigate("/login");
    }
     
    const handleSubmit=async(e)=>{
    e.preventDefault()

    try {
        const res=await api.post("/auth/signup",{
            name,email,password
        } )
      setMessage("register successful");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard")
   
    } catch (error) {
        console.log("error occured while signup",error.message);
         setMessage("register unsuccessful");  
    }
   
 }
  return (
    <>
    <div className="main-container">
         <h2>Admin Signup</h2>
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" 
            placeholder="enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}  />
            <input type="email" 
             placeholder="enter email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
            <input type="password"  
            placeholder="enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          <button type="submit" >Submit</button>
          <p onClick={handleLogin}>Already Registered </p>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>
  )
}

export default Signup
