import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Signup() {
    const[message,setMessage]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate("/login");
    }
     const handleDashboard=()=>{
        navigate("/dashboard");
    }

    useEffect(()=>{
        const signup=async()=>{
            try {
                const res=await API.post("" ,{
                    name,email,password
                });
                
                setMessage("registration succesful");
                setName("");
                setEmail("");
                setPassword("");

                
            } catch (error) {
                console.log(error.message,"error occured while register")
                setMessage("not registered"); 
            }
        }
        signup()
    },[])
  return (
    <>
    <div className="main-container">
         <h2>Admin Signup</h2>
        <form action="" className="form-container">
            <input type="text" placeholder="enter name"  />
            <input type="email"  placeholder="enter email"/>
            <input type="password"  placeholder="enter password"/>
          <button onClick={handleDashboard}>Submit</button>
          <p onClick={handleLogin}>Already Registered </p>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>
  )
}

export default Signup
