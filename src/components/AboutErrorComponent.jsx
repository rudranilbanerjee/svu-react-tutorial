import React from 'react'
import {useRouteError} from 'react-router-dom'
const AboutErrorComponent = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>About Error Component</h1>
    </div>
  )
}

export default AboutErrorComponent