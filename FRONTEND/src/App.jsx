import React from 'react'
import { BrowserRouter, Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home.jsx'
import CoursesList from './pages/student/CoursesList';
import MyEnrollments from './pages/student/MyEnrollments';
import CourseDetail from './pages/student/CourseDetail';
import Player from './pages/student/Player';
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import Mycourses from './pages/educator/Mycourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Error from './pages/student/Error.jsx';
import Navbar from './components/students/Navbar.jsx';

const App = () => {

  const iseducator =  useMatch('/educator/*')


  return (
    <div className="bg-gradient-to-b from-white via-[#f0ffff] to-[#93e4e4]">

   

   
      

      {   !iseducator &&   <Navbar/>  }
     
      <Routes>
        <Route path='/' element={<Home/>}   />
        <Route path='/course-list' element={<CoursesList/>}   />
        <Route path='/course-list/:input' element={<CoursesList/>}   />
        <Route path='/my-enrollments' element={<MyEnrollments/>}   />
        <Route path='/course/:id'  element={<CourseDetail/>}/>
        <Route  path='/player/:courseId' element={<Player/>}     />
        <Route  path='*' element={<Error/>}     />
        <Route path='/educator' element={<Educator/>}>
            <Route path='educator' element={<Dashboard/>}  />
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-courses' element={<Mycourses/>}/>
            <Route path='student-enrolled' element={<StudentsEnrolled/>}/>


        </Route>


  
      </Routes>
     
      </div>
   
  )
}
 
export default App
