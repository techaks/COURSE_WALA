import React from 'react'
import SeacrhBar from './SeacrhBar'
import Companies from './Companies'
import CoursesSection from './CoursesSection'
import Testomonial from './Testomonial'

const Hero = () => {
  return (
    <div className='flex flex-col mt-8 md:mt-24 items-center gap-3'>
      <p className='text-2xl font-bold'>
        Education that actually works in the real world
      </p>
      <p className='text-2xl font-bold'>From beginner to <span className='text-blue-700'>
       job-ready </span>  — all in one platform</p>
      <p className='text-gray-600'>
        Join thousands of learners leveling up their skills with expert-led courses, real-world projects <br /> and a community that grows with you. Your journey to becoming a pro starts right here.
      </p>
      <SeacrhBar/>
      <Companies/>
      <CoursesSection/>
      <Testomonial/>
     
      
    </div>
  )
}

export default Hero
