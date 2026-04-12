import React from 'react'
import {useState,useEffect} from 'react'
import api from '../../Api/Api'
import './AddTask.css'

function AddTask() {
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[status,setStatus]=useState("")
    const [message,setMessage]=useState("")
    const [students,setStudents]=useState([])
    const [student,setStudent]=useState("")



    useEffect(()=>{
      //fetching students
   const getStudent=async()=>{
        try {
          const studentres=await api.get("/students");
          setStudents(studentres.data.data)
        } catch (error) {
          console.log("error occured while fetching students",error.message);
        }
      }
      getStudent()
    },[])


    const handleAddTask=async(e)=>{
        e.preventDefault();
        try {
          // sending data to backend
            const addTask=await api.post("/task",{
                title,description,status,student
            })
            setMessage("task added");
            setTitle("");
            setDescription("");
            setStatus("");
            setStudent("");
            
        } catch (error) {
            console.log("error occured while adding",error.message);
            setMessage("task not added"); 
            
        }
    }
  return (
    <>
    <div className="dashboard-containers">
      <h4 className="addTask-heading">Add Task</h4>
      <form onSubmit={handleAddTask} className="form-container">
      <input type="text"
      placeholder="Add title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className="addTask-input"
       />
      <textarea name="" id="" 
      value={description}
      placeholder="Add description"
      onChange={(e)=>setDescription(e.target.value)}
       className="addTask-textArea">
      
      </textarea>
    
    {/* task status of student  */}
    <select value={status} 
    onChange={(e)=>setStatus(e.target.value)}
    className="addTask-select">
        <option value="" className="addTask-option"> select status</option>
        <option value="assigned"  className="addTask-option" >assigned</option>
         <option value="not assigned" className="addTask-option">not assigned</option>
        <option value="pending" className="addTask-option">pending</option>
        <option value="completed" className="addTask-option">completed</option>
    </select>
    {/* add task to student */}
    <select  value={student}
     onChange={(e)=>setStudent(e.target.value)}
      className="addTask-select">
      <option value="">select students</option>
       {students.map((item)=>(
        <option key={item._id} value={item._id}>
          {item.name}
        </option>
       ))}

    </select>

    <button type="submit" className="addTaskBtn">Add task</button>


      </form>
     {message && <p className="addTask-message"> {message}</p> } 
    </div>
    
    </>
  )
}

export default AddTask
