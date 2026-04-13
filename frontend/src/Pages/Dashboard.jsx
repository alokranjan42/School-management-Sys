import React from 'react'
import AddStudent from '../Features/Student/AddStudent'
import StudentList from '../Features/Student/StudentList'
import AddTask from '../Features/Task/AddTask'
import Listtask from '../Features/Task/TaskList'
import {useNavigate} from 'react-router-dom'
import TaskList from '../Features/Task/TaskList'
import  "./Dashboard.css"
function Dashboard() {

  const navigate=useNavigate();
  const handleLogout=async()=>{
     localStorage.removeItem("isLoggedIn")
     navigate("/login");
  }
  return (
    <>
     <h2 className="main-heading">School Management System</h2>
     <div  className="dashboard-main">
     <h3  className='dashboard-heading'>Dashboard</h3>
      <button onClick={handleLogout} className="dashboard-btn" >Logout</button>
      </div>
     <div className="dashboard-container">
      <div className="component-container">
      <AddStudent />
      <AddTask/>
      <TaskList />
      <StudentList/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
