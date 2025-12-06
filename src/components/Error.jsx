import React from 'react'
import { useRouteError , useNavigate } from 'react-router-dom'
const Error = () => {

    const error = useRouteError()
    const navigate =useNavigate()

  return (
    <div>
       <h3>An Error Occurred. </h3>
       <p>{error.message} </p>
     <button onClick={()=>navigate('/')}>Back Home Page </button>
    </div>
  )
}

export default Error
