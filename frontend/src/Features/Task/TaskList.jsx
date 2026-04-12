import React from 'react'
import {useState,useEffect} from 'react'
import api from '../../Api/Api'

function TaskList() {
    const [task,setTask]=useState([]);

    useEffect(()=>{
        const fetchTask=async()=>{
            try {
                const taskres=await api.get("/task");
                setTask(taskres.data.data);
                
            } catch (error) {
                console.log("error occured while fetching tasks",error.message);
            }
        }
        fetchTask()
    },[])

    const handleMarkCompleted = async (id) => {
  try {
    const res = await api.put(`/task/${id}`, {
      status: "completed"
    })

    setTask((p) =>
      p.map((item) =>
        item._id === id ? res.data.data : item
      )
    )
  } catch (error) {
    console.log("error occur while updating task", error.message)
  }
}
  return (
    <div>
        {task.map((item)=>(
            <div key={item._id}>
               <h4>{item.title}</h4> 
               <p>{item.description}</p>
               <p>{item.status}</p>
               <p> Task Assigned To: {item.student ? item.student.name :"task not assigned"}</p>
               <button onClick={() => handleMarkCompleted(item._id)}>Completed</button>

                </div>
        ))}
      
    </div>
  )
}

export default TaskList
