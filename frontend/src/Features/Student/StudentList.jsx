import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../Api/Api'
import './StudentList.css'

function StudentList() {
  const[ student,setStudent]=useState([])
  const [loading,setLoading]=useState(true)
  
 
  const navigate=useNavigate();
  useEffect(()=>{
   const  fetchStudent=async()=>{
    try {
      const studentreponse=await api.get("/students")
      setStudent(studentreponse.data.data);
      setLoading(false);
    } catch (error) {
      console.log("unable to load student lists",error.message);
      setLoading(false);
    }
   }
   fetchStudent()
  },[])


  const handleStudentProfile = (id) => {
    navigate(`/student/${id}`)
  }


  if(loading){
    return  <p>loading student lists..</p>
    }
  return (
    <>
     <div className="dashboard-containers">
  <h4 className="student-heading">Student List</h4>

  <table className="studentTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>className</th>
      </tr>
    </thead>

    <tbody>
      {student.map((item) => (
        <tr
          key={item._id}
         
          className="student-row"
        >
          <td><h4>{item.name}</h4> <p className="studentList-view" 
          onClick={() => handleStudentProfile(item._id)}>view</p></td>

          <td>{item.roll}</td>
          <td>{item.className}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
 
    </>
  )
}

export default StudentList
 
