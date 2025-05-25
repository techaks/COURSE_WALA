import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      educator
      {
        <Outlet/>
      }
    </div>
  )
}

export default Educator
