import React from 'react'
import { Template } from '../components/Template'
import signupimage from '../assets/signup.png'

export const Signup = ({setloggdIn}) => {
  return (

    <Template

     title="join the course which is loved by each and every single student  "
     desc1="join now"
     desc2='discount availabe for first 1000 students'
     formType='signup'
     image={signupimage}
     setloggedIn={setloggdIn}
    
    
    
    
    
    
    
    />
  )
}
