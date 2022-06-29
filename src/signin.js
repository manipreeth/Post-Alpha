import React,{useState,useContext} from 'react'
import {Form} from 'react-bootstrap'

import {Displaycontext} from './App'

function Signin() {

  const [signinEmail,handleSigninEmail] = useState('')
  const [signinPassword,handleSigninPassword] = useState('')
  const {display,handleDisplay} = useContext(Displaycontext)


  return(
    <div className='signinform signupform'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={signinEmail} onChange={event=>handleSigninEmail(event.target.value)}
         placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={signinPassword} 
        onChange={event=>handleSigninPassword(event.target.value)}  placeholder="Password" />
      
      </Form.Group>
    </Form>
      <button className='submitbutton login loginformbuttons' onClick={()=>alert('Re-check Details Entered')}>Login</button><br/>
      <button className='no loginformbuttons' onClick={()=>handleDisplay(false)}>Create Account</button>
    </div>
  )

}
export default Signin;