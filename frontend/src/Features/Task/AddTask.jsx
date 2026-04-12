import React from 'react'
import {useState,useEffect} from 'react'
import api from '../../Api/Api'


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
    
    {/* task status of student  */}
    <select value={status} 
    onChange={(e)=>setStatus(e.target.value)}>
        <option value=""> select status</option>
        <option value="assigned">assigned</option>
         <option value="not assigned">not assigned</option>
        <option value="pending">pending</option>
        <option value="completed">completed</option>
    </select>
    {/* add task to student */}
    <select  value={student}
     onChange={(e)=>setStudent(e.target.value)}>
      <option value="">select students</option>
       {students.map((item)=>(
        <option key={item._id} value={item._id}>
          {item.name}
        </option>
       ))}

    </select>

    <button type="submit">Add task</button>


      </form>
    </div>
    {message && <p>{message}</p>}
    </>
  )
}

export default AddTask
