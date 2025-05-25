import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourses} = useContext(Appcontext)
  return (
    <div className='flex items-center flex-col gap-2 mt-12'>
      <p className='font-bold text-xl'>Learn in-demand skills, anytime, anywhere.</p>
      <p>
        Cut through the noise and learn exactly what you need to build, grow, and thrive .
      </p>

       <div className='grid grid-cols-4  gap-7 p-8'>

      
      {
        allCourses && allCourses.slice(0,4).map((course , index)=><CourseCard key={index} course={course}/>)
      }
       </div>

     <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-blue-500 hover:text-blue-800 border-2 p-2 rounded-md'>
     Show All Courses
     </Link>
      
    </div>
  )
}

export default CoursesSection
 