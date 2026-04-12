import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../../Api/Api'

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
      {student.map((student)=>(
        <div key={student._id}
         onClick={() => handleStudentProfile(student._id)}>
          <h4>{student.name}</h4>
          <p>{student.roll}</p>
          <p>{student.className}</p>

        </div>
      ))}
      
    </div>
 
    </>
  )
}

export default StudentList
