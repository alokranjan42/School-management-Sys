import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../Api/Api'
import { useParams } from 'react-router-dom'
import './TaskList.css'

function TaskList() {
  const [task, setTask] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchTask = async () => {

      try {
        const taskres = await api.get("/task");
        setTask(taskres.data.data);
        const { id } = useParams();

      } catch (error) {
        console.log("error occured while fetching tasks", error.message);
      }
    }
    fetchTask()
  }, [id])

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
      setMessage("task completed");
    } catch (error) {
      console.log("error occur while updating task", error.message)
    }
  }
  const handleDeleteTask = async (id) => {
    try {
      await api.delete(`/task/${id}`);
      setMessage("task deleted ");

    } catch (error) {
      console.log("error occur while deleting task", error.message);

    }

  }
  return (
    <div className="dashboard-containers">
      <h4 className="taskList-heading">Task List</h4>
      <table className="taskTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assigned To</th>
             <th>completed</th>
             <th>delete</th>
          </tr>
        </thead>

        <tbody>
          {task.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>{item.student?.name}</td>
              <td> <p onClick={() => handleMarkCompleted(item._id)}
                 >{item.status==="completed" ?<button  className="completedBtn" >
                  completed</button> :<button className="markBtn">mark completed</button>}</p></td>
              <td>
                <button style={{color:"white",backgroundColor:"red" ,border:"none" ,height:"32px" ,borderRadius:"4px", width:"80px"}} 
              onClick={() =>handleDeleteTask (item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>


      {message && <p className="event-message">{message}</p>}

    </div>
  )
}

export default TaskList
