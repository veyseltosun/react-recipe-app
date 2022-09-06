
import React from 'react'
import { useLocation } from 'react-router-dom'

function Details(props) {
  const location = useLocation();

  console.log(location)
  return (
    <div>Details</div>
  )
}

export default Details
