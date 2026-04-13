import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../Api/Api'
import "./StudentProfile.css"

function StudentProfile() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [roll, setRoll] = useState("")
  const [className, setClassName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentRes = await api.get(`/students/${id}`)
        const student = studentRes.data.data
        setName(student.name)
        setRoll(student.roll)
        setClassName(student.className)
        setLoading(false);
      } catch (error) {
        console.log("error fetching student", error.message)
        setMessage("unable to fetch student");
         setLoading(false);
      } 
    }
    fetchStudent()
  }, [id])

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    try {
      const res = await api.put(`/students/${id}`, {
        name,
        roll,
        className
      })

      console.log(res.data)
      setMessage("student updated successfully")
    } catch (error) {
      console.log("error updating student", error.message)
      setMessage("student update failed");
    }
  }

  const handleDeleteStudent = async () => {
    try {
      await api.delete(`/students/${id}`)
      setMessage("student deleted successfully")
      navigate("/dashboard");
    } catch (error) {
      console.log("error occured while deleting student", error.message)
      setMessage("student deletion failed");
    }
  }

  if (loading) {
    return <p>Loading student profile...</p>
  }

  return (
    <>
     <h2 className="main-heading">School Management System</h2>
      <div className="studentProfile-containers">
          <h4 className="studentProfile-heading">Student Profile</h4>
  
        <form onSubmit={handleUpdateStudent} className="form-container">
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="studentProfile-input"
          />

          <input
            type="text"
            placeholder="enter roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="studentProfile-input"
          />

          <input
            type="text"
            placeholder="enter class name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="studentProfile-input"
          />

          <button type="submit" className="updateProfilebtn">Update Student</button>
        </form>

        <button onClick={handleDeleteStudent} className="deleteProfilebtn">Delete Student</button>

        {message && <p className="event-message">{message}</p>}
      </div>
    </>
  )
}

export default StudentProfile