import React from 'react'
import AddStudent from '../Features/Student/AddStudent'
import StudentList from '../Features/Student/StudentList'
import AddTask from '../Features/Task/AddTask'
import Listtask from '../Features/Task/TaskList'
import {useNavigate} from 'react-router-dom'
function Dashboard() {

  const navigate=useNavigate();
  const handleLogout=async()=>{
     localStorage.removeItem("isLoggedIn")
     navigate("/login");
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <button onClick={handleLogout}>Logout</button>
      <AddTask/>
      <Listtask/>
      <AddStudent/>
      <StudentList/>
    </div>
  )
}

export default Dashboard
