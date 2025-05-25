import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SeacrhBar = ({data}) => {

  const [input,setInput] = useState(data ? data : " ")
  const navigate = useNavigate();

  const onSubmit = (e)=>{
    e.preventDefault();
    navigate('/course-list/' + input)

  }

  return (
    
      <form  onSubmit={onSubmit} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded' >
        <img src={assets.search_icon} alt="icon" className='md:w-auto w-10 px-3 ' />
        <input 
        onChange={(e)=>setInput(e.target.value)}
        type="text"
        placeholder='search course here'
        className='w-full h-full outline-none text-gray-500/80 text-black'

        />
        <button
        onClick={onsubmit}
         className='bg-blue-700 rounded hover:bg-blue-900 text-white md:px-16 px-7 md:py-3 py-2 mx-1'>
          Search
        </button>

      </form>
      
    
  )
}

export default SeacrhBar
