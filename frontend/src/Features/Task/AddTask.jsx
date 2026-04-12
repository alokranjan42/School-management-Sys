import React from 'react'
import {useState} from 'react'
import api from '../../Api/Api'


function AddTask() {
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[status,setStatus]=useState("")
    const [message,setMessage]=useState("")


    const handleAddTask=async(e)=>{
        e.preventDefault();
        try {
            const addTask=await api.post("/task",{
                title,description,status
            })
            setMessage("task added")
            
        } catch (error) {
            console.log("error occured while adding",error.message);
            setMessage("task not added");    
        }
    }
  return (
    <>
    <div className="main-container">
      <form onSubmit={handleAddTask} className="form-container">
      <input type="text"
      placeholder="Add title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
       />
      <input type="text" 
      value={description}
      placeholder="Add description"
      onChange={(e)=>setDescription(e.target.value)}
      />
    
    <select value={status} 
    onChange={(e)=>setStatus(e.target.value)}>
        <option value=""> select status</option>
        <option value="assigned">assigned</option>
         <option value="not assigned">not assigned</option>
        <option value="pending">pending</option>
        <option value="completed">completed</option>
    </select>
    <button type="submit">Add task</button>


      </form>
    </div>
    {message && <p>{message}</p>}
    </>
  )
}

export default AddTask
