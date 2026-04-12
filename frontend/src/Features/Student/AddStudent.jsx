import React from 'react'
import {useState} from 'react'
import api from '../../Api/Api'
import  "./AddStundent.css"
function AddStudent() {

    const [name,setName]=useState("");
    const [roll,setRoll]=useState("");
    const [className,setclassName]=useState("");
    const [message,setMessage]=useState("")


    const handleAddStudent=async(e)=>{
        e.preventDefault();
        try {
            const addStudent=await api.post("/students",{
                name,className,roll
            })
            setMessage("student added"); 
            setName("");
            setRoll("");
            setclassName(""); 
        } catch (error) {
            console.log("error occured while adding",error.message);
             setMessage("student not added");
        }
    }
  return (
    <>
    <div className="dashboard-containers">
        <h4 className="addStudent-heading">Add Student </h4>
        <form onSubmit={handleAddStudent} className="addStudent-form">
        <input type="text" 
        placeholder="enter name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <input type="text"  
        placeholder="enter roll"
        value={roll}
        onChange={(e)=>setRoll(e.target.value)}
        />
         <input type="text"  
        placeholder="enter className"
        value={className}
        onChange={(e)=>setclassName(e.target.value)}
        />
        <button type="submit">Add Student</button>
        </form>
      
    </div>
    {message && <p>{message}</p>}
    </>
  )
}

export default AddStudent
