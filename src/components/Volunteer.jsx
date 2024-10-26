import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Volunteer() {
    const obj=useLocation()
  return (
    <div>
          <h2>Hi {obj.username}</h2>
    </div>
  )
}

export default Volunteer