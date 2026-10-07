import React from 'react'
import {useRouteError} from 'react-router-dom'
const ErrorComponent = () => {
  const error = useRouteError();
  console.log('error',error)
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
        <p>{error.message}</p>
    </div>
  )
}

export default ErrorComponent