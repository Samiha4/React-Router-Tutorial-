import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorJobList = () => {
    const error = useRouteError()
  return (
    <div>
      { <p style={{color:'red'}}>{error.message}</p>}
    </div>
  )
}

export default ErrorJobList
