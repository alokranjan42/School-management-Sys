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
                console.log("error occured while fetching tasks",error.message)
            }
        }
        fetchTask()
    },[])
  return (
    <div>
        {task.map((item)=>(
            <div key={item._id}>

               <h4>{item.title}</h4> 
               <p>{item.description}</p>
               <p>{item.status}</p>

                </div>
        ))}
      
    </div>
  )
}

export default TaskList
