import React from 'react'
import {useEffect,useState} from 'react'
import api from '../../Api/Api'

function Student() {
  const[ student,setStudent]=useState([])
  const [loading,setLoading]=useState(true)

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
  if(loading){
    return  <p>loading student lists..</p>
    }
  return (
    <>
    <div>
      {student.map((student)=>(
        <div key={student._id}>
          <h4>{student.name}</h4>
          <p>{student.roll}</p>
          <p>{student.className}</p>

        </div>
      ))}
      
    </div>
 
    </>
  )
}

export default Student
